'use server';

export async function addBook(bookData) {

    const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://page-aura.vercel.app'
      : 'http://localhost:3000';

    try {
        const response = await fetch(`${baseUrl}/api/addBook`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });

        if (!response.ok) {
            throw new Error('Failed to add book');
        }

        return await response.json();
    } catch (error) {
        console.error('Error adding book:', error);
        throw error;
    }
}