import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page w-full h-screen p-10 flex flex-col justify-center items-center ">
      <h1 className="font-extrabold text-3xl mb-10">Oops!</h1>
      <p className="font-semibold">Sorry, an unexpected error has occurred.</p>
      <p className="font-medium">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
