"use client";

import React, { useState } from 'react';
import { addBook } from '../actions/books/addBook';

const AddBooks = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        const form = e.target;
        const formData = {
            title: form.title.value,
            author: form.author.value,
            genre: form.genre.value,
            publishedYear: form.publishedYear.value ? parseInt(form.publishedYear.value) : null,
            isbn: form.isbn.value,
            description: form.description.value,
            price: form.price.value ? parseFloat(form.price.value) : null,
            stock: form.stock.value ? parseInt(form.stock.value) : null
        };

        try {
            const result = await addBook(formData);
            alert('Book added successfully!');
            form.reset();
        } catch (error) {
            alert('Failed to add book: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Add New Book</h1>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                name="title"
                                type="text"
                                placeholder="Enter book title"
                                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        {/* Author */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Author</label>
                            <input
                                name="author"
                                type="text"
                                placeholder="Enter author name"
                                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        {/* Genre */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Genre</label>
                            <input
                                name="genre"
                                type="text"
                                placeholder="Enter genre"
                                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        {/* Published Year */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Published Year</label>
                            <input
                                name="publishedYear"
                                type="number"
                                placeholder="Enter published year"
                                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {/* ISBN */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">ISBN</label>
                            <input
                                name="isbn"
                                type="text"
                                placeholder="Enter ISBN"
                                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                            <input
                                name="price"
                                type="number"
                                step="0.01"
                                placeholder="Enter price"
                                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
                            <input
                                name="stock"
                                type="number"
                                placeholder="Enter stock quantity"
                                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                    </div>
                </div>

                {/* Description - Full Width */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter book description"
                        rows="4"
                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Submit Button - Full Width */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition ${
                            isLoading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {isLoading ? 'Adding Book...' : 'Add Book'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBooks;






// "use client";

// import React, { useState } from 'react';
// import { addBook } from '../actions/books/addBook';

// const AddBooks = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [author, setAuthor] = useState({
//         firstName: '',
//         lastName: '',
//         birthDate: '',
//         nationality: ''
//     });
//     const [published, setPublished] = useState({
//         date: '',
//         publisher: '',
//         country: '',
//         edition: '',
//         isbn: '',
//         pages: '',
//         language: ''
//     });
//     const [series, setSeries] = useState({
//         name: '',
//         number: '',
//         totalBooks: ''
//     });
//     const [price, setPrice] = useState({
//         hardcover: '',
//         paperback: '',
//         ebook: '',
//         audio: ''
//     });
//     const [characters, setCharacters] = useState([{ name: '', role: '', description: '' }]);
//     const [settings, setSettings] = useState([{ name: '', type: '', location: '' }]);
//     const [ratings, setRatings] = useState({
//         goodreads: '',
//         amazon: '',
//         votes: ''
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
        
//         const form = e.target;
//         const formData = {
//             title: form.title.value,
//             coverImage: form.coverImage.value,
//             author: {
//                 firstName: author.firstName,
//                 lastName: author.lastName,
//                 birthDate: author.birthDate,
//                 nationality: author.nationality
//             },
//             genre: form.genre.value.split(',').map(g => g.trim()),
//             published: {
//                 date: published.date,
//                 publisher: published.publisher,
//                 country: published.country,
//                 edition: published.edition,
//                 isbn: published.isbn,
//                 pages: published.pages ? parseInt(published.pages) : null,
//                 language: published.language
//             },
//             series: {
//                 name: series.name || null,
//                 number: series.number ? parseInt(series.number) : null,
//                 totalBooks: series.totalBooks ? parseInt(series.totalBooks) : null
//             },
//             plot: form.plot.value,
//             characters: characters.filter(char => char.name && char.role),
//             settings: settings.filter(setting => setting.name),
//             ratings: {
//                 goodreads: ratings.goodreads ? parseFloat(ratings.goodreads) : null,
//                 amazon: ratings.amazon ? parseFloat(ratings.amazon) : null,
//                 votes: ratings.votes ? parseInt(ratings.votes) : null
//             },
//             price: {
//                 hardcover: price.hardcover ? parseFloat(price.hardcover) : null,
//                 paperback: price.paperback ? parseFloat(price.paperback) : null,
//                 ebook: price.ebook ? parseFloat(price.ebook) : null,
//                 audio: price.audio ? parseFloat(price.audio) : null
//             },
//             formats: Array.from(form.querySelectorAll('input[name="formats"]:checked')).map(input => input.value),
//             translations: form.translations.value ? parseInt(form.translations.value) : null
//         };

//         try {
//             const result = await addBook(formData);
//             alert('Book added successfully!');
//             form.reset();
//             // Reset all state variables
//             setAuthor({firstName: '', lastName: '', birthDate: '', nationality: ''});
//             setPublished({date: '', publisher: '', country: '', edition: '', isbn: '', pages: '', language: ''});
//             setSeries({name: '', number: '', totalBooks: ''});
//             setPrice({hardcover: '', paperback: '', ebook: '', audio: ''});
//             setCharacters([{ name: '', role: '', description: '' }]);
//             setSettings([{ name: '', type: '', location: '' }]);
//             setRatings({goodreads: '', amazon: '', votes: ''});
//         } catch (error) {
//             alert('Failed to add book: ' + error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const addCharacter = () => {
//         setCharacters([...characters, { name: '', role: '', description: '' }]);
//     };

//     const removeCharacter = (index) => {
//         if (characters.length > 1) {
//             const updatedCharacters = [...characters];
//             updatedCharacters.splice(index, 1);
//             setCharacters(updatedCharacters);
//         }
//     };

//     const handleCharacterChange = (index, field, value) => {
//         const updatedCharacters = [...characters];
//         updatedCharacters[index][field] = value;
//         setCharacters(updatedCharacters);
//     };

//     const addSetting = () => {
//         setSettings([...settings, { name: '', type: '', location: '' }]);
//     };

//     const removeSetting = (index) => {
//         if (settings.length > 1) {
//             const updatedSettings = [...settings];
//             updatedSettings.splice(index, 1);
//             setSettings(updatedSettings);
//         }
//     };

//     const handleSettingChange = (index, field, value) => {
//         const updatedSettings = [...settings];
//         updatedSettings[index][field] = value;
//         setSettings(updatedSettings);
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-6">
//             <h1 className="text-2xl font-bold mb-6">Add New Book</h1>
            
//             <form className="space-y-6" onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Left Column */}
//                     <div className="space-y-6">
//                         {/* Basic Information */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
//                             <div className="space-y-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Title</label>
//                                     <input
//                                         name="title"
//                                         type="text"
//                                         placeholder="Enter book title"
//                                         className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         required
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
//                                     <input
//                                         name="coverImage"
//                                         type="url"
//                                         placeholder="Enter cover image URL"
//                                         className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Author Information */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Author Information</h2>
//                             <div className="space-y-4">
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">First Name</label>
//                                         <input
//                                             type="text"
//                                             value={author.firstName}
//                                             onChange={(e) => setAuthor({...author, firstName: e.target.value})}
//                                             placeholder="Author's first name"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                             required
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                                         <input
//                                             type="text"
//                                             value={author.lastName}
//                                             onChange={(e) => setAuthor({...author, lastName: e.target.value})}
//                                             placeholder="Author's last name"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                             required
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Birth Date</label>
//                                         <input
//                                             type="date"
//                                             value={author.birthDate}
//                                             onChange={(e) => setAuthor({...author, birthDate: e.target.value})}
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Nationality</label>
//                                         <input
//                                             type="text"
//                                             value={author.nationality}
//                                             onChange={(e) => setAuthor({...author, nationality: e.target.value})}
//                                             placeholder="Author's nationality"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Genre */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Genre</h2>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Genres (comma separated)</label>
//                                 <input
//                                     name="genre"
//                                     type="text"
//                                     placeholder="e.g. Classic, Romance, Gothic"
//                                     className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Publication Details */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Publication Details</h2>
//                             <div className="space-y-4">
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Publication Date</label>
//                                         <input
//                                             type="date"
//                                             value={published.date}
//                                             onChange={(e) => setPublished({...published, date: e.target.value})}
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Publisher</label>
//                                         <input
//                                             type="text"
//                                             value={published.publisher}
//                                             onChange={(e) => setPublished({...published, publisher: e.target.value})}
//                                             placeholder="Publisher name"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Country</label>
//                                         <input
//                                             type="text"
//                                             value={published.country}
//                                             onChange={(e) => setPublished({...published, country: e.target.value})}
//                                             placeholder="Publication country"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Edition</label>
//                                         <input
//                                             type="text"
//                                             value={published.edition}
//                                             onChange={(e) => setPublished({...published, edition: e.target.value})}
//                                             placeholder="e.g. First Edition"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">ISBN</label>
//                                         <input
//                                             type="text"
//                                             value={published.isbn}
//                                             onChange={(e) => setPublished({...published, isbn: e.target.value})}
//                                             placeholder="Enter ISBN"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Pages</label>
//                                         <input
//                                             type="number"
//                                             value={published.pages}
//                                             onChange={(e) => setPublished({...published, pages: e.target.value})}
//                                             placeholder="Number of pages"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Language</label>
//                                     <input
//                                         type="text"
//                                         value={published.language}
//                                         onChange={(e) => setPublished({...published, language: e.target.value})}
//                                         placeholder="Language of publication"
//                                         className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Series Information */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Series Information (if applicable)</h2>
//                             <div className="space-y-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Series Name</label>
//                                     <input
//                                         type="text"
//                                         value={series.name}
//                                         onChange={(e) => setSeries({...series, name: e.target.value})}
//                                         placeholder="Series name"
//                                         className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                     />
//                                 </div>

//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Book Number in Series</label>
//                                         <input
//                                             type="number"
//                                             value={series.number}
//                                             onChange={(e) => setSeries({...series, number: e.target.value})}
//                                             placeholder="Book number"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Total Books in Series</label>
//                                         <input
//                                             type="number"
//                                             value={series.totalBooks}
//                                             onChange={(e) => setSeries({...series, totalBooks: e.target.value})}
//                                             placeholder="Total books"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column */}
//                     <div className="space-y-6">
//                         {/* Plot */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Plot</h2>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Plot Summary</label>
//                                 <textarea
//                                     name="plot"
//                                     placeholder="Enter book plot summary"
//                                     rows="4"
//                                     className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                 />
//                             </div>
//                         </div>

//                         {/* Characters */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Characters</h2>
//                             {characters.map((character, index) => (
//                                 <div key={index} className="mb-4 p-3 border rounded-lg">
//                                     <div className="flex justify-between items-center mb-2">
//                                         <h3 className="font-medium">Character {index + 1}</h3>
//                                         {characters.length > 1 && (
//                                             <button 
//                                                 type="button" 
//                                                 onClick={() => removeCharacter(index)}
//                                                 className="text-red-500 text-sm"
//                                             >
//                                                 Remove
//                                             </button>
//                                         )}
//                                     </div>
//                                     <div className="space-y-3">
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700">Name</label>
//                                             <input
//                                                 type="text"
//                                                 value={character.name}
//                                                 onChange={(e) => handleCharacterChange(index, 'name', e.target.value)}
//                                                 placeholder="Character name"
//                                                 className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                             />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700">Role</label>
//                                             <input
//                                                 type="text"
//                                                 value={character.role}
//                                                 onChange={(e) => handleCharacterChange(index, 'role', e.target.value)}
//                                                 placeholder="Character role"
//                                                 className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                             />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700">Description</label>
//                                             <input
//                                                 type="text"
//                                                 value={character.description}
//                                                 onChange={(e) => handleCharacterChange(index, 'description', e.target.value)}
//                                                 placeholder="Character description"
//                                                 className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                             <button 
//                                 type="button" 
//                                 onClick={addCharacter}
//                                 className="mt-2 text-blue-500 text-sm"
//                             >
//                                 + Add Another Character
//                             </button>
//                         </div>

//                         {/* Settings */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Settings</h2>
//                             {settings.map((setting, index) => (
//                                 <div key={index} className="mb-4 p-3 border rounded-lg">
//                                     <div className="flex justify-between items-center mb-2">
//                                         <h3 className="font-medium">Setting {index + 1}</h3>
//                                         {settings.length > 1 && (
//                                             <button 
//                                                 type="button" 
//                                                 onClick={() => removeSetting(index)}
//                                                 className="text-red-500 text-sm"
//                                             >
//                                                 Remove
//                                             </button>
//                                         )}
//                                     </div>
//                                     <div className="space-y-3">
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700">Name</label>
//                                             <input
//                                                 type="text"
//                                                 value={setting.name}
//                                                 onChange={(e) => handleSettingChange(index, 'name', e.target.value)}
//                                                 placeholder="Setting name"
//                                                 className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                             />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700">Type</label>
//                                             <input
//                                                 type="text"
//                                                 value={setting.type}
//                                                 onChange={(e) => handleSettingChange(index, 'type', e.target.value)}
//                                                 placeholder="Setting type"
//                                                 className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                             />
//                                         </div>
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700">Location</label>
//                                             <input
//                                                 type="text"
//                                                 value={setting.location}
//                                                 onChange={(e) => handleSettingChange(index, 'location', e.target.value)}
//                                                 placeholder="Setting location"
//                                                 className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                             <button 
//                                 type="button" 
//                                 onClick={addSetting}
//                                 className="mt-2 text-blue-500 text-sm"
//                             >
//                                 + Add Another Setting
//                             </button>
//                         </div>

//                         {/* Ratings */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Ratings</h2>
//                             <div className="space-y-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Goodreads Rating</label>
//                                     <input
//                                         type="number"
//                                         step="0.01"
//                                         min="0"
//                                         max="5"
//                                         value={ratings.goodreads}
//                                         onChange={(e) => setRatings({...ratings, goodreads: e.target.value})}
//                                         placeholder="0-5"
//                                         className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Amazon Rating</label>
//                                     <input
//                                         type="number"
//                                         step="0.1"
//                                         min="0"
//                                         max="5"
//                                         value={ratings.amazon}
//                                         onChange={(e) => setRatings({...ratings, amazon: e.target.value})}
//                                         placeholder="0-5"
//                                         className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700">Total Votes</label>
//                                     <input
//                                         type="number"
//                                         value={ratings.votes}
//                                         onChange={(e) => setRatings({...ratings, votes: e.target.value})}
//                                         placeholder="Number of votes"
//                                         className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Price Information */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Price Information ($)</h2>
//                             <div className="space-y-4">
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Hardcover Price</label>
//                                         <input
//                                             type="number"
//                                             step="0.01"
//                                             value={price.hardcover}
//                                             onChange={(e) => setPrice({...price, hardcover: e.target.value})}
//                                             placeholder="Hardcover price"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Paperback Price</label>
//                                         <input
//                                             type="number"
//                                             step="0.01"
//                                             value={price.paperback}
//                                             onChange={(e) => setPrice({...price, paperback: e.target.value})}
//                                             placeholder="Paperback price"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">E-book Price</label>
//                                         <input
//                                             type="number"
//                                             step="0.01"
//                                             value={price.ebook}
//                                             onChange={(e) => setPrice({...price, ebook: e.target.value})}
//                                             placeholder="E-book price"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700">Audiobook Price</label>
//                                         <input
//                                             type="number"
//                                             step="0.01"
//                                             value={price.audio}
//                                             onChange={(e) => setPrice({...price, audio: e.target.value})}
//                                             placeholder="Audiobook price"
//                                             className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Formats */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Available Formats</h2>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Hardcover', 'Paperback', 'E-book', 'Audiobook'].map(format => (
//                                     <label key={format} className="flex items-center">
//                                         <input
//                                             type="checkbox"
//                                             name="formats"
//                                             value={format}
//                                             className="mr-2"
//                                         />
//                                         {format}
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Translations */}
//                         <div className="bg-white p-4 rounded-lg shadow">
//                             <h2 className="text-lg font-semibold mb-4">Translations</h2>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Number of Translations</label>
//                                 <input
//                                     name="translations"
//                                     type="number"
//                                     placeholder="Number of translations"
//                                     className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="col-span-full">
//                     <button
//                         type="submit"
//                         disabled={isLoading}
//                         className={`w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition ${
//                             isLoading ? 'opacity-50 cursor-not-allowed' : ''
//                         }`}
//                     >
//                         {isLoading ? 'Adding Book...' : 'Add Book'}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddBooks;