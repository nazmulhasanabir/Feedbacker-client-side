# ⛰️ FEEDBACKER

The Best Service Review Application System is a robust and user-friendly
platform that allows users to explore, review, and manage services effectively.
This application provides a seamless interface for 
service providers and reviewers, ensuring a professional experience.
adventure experiences seamlessly.
It offers a user-friendly interface, authentication, and detailed adventure listings.

![FEEDBACKER](https://i.ibb.co.com/j97VXdP6/image.png)

## 🌐 Live Demo  
🔗 **Live Site:** [FEEDBACKER] (https://feedbacker-76382.web.app/)

---

## 📌 Table of Contents

- [🚀 Features](#-features)
- [🛠 Technologies Used](#-technologies-used)
- [📥 Installation](#-installation)
- [📦 Dependencies](#-dependencies)
- [📖 Usage](#-usage)

---

## 🚀 Technologies Used  
The project is built with the following technologies:  

- **React** – Frontend framework  
- **React Router** – For dynamic routing  
- **Firebase** – Authentication & database  
- **Tailwind CSS & Material Tailwind** – UI styling  
- **TanStack Query & TanStack Table** – Data fetching & table UI  
- **Axios** – API requests  
- **Recharts** – Salary graph visualization  
- **Swiper** – Testimonial slider  
- **React Hook Form** – Form management  
- **SweetAlert2** – Smooth toast notifications  

---



## 🛠️ How to Run Locally  

1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/your-repo/staff-sync.git
cd staff-sync
```

2️⃣ **Install Dependencies**  
```sh
npm install
```

3️⃣ **Set Up environment file**  
Here’s the `.env` configuration formatted in Markdown:

# Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_apiKey=your_firebase_apiKey
VITE_authDomain=your_firebase_authDomain
VITE_projectId=your_firebase_projectId
VITE_storageBucket=your_firebase_storageBucket
VITE_messagingSenderId=your_firebase_messagingSenderId
VITE_appId=your_firebase_appId
VITE_imageUploadKey=your_imageUploadKey
VITE_baseUrl=your_server_baseUrl
VITE_stripe_key=your_stripe_key
```
> **Note:** Replace `your_firebase_apiKey`, `your_imageUploadKey`, etc., with your actual keys.

Make sure to add `.env` to your `.gitignore` file to keep your credentials secure.

4️⃣ **Run the Application**  
```sh
npm run dev
```

---
## 📦 Dependencies

```json
{
  "react": "^18.0.0",
  "react-router-dom": "^6.0.0",
  "tailwindcss": "^3.0.0",
  "firebase": "^9.0.0",
  "swiper": "^8.0.0",
  "aos": "^2.3.4"
}
```

---

## 📖 Usage

1. **Navbar:**  
   - Before Login: Logo, Home, Services, Login, Register.  
   - After Login: Logo, Home, Services, Add Service, My Reviews, My Services, User Avatar, Logout.

2. **Page Structure:**  
   - **Banner Section:** Carousel with highlights .  
   - **Featured Services Section:** Displays 6 services .  
   - **Meet Our Partners Section:** Key partners with their logos.  
   **Extra Sections:**  Two meaningful additional sections.  

3. ** Service Pages:**  
   -List of all services with a search and filter option..  
   -Service Details with review count and reviews.  

4. **Authentication:**  
   - Login and Register with Firebase.
   -Password validation for security.  

✅Private Pages

-Add Service: Form to add new services.
-My Services: Table with update and delete options.
-My Reviews: Cards with update and delete options.

🔐 Deployment Guidelines
-Ensure the server works perfectly in production (avoid CORS, 404, or 504 errors).
-Validate all live links before deployment.
-Prevent logged-in users from being redirected to login after page reloads.
-Secure Firebase and MongoDB credentials using environment variables.

Deployment Platforms:
Client: Vercel
Server: Render / Railway

---


Enjoy your adventure with **FEEDBACKER**! 🚀🌿
