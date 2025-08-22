import React from 'react';
import Link from 'next/link';

const FeaturedProducts = ({ books }) => {
  // Check if books is defined and is an array
  if (!books || !Array.isArray(books)) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Books
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of must-read titles across various genres
            </p>
          </div>
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600">Loading featured books...</p>
          </div>
        </div>
      </section>
    );
  }

  // Display 6-8 featured books (or all if less than 8)
  const featuredBooks = books.length > 0 ? books.slice(0, 8) : [];

  // If no books are available
  if (featuredBooks.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Books
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of must-read titles across various genres
            </p>
          </div>
          <div className="text-center py-12">
            <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No featured books available</h3>
            <p className="text-gray-500 mb-6">Check back later for our featured selections.</p>
            <Link 
              href="/books"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Browse All Books
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of must-read titles across various genres
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredBooks.map((book) => (
            <div 
              key={book._id?.toString() || Math.random()} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Book Cover */}
              <div className="h-56 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-blue-700 z-10">
                  {book.published?.year || 'N/A'}
                </div>
                
                {book.coverImage ? (
                  <img 
                    src={book.coverImage} 
                    alt={book.title || "Book cover"} 
                    className="w-40 h-48 object-cover mx-auto rounded-md shadow-lg mb-2 transition-transform duration-300 group-hover:scale-105" 
                  />
                ) : (
                  <div className="w-40 h-48 bg-gradient-to-br from-blue-200 to-purple-200 mx-auto rounded-md shadow-inner flex items-center justify-center mb-2">
                    <span className="text-xs font-semibold text-gray-700 text-center px-2">No Cover Image</span>
                  </div>
                )}
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link 
                    href={`/books/${book._id?.toString()}`}
                    className="bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Quick View
                  </Link>
                </div>
              </div>
              
              {/* Book Details */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1" title={book.title}>
                  {book.title || "Untitled Book"}
                </h3>
                
                <div className="flex items-center mb-3">
                  <svg className="w-4 h-4 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">
                    {book.author?.firstName || "Unknown"} {book.author?.lastName || "Author"}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {book.genre?.slice(0, 2).map((genre, index) => (
                    <span key={index} className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {genre}
                    </span>
                  ))}
                  {book.genre?.length > 2 && (
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      +{book.genre.length - 2}
                    </span>
                  )}
                  {(!book.genre || book.genre.length === 0) && (
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      No genre
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm text-gray-700 font-medium">
                      {book.ratings?.goodreads ? book.ratings.goodreads.toFixed(1) : 'N/A'}
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-lg font-bold text-gray-900">
                      ${book.price?.paperback || book.price?.hardcover || book.price?.ebook || 'N/A'}
                    </span>
                  </div>
                </div>
                
                <Link 
                  href={`/books/${book._id?.toString()}`}
                  className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 group/button"
                >
                  View Details
                  <svg className="w-4 h-4 ml-2 transform group-hover/button:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Books Button */}
        <div className="text-center">
          <Link 
            href="/books"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore All Books
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;