// src/pages/404.js

import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        The page you are looking for does not exist or you do not have access to it.
      </p>
      {/* Use regular anchor tag for external links */}
      <a href="/" className="text-blue-500 underline">
        Go back to the homepage
      </a>
      {/* Use Link for internal links that require client-side routing */}
      {/* <Link href="/">
        <a className="text-blue-500 underline">Go back to the homepage</a>
      </Link> */}
    </div>
  );
};

export default NotFoundPage;
