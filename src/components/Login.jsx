import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="card mx-auto my-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
                <h1 className="text-3xl font-bold text-center text-[#e50912]">
                    Login
                </h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#e50912] text-white">
                        Login
                    </button>
                </div>

                <button type="button" className="btn border-[#e50912]">
                    <FcGoogle />
                    Login With Google
                </button>

                <p className="mt-4 text-sm">
                    New here?Please{" "}
                    <Link to={"/register"} className="font-bold">
                        Register
                    </Link>{" "}
                    first.
                </p>
            </form>
        </div>
    );
};

export default Login;
