import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-zinc-800">
      <img src="/not-found.svg" alt="Not Found" className="w-1/2 h-1/2 object-contain" />
      <h1 className="text-4xl font-bold text-white mt-4">404 - User Page Not Found</h1>
      <p className="text-lg text-gray-400 mt-2">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go Back Home
      </Link>
    </div>
  );
};
export default NotFoundPage;
