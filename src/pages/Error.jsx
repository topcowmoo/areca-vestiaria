import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col justify-center items-center h-screen bg-neutral-100">
      <h1 className="text-4xl font-bold text-black mb-4">Oops!</h1>
      <p className="text-lg text-black mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="italic text-gray-700">{error.statusText || error.message}</p>
    </div>
  );
}
