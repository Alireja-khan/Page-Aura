import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link href='/'>Go Back to Home.</Link>
        </div>
    );
};

export default notFound;