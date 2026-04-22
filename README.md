# 🏨 Hotel Booking Automation (Cypress)

## 📌 Project Overview
This project automates the reservation flow of a hotel booking website using **Cypress** and **JavaScript**.

It covers end-to-end user journeys including navigation, booking, validation, and price verification.

---

## 🧪 Test Cases Covered

### Reservation Flow
- **TC007** – Navigate to Plans page
- **TC008** – Click Reserve Room button
- **TC009** – Complete reservation form with valid data
- **TC010** – Submit reservation flow
- **TC011** – Validate error messages for empty fields
- **TC012** – Verify price updates when stay changes

### Additional Tests
- **Smoke Tests** – Basic application checks
- **Auth Tests** – Authentication-related scenarios

---

## 🏗️ Framework Design

This project uses the **Page Object Model (POM)** design pattern:

- `homePage.js` → Handles navigation actions
- `bookingPage.js` → Handles reservation form interactions
- `booking.cy.js` → End-to-end test scenarios

---

## 🛠️ Tools & Technologies

- Cypress
- JavaScript
- Node.js
- Git & GitHub

---

## ▶️ How to Run

```bash
npm install
npx cypress open
