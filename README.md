# 🛒 ShopKart — MERN Stack E-Commerce Platform

ShopKart is a full-stack e-commerce application built with React, Vite, Node.js, Express.js, and MongoDB. It supports product browsing, search, category filtering, user authentication, wishlist management, shopping cart functionality, and order-related features.

## ✨ Features

- User registration and login
- Product catalog and product details
- Product search and category filtering
- Shopping cart and wishlist
- Checkout and order management functionality
- JWT-based authentication
- MongoDB database integration
- Cloudinary product image integration
- Razorpay payment integration (requires valid credentials)
- Responsive user interface

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, JavaScript, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT |
| Payments | Razorpay |
| Image Storage | Cloudinary |
| Version Control | Git, GitHub |

## 📁 Project Structure

```text
ShopKart/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   ├── seedProducts.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB connection string
- Cloudinary credentials if using image uploads
- Razorpay test credentials if testing payments

### 1. Clone the repository

```bash
git clone https://github.com/soham25bcs10010-png/ShopKart.git
cd ShopKart
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `backend/.env` file with your own configuration:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
FRONTEND_URL=http://localhost:5173
```

Use the variable names expected by your application. Never commit real credentials or `.env` files.

Start the backend:

```bash
npm start
```

### 3. Start the frontend

Open a second terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite.

### 4. Add sample products

If you want to populate your database with the included sample products, open a terminal in the `backend` directory and run:

```bash
node seedProducts.js
```

Make sure your MongoDB environment configuration is set first.

## 🔐 Security Notes

- Keep secrets and credentials in environment variables.
- Never commit `.env` files or private API keys.
- Configure the frontend API URL and backend CORS origin to match your local setup.
- Keep payment secrets on the backend only.

## 💳 Payment Integration

The project includes Razorpay integration. Actual payment processing requires valid Razorpay credentials and appropriate configuration.

## 👨‍💻 Author

**Soham Mishra**

GitHub: [soham25bcs10010-png](https://github.com/soham25bcs10010-png)

Repository: [ShopKart](https://github.com/soham25bcs10010-png/ShopKart)
