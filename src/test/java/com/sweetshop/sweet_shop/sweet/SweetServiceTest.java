package com.sweetshop.sweet_shop.sweet;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class SweetServiceTest {

    @Mock
    private SweetRepository sweetRepository;

    @InjectMocks
    private SweetService sweetService;

    private Sweet testSweet;

    @BeforeEach
    void setUp() {
        testSweet = new Sweet("Chocolate Bar", "Chocolate", 2.50, 100);
        testSweet.setId(1L);
    }

    @Test
    void testCreateSweet_Success() {
        when(sweetRepository.save(any(Sweet.class))).thenReturn(testSweet);

        Sweet created = sweetService.createSweet(testSweet);

        assertNotNull(created);
        assertEquals("Chocolate Bar", created.getName());
        assertEquals(2.50, created.getPrice());
        verify(sweetRepository, times(1)).save(any(Sweet.class));
    }

    @Test
    void testCreateSweet_InvalidName() {
        testSweet.setName("");

        assertThrows(IllegalArgumentException.class, () -> {
            sweetService.createSweet(testSweet);
        });
    }

    @Test
    void testPurchaseSweet_Success() {
        when(sweetRepository.findById(1L)).thenReturn(Optional.of(testSweet));
        when(sweetRepository.save(any(Sweet.class))).thenReturn(testSweet);

        Sweet updated = sweetService.purchaseSweet(1L, 5);

        assertEquals(95, updated.getQuantity());
        verify(sweetRepository, times(1)).save(any(Sweet.class));
    }

    @Test
    void testPurchaseSweet_InsufficientStock() {
        when(sweetRepository.findById(1L)).thenReturn(Optional.of(testSweet));

        assertThrows(IllegalArgumentException.class, () -> {
            sweetService.purchaseSweet(1L, 150);
        });
    }

    @Test
    void testRestockSweet_Success() {
        when(sweetRepository.findById(1L)).thenReturn(Optional.of(testSweet));
        when(sweetRepository.save(any(Sweet.class))).thenReturn(testSweet);

        Sweet updated = sweetService.restockSweet(1L, 50);

        assertEquals(150, updated.getQuantity());
        verify(sweetRepository, times(1)).save(any(Sweet.class));
    }
}
