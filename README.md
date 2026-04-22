# 🏨 Hotel Booking Automation Project

![Cypress Tests](https://github.com/KS6000/Hotel-Booking-Site/actions/workflows/cypress.yml/badge.svg)

## 📌 Project Overview
This project is an end-to-end **automation testing framework** built using **Cypress**.

It tests a hotel booking application, covering:
- Navigation flows
- Reservation functionality
- Form validation
- End-to-end booking scenarios

The framework is designed using the **Page Object Model (POM)** for better scalability and maintainability.

---

## 🧪 Test Coverage

### 🔹 Smoke Tests
- Basic application checks

### 🔹 Auth Tests
- Authentication-related scenarios

### 🔹 Booking Tests
- Navigate to reservation page
- Click reserve room
- Complete booking form
- Submit reservation
- Validate confirmation
- Validate error messages
- Verify dynamic price updates

---

## 🏗️ Framework Design (POM)

This project follows the **Page Object Model (POM)**:

- `homePage.js` → Handles navigation actions  
- `bookingPage.js` → Handles booking form interactions  
- `booking.cy.js` → End-to-end test scenarios  

---

## ⚙️ Tech Stack

- **Cypress**
- **JavaScript**
- **Node.js**
- **Git & GitHub**
- **GitHub Actions (CI/CD)**

---

## 🚀 How to Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/KS6000/Hotel-Booking-Site.git
cd Hotel-Booking-Site
