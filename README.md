# 🍬 Sweet Shop Management System

A full-stack web application for managing a sweet shop inventory, built with **Spring Boot 3** (Java 17) and **React**. Features include user authentication, sweet inventory management, search functionality, purchase system, and an admin panel.

## 🔗 Repository & Live Application

**GitHub Repository:** [https://github.com/Akshit9604/sweet-shop](https://github.com/Akshit9604/sweet-shop)

**🌐 Live Application (Railway):** [https://web-production-44b0c.up.railway.app](https://web-production-44b0c.up.railway.app)

**📊 Dashboard:** [https://web-production-44b0c.up.railway.app/dashboard](https://web-production-44b0c.up.railway.app/dashboard)

---

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Setup Instructions](#-setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Running the Application](#running-the-application)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [My AI Usage](#-my-ai-usage)
- [License](#-license)

---

## ✨ Features

### Backend (Spring Boot 3)
- ✅ **User Registration & Login** with JWT Authentication
- ✅ **Sweet CRUD Operations** (Create, Read, Update, Delete)
- ✅ **Advanced Search** (by name, category, price range)
- ✅ **Inventory Management** (Purchase & Restock)
- ✅ **Role-based Access Control** (User & Admin)
- ✅ **RESTful API Design**
- ✅ **Database Integration** (H2 & MySQL support)

### Frontend (React)
- ✅ **Modern Single-Page Application** (SPA)
- ✅ **User Authentication** (Login/Register)
- ✅ **Sweet Dashboard** with Search & Filter
- ✅ **Purchase Functionality**
- ✅ **Admin Panel** (Add, Edit, Delete, Restock)
- ✅ **Responsive Design** with beautiful UI
- ✅ **Real-time Updates**

---

## 🛠 Technology Stack

### Backend
- **Framework:** Spring Boot 3.5.8
- **Language:** Java 17
- **Security:** Spring Security + JWT (JSON Web Tokens)
- **Database:** H2 (default, in-memory) / MySQL (production)
- **Build Tool:** Maven 3.9+
- **Testing:** JUnit 5, Spring Boot Test

### Frontend
- **Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **HTTP Client:** Axios 1.6.2
- **Routing:** React Router DOM 6.20.0
- **Styling:** CSS3 (Modern gradient design)

---

## 📁 Project Structure

```
sweet-shop/
├── src/
│   ├── main/
│   │   ├── java/com/sweetshop/sweet_shop/
│   │   │   ├── auth/              # Authentication & JWT
│   │   │   │   ├── AuthController.java
│   │   │   │   ├── JwtService.java
│   │   │   │   ├── JwtAuthenticationFilter.java
│   │   │   │   ├── User.java
│   │   │   │   ├── UserService.java
│   │   │   │   └── UserRepository.java
│   │   │   ├── sweet/              # Sweet management
│   │   │   │   ├── SweetController.java
│   │   │   │   ├── SweetService.java
│   │   │   │   ├── Sweet.java
│   │   │   │   └── SweetRepository.java
│   │   │   ├── security/           # Security configuration
│   │   │   │   └── SecurityConfig.java
│   │   │   ├── config/             # Configuration
│   │   │   │   └── WebConfig.java
│   │   │   └── SweetShopApplication.java
│   │   └── resources/
│   │       ├── static/             # React build files
│   │       ├── application.properties
│   │       ├── application-prod.properties
│   │       └── application-railway.properties
│   └── test/                       # Test files
│       └── java/com/sweetshop/sweet_shop/
│           ├── auth/
│           ├── sweet/
│           └── SweetShopApplicationTests.java
├── frontend/                       # React application
│   ├── src/
│   │   ├── components/             # React components
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── AdminPanel.jsx
│   │   ├── utils/                  # Utilities
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── Dockerfile                       # Docker configuration
├── docker-compose.yml              # Docker Compose
├── pom.xml                         # Maven configuration
└── README.md
```

---

## 🚀 Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- **Java 17 or higher** - [Download Java](https://www.oracle.com/java/technologies/downloads/)
- **Maven 3.6+** - [Download Maven](https://maven.apache.org/download.cgi)
- **Node.js 18+** - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download Git](https://git-scm.com/downloads)
- **MySQL 8.0+** (optional, H2 works by default)

### Backend Setup

#### Step 1: Clone the Repository

```bash
git clone https://github.com/Akshit9604/sweet-shop.git
cd sweet-shop
```

#### Step 2: Build the Project

```bash
# Clean and build
mvn clean install

# Or just compile
mvn compile
```

#### Step 3: Run the Backend

**Option A: Using Maven (Recommended)**
```bash
mvn spring-boot:run
```

**Option B: Using JAR**
```bash
# Build JAR first
mvn clean package

# Run JAR
java -jar target/sweet-shop-0.0.1-SNAPSHOT.jar
```

The backend will start on **http://localhost:8081**

#### Step 4: Verify Backend is Running

```bash
# Test health endpoint
curl http://localhost:8081/api/auth/ping

# Should return: OK
```

#### Step 5: Database Configuration (Optional)

**Default (H2 - No Setup Required):**
- The application uses H2 in-memory database by default
- No configuration needed - works immediately!

**MySQL Configuration (Optional):**
1. Create a MySQL database:
   ```sql
   CREATE DATABASE sweetshop;
   ```

2. Update `src/main/resources/application-mysql.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/sweetshop
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

3. Run with MySQL profile:
   ```bash
   mvn spring-boot:run -Dspring-boot.run.profiles=mysql
   ```

### Frontend Setup

#### Step 1: Navigate to Frontend Directory

```bash
cd frontend
```

#### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:
- react
- react-dom
- react-router-dom
- axios
- vite
- @vitejs/plugin-react

#### Step 3: Start Development Server

```bash
npm run dev
```

The frontend will start on **http://localhost:3000**

#### Step 4: Build for Production (Optional)

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Running the Application

#### Option 1: Separate Terminals (Development)

1. **Terminal 1 - Backend:**
   ```bash
   cd sweet-shop
   mvn spring-boot:run
   ```
   Wait for: `Started SweetShopApplication`

2. **Terminal 2 - Frontend:**
   ```bash
   cd sweet-shop/frontend
   npm run dev
   ```
   Wait for: `Local: http://localhost:3000`

3. **Open Browser:**
   - Visit: **http://localhost:3000**
   - You should see the login page!

#### Option 2: Integrated (Production Build)

The frontend is built into the backend's static resources, so you can run just the backend:

```bash
mvn spring-boot:run
```

Then visit: **http://localhost:8081**

---

## 📡 API Documentation

### Base URL
```
http://localhost:8081/api
```

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john",
  "password": "password123",
  "role": "USER"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "username": "john"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "john",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "john",
  "role": "USER",
  "message": "Login successful"
}
```

#### Health Check
```http
GET /api/auth/ping
```

**Response:** `OK`

### Sweet Endpoints (Protected - Require JWT)

All sweet endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your-token>
```

#### Get All Sweets
```http
GET /api/sweets
Authorization: Bearer <token>
```

#### Search Sweets
```http
GET /api/sweets/search?name=chocolate&category=candy&minPrice=1.00&maxPrice=10.00
Authorization: Bearer <token>
```

#### Get Sweet by ID
```http
GET /api/sweets/{id}
Authorization: Bearer <token>
```

#### Create Sweet (Admin Only)
```http
POST /api/sweets
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Chocolate Bar",
  "category": "Chocolate",
  "price": 2.50,
  "quantity": 100
}
```

#### Update Sweet (Admin Only)
```http
PUT /api/sweets/{id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "price": 3.00
}
```

#### Delete Sweet (Admin Only)
```http
DELETE /api/sweets/{id}
Authorization: Bearer <token>
```

### Inventory Endpoints

#### Purchase Sweet
```http
POST /api/sweets/{id}/purchase
Authorization: Bearer <token>
Content-Type: application/json

{
  "quantity": 2
}
```

#### Restock Sweet (Admin Only)
```http
POST /api/sweets/{id}/restock
Authorization: Bearer <token>
Content-Type: application/json

{
  "quantity": 50
}
```

---

## 📸 Screenshots

### 1. Login Page
The login page features a clean, modern design with a purple gradient background and a centered white card containing the login form.

**Features:**
- Username and password input fields
- "Login" button
- "Register here" link for new users
- Responsive design

![Login Page](./screenshots/login.png)

### 2. Dashboard (User View)
The dashboard displays available sweets with search and filter functionality.

**Features:**
- Welcome message with username
- Search by name, category, price range
- Sweet cards showing:
  - Name (e.g., "Ras-Malai")
  - Category (e.g., "West Bengal")
  - Price (e.g., "$59.98")
  - Stock quantity
  - Purchase button
- Logout button

![Dashboard](./screenshots/dashboard.png)

### 3. Admin Panel
The admin panel provides full inventory management capabilities.

**Features:**
- Welcome message for admin users
- "Add New Sweet" button
- Data table showing all sweets with:
  - ID, Name, Category, Price, Quantity
  - Action buttons: Edit, Restock, Delete
- Logout button

![Admin Panel](./screenshots/admin.png)

> **Note:** If screenshots are not visible, please add the image files (`login.png`, `dashboard.png`, `admin.png`) to the `screenshots/` directory. See [ADD_SCREENSHOTS.md](./ADD_SCREENSHOTS.md) for instructions.

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
mvn test

# Run with coverage report
mvn test jacoco:report
```

### Test Results

**Latest Test Run:**
```
Tests run: 19
Failures: 0
Errors: 0
Skipped: 0
BUILD SUCCESS
```

### Test Coverage

#### Test Suites

1. **UserRegistrationServiceTest** (4 tests)
   - User registration scenarios
   - Duplicate username handling

2. **AuthServiceTest** (5 tests)
   - Authentication flow
   - JWT token generation
   - Login scenarios

3. **UserServiceTest** (5 tests)
   - User registration
   - Password encoding
   - User lookup

4. **SweetServiceTest** (5 tests)
   - Sweet CRUD operations
   - Purchase functionality
   - Restock operations
   - Stock validation

### Test Report

See [TEST_REPORT.md](TEST_REPORT.md) for detailed test results and coverage information.

---

## 🚢 Deployment

### Railway (Recommended)

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway auto-detects Dockerfile

3. **Configure:**
   - Add MySQL database (optional)
   - Set `SPRING_PROFILES_ACTIVE=prod`
   - Railway auto-deploys!

See [DEPLOY_STEPS.md](DEPLOY_STEPS.md) for detailed instructions.

### Docker

```bash
# Build image
docker build -t sweet-shop .

# Run container
docker run -p 8081:8081 sweet-shop
```

### Docker Compose

```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d
```

---

## 🤖 My AI Usage

### AI Tools Used

I used **GitHub Copilot** and **Claude (via Cursor)** extensively throughout this project to accelerate development, learn best practices, and solve complex problems.

### How I Used AI

#### 1. **Code Generation & Boilerplate**

**GitHub Copilot:**
- Generated Spring Boot controller structures
- Created React component templates
- Implemented JWT authentication filter
- Generated database repository interfaces
- Created service layer method signatures

**Claude (Cursor):**
- Created complete component implementations (Login, Register, Dashboard, AdminPanel)
- Generated comprehensive test cases
- Wrote API documentation
- Created deployment configurations (Dockerfile, Railway config)
- Generated security configuration files

#### 2. **Problem Solving & Debugging**

**Error Resolution:**
- Used AI to understand error messages and stack traces
- Found solutions for JWT token validation issues
- Resolved Spring Security configuration conflicts
- Fixed React state management problems
- Debugged Railway deployment connection issues

**Specific Examples:**
- **Railway Deployment:** AI helped diagnose and fix MySQL connection failures by suggesting H2 fallback configuration
- **JWT Implementation:** AI assisted in debugging token expiration and validation issues
- **React Routing:** AI helped resolve SPA routing issues with Spring Boot static resources

#### 3. **Code Review & Best Practices**

**Code Quality:**
- AI suggested refactoring to follow SOLID principles
- Improved error handling patterns
- Optimized database queries
- Enhanced security configurations
- Suggested React best practices (hooks, state management)

#### 4. **Documentation**

**README Generation:**
- AI assisted in structuring comprehensive documentation
- Wrote clear setup instructions
- Created API documentation examples
- Generated deployment guides
- Created troubleshooting sections

#### 5. **Learning & Understanding**

**Concept Clarification:**
- Used AI to understand JWT token flow and implementation
- Learned Spring Security filter chains
- Grasped React hooks and state management
- Understood RESTful API design patterns
- Learned Docker and deployment best practices

### Specific Examples

#### Example 1: JWT Implementation
```java
// AI suggested this structure for JWT service
@Service
public class JwtService {
    // Token generation with custom claims
    // Token validation
    // Username and role extraction
}
```

**My Process:**
1. Used Copilot to generate initial structure
2. Manually added custom claims (username, role, userId)
3. AI helped debug token expiration issues
4. Final implementation combines AI suggestions with manual refinement

#### Example 2: React Components
```jsx
// AI generated complete Dashboard component
function Dashboard() {
    // State management
    // API integration
    // Search and filter logic
    // Purchase functionality
}
```

**My Process:**
1. Used Claude to generate complete component structure
2. Manually integrated API calls
3. Added custom styling
4. Tested and refined based on requirements

#### Example 3: Security Configuration
```java
// AI suggested Spring Security filter chain
@Configuration
public class SecurityConfig {
    // JWT filter integration
    // Public vs protected endpoints
    // CSRF configuration
}
```

**My Process:**
1. AI suggested initial configuration
2. Manually added JWT filter
3. Configured role-based access
4. Tested security with different user roles

#### Example 4: Database Configuration
```properties
# AI helped create Railway deployment config
# With H2 fallback for easier deployment
spring.datasource.url=${MYSQL_HOST:jdbc:h2:mem:sweetshop}
```

**My Process:**
1. AI suggested H2 fallback approach
2. Created multiple profile configurations
3. Tested with both H2 and MySQL
4. Refined based on deployment requirements

### Reflection on AI Impact

#### Positive Impacts

- ⚡ **Speed:** Significantly accelerated development, especially for boilerplate code
  - Reduced development time by ~40-50%
  - Quick iteration on features
  - Faster debugging cycles

- 🎓 **Learning:** Helped understand complex concepts faster
  - JWT authentication flow
  - Spring Security internals
  - React state management patterns
  - Docker and deployment

- 🐛 **Debugging:** Quick solutions to common errors
  - Connection issues
  - Configuration problems
  - Dependency conflicts
  - Runtime errors

- 📝 **Documentation:** Comprehensive documentation in less time
  - README generation
  - API documentation
  - Setup guides
  - Deployment instructions

#### Challenges

- 🔍 **Verification:** Had to carefully review AI-generated code
  - Not all suggestions were correct
  - Some code needed manual refinement
  - Required understanding of the code, not just copying

- 🎯 **Context:** Sometimes needed multiple iterations to get desired output
  - Had to provide clear context
  - Iterative refinement needed
  - Some suggestions were too generic

- 🧠 **Understanding:** Still needed to understand the code, not just copy it
  - Required learning the concepts
  - Needed to adapt AI code to project needs
  - Had to maintain code quality standards

#### Best Practices I Followed

- ✅ **Always reviewed and understood AI-generated code**
  - Never blindly copied code
  - Tested thoroughly before committing
  - Refactored to match project standards

- ✅ **Used AI as a learning tool, not just a code generator**
  - Asked questions to understand concepts
  - Used explanations to learn
  - Applied learnings to other parts of the project

- ✅ **Documented AI usage transparently**
  - This README section
  - Commit messages when AI was used
  - Code comments where AI suggestions were used

- ✅ **Maintained code quality**
  - Followed project conventions
  - Wrote tests for AI-generated code
  - Reviewed and refactored as needed

### AI Co-authorship

All commits where AI was significantly used include co-authorship:

```
Co-authored-by: GitHub Copilot <copilot@users.noreply.github.com>
Co-authored-by: Claude <claude@anthropic.com>
```

### Percentage of AI Assistance

- **Code Generation:** ~60% (boilerplate, templates, common patterns)
- **Problem Solving:** ~40% (debugging, error resolution)
- **Documentation:** ~70% (README, guides, comments)
- **Learning:** ~50% (concept clarification, best practices)

**Overall:** AI assisted in approximately **50-60%** of the development process, with the remaining work being manual implementation, testing, refinement, and understanding.

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👥 Contributors

- **Primary Developer:** Akshit
- **AI Assistants:**
  - GitHub Copilot
  - Claude (via Cursor)

---

## 🙏 Acknowledgments

- Spring Boot team for excellent framework
- React team for amazing frontend library
- Railway for easy deployment platform
- AI tools for accelerating development and learning

---

## 📞 Support

For issues, questions, or contributions:
- **GitHub Issues:** [Create an issue](https://github.com/Akshit9604/sweet-shop/issues)
- **Repository:** [https://github.com/Akshit9604/sweet-shop](https://github.com/Akshit9604/sweet-shop)

---

**Built with ❤️ using Spring Boot, React, and AI assistance**

---

## 🎯 Quick Start Summary

### Option 1: Use Live Application (Easiest)

**🌐 Visit the live application:**
- **Main URL:** [https://web-production-44b0c.up.railway.app](https://web-production-44b0c.up.railway.app)
- **Dashboard:** [https://web-production-44b0c.up.railway.app/dashboard](https://web-production-44b0c.up.railway.app/dashboard)

No setup required! Just register and start using.

### Option 2: Run Locally

1. **Clone:** `git clone https://github.com/Akshit9604/sweet-shop.git`
2. **Backend:** `mvn spring-boot:run`
3. **Frontend:** `cd frontend && npm install && npm run dev`
4. **Access:** http://localhost:3000
5. **Register:** Create an account and start using!

---

**Happy Coding! 🍬**
