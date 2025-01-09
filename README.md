<div align="center">

# 📝 Blog Management System

### Modern Blogging Platform Built with Next.js & Node.js

[Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Deployment](#deployment) • [Documentation](#documentation)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/blog-management)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/yourusername)

---



**🌐 [Live Demo](https://blogs-client-mil7.vercel.app)**

</div>

## ✨ Features

<table>
<tr>
<td>

### 🔐 Authentication
- Secure email & password registration
- JWT-based session management
- Protected API endpoints
- Rate limiting & security measures

</td>
<td>

### 📚 Content Management
- Intuitive blog creation & editing
- Rich text editor support
- Real-time content preview
- Version history tracking

</td>
</tr>
<tr>
<td>

### 👤 User Experience
- Personalized user dashboard
- Content analytics
- Author profile management
- Responsive design

</td>
<td>

### ⚡ Performance
- Server-side rendering
- Optimized database queries
- Content caching
- Fast page loads

</td>
</tr>
</table>

## 🛠️ Tech Stack

<div align="center">

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

## 📦 Package Versions

### Backend Dependencies
```json
{
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-mongo-sanitize": "^2.2.0",
    "express-rate-limit": "^6.7.0",
    "helmet": "^7.0.0",
    "hpp": "^0.2.3",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.0.3",
    "xss-clean": "^0.1.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### Frontend Dependencies
```json
{
  "dependencies": {
    "@sentry/nextjs": "^8.48.0",
    "@tailwindcss/line-clamp": "^0.4.4",
    "@tailwindcss/typography": "^0.5.16",
    "@types/node": "^18.15.11",
    "@types/react": "^18.0.37",
    "@types/react-dom": "^18.0.11",
    "axios": "^1.3.5",
    "next": "13.3.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hot-toast": "^2.4.0",
    "typescript": "^5.0.4"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.22",
    "tailwindcss": "^3.3.1"
  }
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- MongoDB Atlas account
- npm or yarn package manager

### Installation Steps

1️⃣ **Clone the repository**
```bash
git clone https://github.com/yourusername/blog-management.git
cd blog-management
```

2️⃣ **Frontend Setup**
```bash
cd frontend
npm install

# Create .env.local file
cat > .env.local << EOL
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=Blog Management
EOL
```

3️⃣ **Backend Setup**
```bash
cd backend
npm install

# Create .env file
cat > .env << EOL
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
REFRESH_TOKEN_SECRET=your_refresh_token_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
AUTH_RATE_LIMIT_WINDOW_MS=3600000
AUTH_RATE_LIMIT_MAX=5
EOL
```

## 🌍 Deployment

### Live URLs
- Frontend: [https://blogs-client-mil7.vercel.app](https://blogs-client-mil7.vercel.app)
- Backend API: [https://blogbackend-production-c9e7.up.railway.app/api](https://blogbackend-production-c9e7.up.railway.app/api)

### Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Configure environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://blogbackend-production-c9e7.up.railway.app/api
   NEXT_PUBLIC_APP_NAME=Blog Management
   ```
3. Deploy! 🚀

### Backend (Railway)

1. Connect your GitHub repository to Railway
2. Configure environment variables as listed in `.env`
3. Deploy! 🚂

## 📚 API Documentation

### Base URL
```
https://blogbackend-production-c9e7.up.railway.app/api
```

### Endpoints

```typescript
// Authentication
POST   /auth/register     // Create new user account
POST   /auth/login        // User authentication

// Blog Management
GET    /blogs            // Fetch all blogs
GET    /blogs/:id        // Fetch single blog
POST   /blogs            // Create new blog
PUT    /blogs/:id        // Update blog
DELETE /blogs/:id        // Delete blog
```

### Security Features

- 🔒 JWT Authentication
- 🛡️ Rate Limiting with express-rate-limit
- 🔐 Password Hashing with bcryptjs
- 🚫 CORS Protection
- 🛡️ XSS Protection with xss-clean
- 🔒 Security Headers with helmet
- 🛡️ NoSQL Injection Protection with express-mongo-sanitize
- 🔒 HTTP Parameter Pollution Protection with hpp

## 🤝 Contributing

We welcome contributions! Please check our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

<div align="center">

### Made with ❤️ by [BINEL BIJU](https://github.com/binelbpe)

⭐️ Star us on GitHub — it motivates us a lot!

</div>
