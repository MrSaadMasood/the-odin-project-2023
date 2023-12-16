import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const routerError = useRouteError();
  return (
    <div className=" bg-black w-full h-[60rem] flex justify-center items-center text-white">
      <p>Oops!</p>
      <p>{routerError.message}</p>
    </div>
  );
}
