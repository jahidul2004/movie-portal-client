import { RiMovie2AiLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <div className=" p-6 rounded-lg">
                <h1 className="text-9xl font-bold text-[#e50912]">404</h1>
                <p className="text-xl text-gray-700 mt-4">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link to={"/"} className="mt-5 bg-[#e50912] text-white btn">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
