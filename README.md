# ApartmentCare

**ApartmentCare** is a web-based apartment issue management platform that allows residents to log in, report issues within their apartment, and receive updates or alerts from the landlord or administrator. The platform improves communication, transparency, and response time for apartment management.

---

## Project Overview

ApartmentCare centralizes apartment issue reporting and management. Residents can report problems such as water leaks or broken lights, view the status of their reports, and receive announcements from the administrator. Admins can manage tenant issues, post announcements, and update issue statuses.

---

## Features

### **For Residents (Users):**
- Login with house number and password.
- Report apartment issues (CRUD: Create and View).
- View the status of their submitted issues: Pending, In Progress, Resolved.
- Receive notifications for new announcements.
- Logout with a loading screen.

### **For Admins:**
- Login with admin credentials.
- Post announcements for all residents.
- View reported issues from tenants along with their house number.
- Update issue status to In Progress or Resolved.
- Logout with a loading screen.

### **Shared Features:**
- Toast notifications for events like login, logout, new account creation, and new announcements.
- Client-side routing using React Router for seamless navigation.

---

## Target Users

- Urban apartment residents who want an organized way to report maintenance issues.
- Small-to-medium landlords or apartment administrators managing multiple tenants.

---

## Problem Being Solved

In many apartment complexes:
- Residents report issues via WhatsApp or verbal complaints.
- Issues get lost or ignored.
- There is no clear status tracking.
- Communication between residents and landlords is poor.

**ApartmentCare** solves this by providing:
- Centralized issue reporting.
- Real-time updates on issue status.
- Clear communication channels via announcements.

---

## Technology Stack

- **Frontend:** React.js
- **Routing:** React Router
- **State Management:** useState (React Hooks)
- **Styling:** CSS (custom)
- **Version Control:** Git/GitHub

---

## File Structure
# ApartmentCare

**ApartmentCare** is a web-based apartment issue management platform that allows residents to log in, report issues within their apartment, and receive updates or alerts from the landlord or administrator. The platform improves communication, transparency, and response time for apartment management.

---

## Project Overview

ApartmentCare centralizes apartment issue reporting and management. Residents can report problems such as water leaks or broken lights, view the status of their reports, and receive announcements from the administrator. Admins can manage tenant issues, post announcements, and update issue statuses.

---

## Features

### **For Residents (Users):**
- Login with house number and password.
- Report apartment issues (CRUD: Create and View).
- View the status of their submitted issues: Pending, In Progress, Resolved.
- Receive notifications for new announcements.
- Logout with a loading screen.

### **For Admins:**
- Login with admin credentials.
- Post announcements for all residents.
- View reported issues from tenants along with their house number.
- Update issue status to In Progress or Resolved.
- Logout with a loading screen.

### **Shared Features:**
- Toast notifications for events like login, logout, new account creation, and new announcements.
- Client-side routing using React Router for seamless navigation.

---

## Target Users

- Urban apartment residents who want an organized way to report maintenance issues.
- Small-to-medium landlords or apartment administrators managing multiple tenants.

---

## Problem Being Solved

In many apartment complexes:
- Residents report issues via WhatsApp or verbal complaints.
- Issues get lost or ignored.
- There is no clear status tracking.
- Communication between residents and landlords is poor.

**ApartmentCare** solves this by providing:
- Centralized issue reporting.
- Real-time updates on issue status.
- Clear communication channels via announcements.

---

## Technology Stack

- **Frontend:** React.js
- **Routing:** React Router
- **State Management:** useState (React Hooks)
- **Styling:** CSS (custom)
- **Version Control:** Git/GitHub

---

## File Structure
ApartmentCare/
├─ src/
│ ├─ Components/
│ │ ├─ LoginSignUp/
│ │ │ ├─ Login.jsx
│ │ │ ├─ SignUp.jsx
│ │ │ └─ LoginSignUp.css
│ │ ├─ Dashboard/
│ │ │ ├─ index.jsx
│ │ │ └─ dashboard.css
│ │ └─ Admin/
│ │ ├─ AdminDash.jsx
│ │ └─ AdminDash.css
│ ├─ App.jsx
│ └─ index.css
├─ package.json
└─ README.md

##
*git clone<repo>
*npm install
*npm run dev
