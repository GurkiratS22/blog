## 📝 Gurkirat's Blog

**Gurkirat's Blog** is a dynamic platform that offers users a seamless blogging experience. Built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, Firebase, and Redux, it provides an intuitive interface for both readers and administrators.

### 🚀 Features

- **Seamless Blogging**: Users can effortlessly explore, like and comment the posts.
- **Intuitive Interface**: With features like search, filters, and pagination, users can easily explore captivating content.
- **Dark and Light Mode**: Customize the reading experience with dark and light mode options.
- **Admin Dashboard**: Administrators have access to a comprehensive dashboard for monitoring and managing posts, users, and comments.
- **Responsive Design**: Ensures optimal viewing experience across devices of all sizes.

### 🛠️ Tech Stack

- **MongoDB**: A NoSQL database for storing blog data.
- **Express.js**: A Node.js web application framework for building robust APIs.
- **React.js**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime for server-side development.
- **Firebase**: Provides authentication, storage, and other backend services.
- **Redux**: A predictable state container for managing application state.

### 📋 Quick Start

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

1. **Clone the Repository**

   ```bash
   git clone https://github.com/gurkirats22/blog.git
   cd blog
   ```

2. **Installation**

   ```bash
   npm install
   cd client
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your MongoDB configuration:

   ```env
   MONGO=""
   JWT_SECRET=""
   ```

   Fill the empty values with your actual MongoDB credentials and a random JWT Secret. You can obtain MongoDB credentials by signing up on the [MongoDB website](https://www.mongodb.com/).

    Create another `.env` file in the client directory and add your Firebase configuration:

   ```env
   VITE_FIREBASE_API_KEY=""
   ```

   Fill the empty values with your actual Firebase credentials. You can obtain these credentials by signing up on the [Firebase website](https://firebase.google.com/).

5. **Running the Project**

   Run the following command on both the root directory and the client:

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser to view the blog.

### 🌐 Live Demo

[Live Demo](https://blog-9cpw.onrender.com/)
