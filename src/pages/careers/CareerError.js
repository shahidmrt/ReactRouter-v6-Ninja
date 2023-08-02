import { Link, useRouteError } from "react-router-dom"

export default function CareerError() {
  const error = useRouteError();
  return (
    <div className="text-white ">
      <h2 className="text-2xl font-bold">Error</h2>
      <p className="my-4">{error.message}</p>
      <Link className="border border-gray-400  mt-10 p-2 " to="/">Back to homepage</Link>
 
    </div>
  )
}
