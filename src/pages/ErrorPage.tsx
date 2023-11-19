import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h2>Wrong path name</h2>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};
