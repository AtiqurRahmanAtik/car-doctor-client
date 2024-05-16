import { useRouteError } from "react-router-dom";
import image from "../../assets/404.gif"

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="my-11 text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <div className="text-center">
        <img  className="mx-auto" src={image} alt="" />
      </div>
    </div>
    );
};

export default ErrorPage;