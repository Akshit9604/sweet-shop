package com.sweetshop.sweet_shop.sweet;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class SweetService {

    private final SweetRepository sweetRepository;

    public SweetService(SweetRepository sweetRepository) {
        this.sweetRepository = sweetRepository;
    }

    public Sweet createSweet(Sweet sweet) {
        if (sweet.getName() == null || sweet.getName().isBlank()) {
            throw new IllegalArgumentException("Sweet name is required");
        }
        if (sweet.getCategory() == null || sweet.getCategory().isBlank()) {
            throw new IllegalArgumentException("Category is required");
        }
        if (sweet.getPrice() == null || sweet.getPrice() <= 0) {
            throw new IllegalArgumentException("Price must be greater than 0");
        }
        if (sweet.getQuantity() == null || sweet.getQuantity() < 0) {
            throw new IllegalArgumentException("Quantity cannot be negative");
        }
        return sweetRepository.save(sweet);
    }

    public List<Sweet> getAllSweets() {
        return sweetRepository.findAll();
    }

    public List<Sweet> searchSweets(String name, String category, Double minPrice, Double maxPrice) {
        return sweetRepository.search(name, category, minPrice, maxPrice);
    }

    public Optional<Sweet> getSweetById(Long id) {
        return sweetRepository.findById(id);
    }

    public Sweet updateSweet(Long id, Sweet sweetDetails) {
        Sweet sweet = sweetRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Sweet not found with id: " + id));

        if (sweetDetails.getName() != null && !sweetDetails.getName().isBlank()) {
            sweet.setName(sweetDetails.getName());
        }
        if (sweetDetails.getCategory() != null && !sweetDetails.getCategory().isBlank()) {
            sweet.setCategory(sweetDetails.getCategory());
        }
        if (sweetDetails.getPrice() != null && sweetDetails.getPrice() > 0) {
            sweet.setPrice(sweetDetails.getPrice());
        }
        if (sweetDetails.getQuantity() != null && sweetDetails.getQuantity() >= 0) {
            sweet.setQuantity(sweetDetails.getQuantity());
        }

        return sweetRepository.save(sweet);
    }

    public void deleteSweet(Long id) {
        if (!sweetRepository.existsById(id)) {
            throw new IllegalArgumentException("Sweet not found with id: " + id);
        }
        sweetRepository.deleteById(id);
    }

    @Transactional
    public Sweet purchaseSweet(Long id, Integer quantity) {
        Sweet sweet = sweetRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Sweet not found with id: " + id));

        if (quantity <= 0) {
            throw new IllegalArgumentException("Purchase quantity must be greater than 0");
        }

        if (sweet.getQuantity() < quantity) {
            throw new IllegalArgumentException("Insufficient stock. Available: " + sweet.getQuantity() + ", Requested: " + quantity);
        }

        sweet.setQuantity(sweet.getQuantity() - quantity);
        return sweetRepository.save(sweet);
    }

    @Transactional
    public Sweet restockSweet(Long id, Integer quantity) {
        Sweet sweet = sweetRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Sweet not found with id: " + id));

        if (quantity <= 0) {
            throw new IllegalArgumentException("Restock quantity must be greater than 0");
        }

        sweet.setQuantity(sweet.getQuantity() + quantity);
        return sweetRepository.save(sweet);
    }
}
