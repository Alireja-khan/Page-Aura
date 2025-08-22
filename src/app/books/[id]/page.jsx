import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Link from 'next/link';

const BookDetailsPage = async ({ params }) => {
  const booksCollection = await dbConnect("books");
  const book = await booksCollection.findOne({ _id: new ObjectId(params.id) });
  
  if (!book) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center bg-white p-8 rounded-xl shadow-md max-w-md w-full">
          <div className="inline-block p-3 bg-red-50 rounded-full mb-4">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Not Found</h2>
          <p className="text-gray-600 mb-6">The book you're looking for doesn't exist in our collection.</p>
          <Link 
            href="/books"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Books
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href="/books" className="hover:text-blue-600 transition-colors">Books</Link>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-900 font-medium line-clamp-1 max-w-xs">{book.title}</span>
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Book Cover Section */}
            <div className="md:flex-shrink-0 md:w-2/5 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
              <div className="text-center w-full">
                {book.coverImage ? (
                  <img 
                    src={book.coverImage} 
                    alt={`Cover of ${book.title}`}
                    className="w-56 h-72 object-cover mx-auto rounded-lg shadow-lg mb-4" 
                  />
                ) : (
                  <div className="w-56 h-72 bg-gradient-to-br from-blue-200 to-purple-200 mx-auto rounded-lg shadow-inner flex flex-col items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">No Cover Image</span>
                  </div>
                )}
                <span className="text-xs text-gray-500 bg-gray-100 py-1 px-2 rounded-full">
                  ISBN: {book.published?.isbn || 'N/A'}
                </span>
              </div>
            </div>
            
            {/* Book Details Section */}
            <div className="p-8 md:w-3/5">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <p className="text-lg text-gray-600">by {book.author?.firstName} {book.author?.lastName}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {book.genre?.map((genre, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    {genre}
                  </span>
                ))}
              </div>
              
              {/* Ratings */}
              {book.ratings && (
                <div className="flex items-center mb-6 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center mr-6">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star} 
                          className={`w-5 h-5 ${star <= Math.round(book.ratings.goodreads || 0) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-700 font-medium">
                      {book.ratings.goodreads ? book.ratings.goodreads.toFixed(1) : 'N/A'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {book.ratings.count || 0} reviews
                  </div>
                </div>
              )}
              
              {/* Book Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Published Date</h3>
                  <p className="text-gray-900 font-medium">
                    {book.published?.date ? new Date(book.published.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'N/A'}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Publisher</h3>
                  <p className="text-gray-900 font-medium">{book.published?.publisher || 'N/A'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Pages</h3>
                  <p className="text-gray-900 font-medium">{book.published?.pages || 'N/A'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Language</h3>
                  <p className="text-gray-900 font-medium">{book.published?.language || 'N/A'}</p>
                </div>
              </div>
              
              {/* Price Information */}
              {book.price && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
                  <div className="flex flex-wrap gap-4">
                    {book.price.paperback && (
                      <div>
                        <span className="block text-sm text-gray-500">Paperback</span>
                        <span className="text-xl font-bold text-gray-900">${book.price.paperback}</span>
                      </div>
                    )}
                    {book.price.hardcover && (
                      <div>
                        <span className="block text-sm text-gray-500">Hardcover</span>
                        <span className="text-xl font-bold text-gray-900">${book.price.hardcover}</span>
                      </div>
                    )}
                    {book.price.ebook && (
                      <div>
                        <span className="block text-sm text-gray-500">E-Book</span>
                        <span className="text-xl font-bold text-gray-900">${book.price.ebook}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Plot Summary */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Plot Summary
                </h3>
                <p className="text-gray-700 leading-relaxed">{book.plot || 'No plot summary available.'}</p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/books"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Books
                </Link>
                
                <button className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;