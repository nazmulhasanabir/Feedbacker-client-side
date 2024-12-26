
FEEDBACKER

The Best Service Review Application System is a robust and user-friendly platform that allows users to explore, review, and manage services effectively. This application provides a seamless interface for service providers and reviewers, ensuring a professional experience.

Live URL: https://feedbacker-76382.web.app/


Key Features

User Capabilities

Service Management:

Add, update, and delete services.

View detailed information for each service.

Review System:

Add, edit, and delete reviews.

Manage reviews through a dedicated page.

Dynamic Pages:

Home Page with featured services and additional sections.

Fully responsive design for mobile, tablet, and desktop.

Core Functionalities

Firebase authentication for secure login and registration.

JWT-based authentication for API security.

Search and filter options for easy navigation.

Dynamic titles and a user-friendly 404 error page.

Toast notifications for CRUD operations.

Framer Motion animations for interactive user experience.

Deployment Guidelines

Ensure:

The server works perfectly in production without any errors (CORS, 404, or 504).

Live links are functional and error-free.

Logged-in users do not redirect to login on reloading private routes.

Firebase and MongoDB credentials are secured using environment variables.

Deployment Platforms

Client: [Vercel]


Page Structure

Layout

Navbar:

Before Login: Logo, Home, Services, Login, Register.

After Login: Logo, Home, Services, Add Service, My Reviews, My Services, User Avatar, Logout.

Dynamic Main Section: Updates based on the route.

Footer: Logo, description, copyright, and useful links.

Pages

Home Page:

Banner Section: Carousel with highlights.

Featured Services Section: Displays 6 services.

Meet Our Partners Section: Key partners with their logos.

Extra Sections: Two meaningful additional sections.

Service Pages:

List of all services with a search and filter option.

Service Details with review count and reviews.

Authentication:

Login and Register with Firebase.

Password validation.

Private Pages:

Add Service: Form to add services.

My Services: Table with update and delete options.

My Reviews: Cards with update and delete options.

Commit Guidelines

Client: At least 15 meaningful commits.

Server: At least 8 meaningful commits.

Commit messages should be descriptive (e.g., "Added JWT token validation for secure APIs").

Packages Used

Frontend:

React, React Router DOM

Framer Motion

React Toastify

Tailwind CSS

React Countup

Backend:

Express

MongoDB

JWT

Dotenv

Development Tips

Ensure all components are properly aligned with consistent spacing.

Avoid overloading the design with unnecessary elements.

Make use of meaningful color contrasts to ensure readability.

Keep the codebase clean and organized for easier maintenance.

Additional Functionalities

JWT authentication for API security.

Search and filter features for improved usability.

Countup for displaying platform stats (users, reviews, services).

Final Checks



License

This project is open-source and available for further development and contributions.