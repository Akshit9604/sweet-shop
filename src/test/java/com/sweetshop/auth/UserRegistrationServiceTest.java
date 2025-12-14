package com.sweetshop.auth;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.sweetshop.sweet_shop.auth.Role;
import com.sweetshop.sweet_shop.auth.User;
import com.sweetshop.sweet_shop.auth.UserRepository;
import com.sweetshop.sweet_shop.auth.UserService;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserRegistrationServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void shouldRegisterUserSuccessfully() {
        when(userRepository.findByUsername("akshit"))
                .thenReturn(Optional.empty());

        when(passwordEncoder.encode("password"))
                .thenReturn("hashedPassword");

        User savedUser = new User("akshit", "hashedPassword", Role.USER);
        when(userRepository.save(any(User.class)))
                .thenReturn(savedUser);

        User result = userService.register(
                "akshit",
                "password",
                Role.USER
        );

        assertEquals("akshit", result.getUsername());
        assertEquals(Role.USER, result.getRole());
        assertEquals("hashedPassword", result.getPassword());
    }

    @Test
    void shouldFailIfUsernameExists() {
        when(userRepository.findByUsername("akshit"))
                .thenReturn(Optional.of(new User()));

        Exception ex = assertThrows(
                IllegalArgumentException.class,
                () -> userService.register("akshit", "pass", Role.USER)
        );

        assertEquals("Username already exists", ex.getMessage());
    }

    @Test
    void shouldFailIfPasswordIsEmpty() {
        Exception ex = assertThrows(
                IllegalArgumentException.class,
                () -> userService.register("akshit", "", Role.USER)
        );

        assertEquals("Password cannot be empty", ex.getMessage());
    }

    @Test
    void shouldFailIfRoleIsNull() {
        Exception ex = assertThrows(
                IllegalArgumentException.class,
                () -> userService.register("akshit", "pass", null)
        );

        assertEquals("Role is required", ex.getMessage());
    }
}
