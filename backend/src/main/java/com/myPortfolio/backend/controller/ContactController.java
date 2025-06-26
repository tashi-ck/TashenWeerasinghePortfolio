package com.myPortfolio.backend.controller;

import com.myPortfolio.backend.dto.ContactFormDto;
import com.myPortfolio.backend.service.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final EmailService emailService;

    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<String> submitContactForm(@Validated @RequestBody ContactFormDto contactForm) {
        emailService.sendContactFormEmail(
                contactForm.getName(),
                contactForm.getEmail(),
                contactForm.getMessage()
        );

        return ResponseEntity.ok("Message sent successfully!");
    }
}
