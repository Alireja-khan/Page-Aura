# PageAura - Bookstore Application

## 📚 Project Description

PageAura is a modern, full-stack bookstore web application built with Next.js that allows users to browse, discover, and manage a collection of books. The application features user authentication, a responsive design, and a comprehensive book management system with detailed book information, ratings, and pricing.

## 🚀 Live Website

🔗 [Visit Page-Aura](https://page-aura.vercel.app/)

---

**Key Features:**
- Browse and search book collections
- User authentication and registration
- Detailed book information pages
- Add new books to the collection
- Responsive design with Tailwind CSS
- MongoDB database integration

## 🚀 Setup & Installation Instructions

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd page-aura
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Database Setup**
   - Set up a MongoDB database (either locally or using MongoDB Atlas)
   - Update the `MONGODB_URI` in your environment variables
   - The application will automatically create the necessary collections

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production
```bash
npm run build
npm start
```

## 📁 Route Summary

### Public Routes
- **`/`** - Home page with hero section and featured books
- **`/books`** - Browse all books in the collection
- **`/books/[id]`** - Individual book details page
- **`/about`** - About page with company information
- **`/login`** - User login page
- **`/register`** - User registration page

### Protected Routes
- **`/addBooks`** - Add new books to the collection (requires authentication)
- **`/profile`** - User profile page (requires authentication)

### API Routes
- **`/api/auth/[...nextauth]`** - NextAuth.js authentication endpoints
- **`/api/books`** - POST endpoint for adding new books

### Component Structure
- **`/components/Hero.js`** - Landing page hero section
- **`/components/About.js`** - About section component
- **`/components/FeaturedProducts.js`** - Featured books display
- **`/components/NavBar.js`** - Navigation component
- **`/components/Footer.js`** - Footer component
- **`/components/UserInfo.js`** - User information display

### Utility Files
- **`/lib/dbConnect.js`** - MongoDB connection utility
- **`/actions/auth/registerUser.js`** - User registration action
- **`/actions/books/addBook.js`** - Book addition action

## 🛠️ Technologies Used

- **Frontend**: Next.js 15, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS with custom components
- **Icons**: Heroicons (SVG icons)
- **Notifications**: React Hot Toast

## 📋 Database Schema

The application uses a MongoDB database with the following main collections:

### Books Collection
```javascript
{
  title: String,
  author: {
    firstName: String,
    lastName: String,
    birthDate: Date,
    nationality: String
  },
  genre: [String],
  published: {
    date: Date,
    publisher: String,
    country: String,
    edition: String,
    isbn: String,
    pages: Number,
    language: String,
    year: Number
  },
  plot: String,
  ratings: {
    goodreads: Number,
    amazon: Number,
    votes: Number
  },
  price: {
    hardcover: Number,
    paperback: Number,
    ebook: Number,
    audio: Number
  },
  coverImage: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🎨 Features Overview

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Book Management**: Complete CRUD operations for book management
- **User Authentication**: Secure login and registration system
- **Search & Filter**: Browse books by genre, author, and other criteria
- **Rating System**: Integrated book rating system
- **Image Support**: Book cover images with fallback placeholders

## 🔧 Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For support or questions, please open an issue in the GitHub repository or contact the development team.