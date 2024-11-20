# Project Assignment & Tracking (PAT)

**Welcome to the Project Assignment & Tracking system!**  
This application is designed to simplify project management by providing tools to assign tasks, track progress, and foster collaboration among team members.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Development](#backend-development)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

The **Project Assignment & Tracking (PAT)** system is a web-based application tailored for efficient project management.  
With PAT, you can:
- Assign projects to team members.
- Monitor project milestones and track progress in real-time.
- Foster collaboration between senior and junior developers.

---

## Features

1. **Project Assignment**
   - Assign projects to individuals or teams.
   - Define deadlines and milestones.

2. **Real-Time Progress Tracking**
   - Visualize project completion percentages.
   - Stay on top of deadlines.

3. **Team Collaboration**
   - Enable milestone-based task management.
   - Promote teamwork across roles.

4. **Responsive Design**
   - Seamless experience across devices.

---

## Technology Stack

**Frontend:**
- HTML5, CSS3 (with animations and responsive design)
- JavaScript (for dynamic UI)

**Backend:** *(to be implemented)*
- Node.js with Express.js (or preferred backend framework)
- MongoDB or MySQL for database management

**Additional Tools:**
- Version Control: Git & GitHub
- Deployment: Netlify (Frontend) and Heroku/Render (Backend)

---


## Backend Development

To complete the project functionality, implement the backend API:

1. **Endpoints:**
   - `POST /api/projects`: Create a new project.
   - `GET /api/projects`: Retrieve all projects.
   - `PUT /api/projects/:id`: Update project details.
   - `DELETE /api/projects/:id`: Remove a project.

2. **Database Schema:**
   - **Projects Table:**
     - `id`: Unique identifier.
     - `name`: Project name.
     - `description`: Detailed description.
     - `deadline`: Due date.
     - `team_members`: List of assigned members.
     - `milestones`: Array of tasks.

---

## Contact

**Divyanshu Pandey**  
Tech Enthusiast | Blockchain & Web Developer  
📧 Email: [divyanshupandey220419@acropolis.in](mailto:divyanshupandey220419@acropolis.in)  
📍 Indore, India  

---

Happy Coding! 🚀



# Secure Login System

This is a secure and visually appealing login system designed for project management platforms or similar applications. The login interface is built with HTML, CSS, and JavaScript, featuring advanced styling and animations to enhance user experience.

---

## Features

### 1. **Dynamic UI**
- Modern, user-friendly design with advanced CSS for eye-catching effects.
- Gradient background animation for a visually engaging experience.
- Smooth fade-in animation for the login card.

### 2. **Role-Based Login**
- Users can select their roles: **Student**, **Alumni**, or **Admin**.
- Each role can be handled differently on the backend (currently mocked in JavaScript).

### 3. **Interactive Form Elements**
- Hover effects on input fields and buttons.
- Real-time feedback for incorrect form submissions.
- Animated login button with a responsive gradient effect.

### 4. **Forgot Password Flow**
- A basic password reset feature (mocked as a pop-up alert for demo purposes).

### 5. **Responsive Design**
- Fully responsive layout, suitable for all devices.

---

## Technologies Used
- **HTML**: For the structure of the login page.
- **CSS**: For advanced styling, animations, and responsive design.
- **JavaScript**: For form validation and user interaction.

---

## How to Use
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/repository-name.git
    ```
2. Open the `login.html` file in any modern web browser.

3. Test the form by filling out the fields:
   - Select a role.
   - Enter an email and password.
   - Click the **Login** button.

4. Use the **Forgot password?** link to trigger the password reset alert (mock functionality).

---

## File Structure
- **`login.html`**: Main file for the login page.
- **`styles.css`**: Contains the advanced CSS for styling and animations.
- **`scripts.js`**: JavaScript logic for form handling and interactivity.
- **`README.md`**: Documentation for the project.

---

## Screenshots
### **Login Page**
![Login Page](screenshot.png) <!-- Replace with the actual screenshot path -->

---

## Future Enhancements
- Integrate backend authentication using Node.js, Flask, or any preferred framework.
- Add database connectivity for real user data.
- Implement role-based dashboard redirection.
