'use server';

export async function addBook(bookData) {
    try {
        const response = await fetch('http://localhost:3000/api/addBook', {
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