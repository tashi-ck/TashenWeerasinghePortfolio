package com.myPortfolio.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    private final String toEmail;
    private final String fromEmail;

    @Autowired
    public EmailService(JavaMailSender mailSender,
                        @Value("${contact.email.to:#{null}}") String toEmail,
                        @Value("${contact.email.from:#{null}}") String fromEmail) {
        this.mailSender = mailSender;
        this.toEmail = toEmail;
        this.fromEmail = fromEmail;

        if (toEmail == null || fromEmail == null) {
            throw new IllegalStateException("Email properties not configured properly. Please set contact.email.to and contact.email.from in application.properties");
        }
    }

    public void sendContactFormEmail(String name, String senderEmail, String message) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(toEmail);
        mailMessage.setFrom(fromEmail);
        mailMessage.setSubject("New contact form submission from " + name);
        mailMessage.setText("Name: " + name + "\nEmail: " + senderEmail + "\n\nMessage:\n" + message);

        mailSender.send(mailMessage);
    }
}