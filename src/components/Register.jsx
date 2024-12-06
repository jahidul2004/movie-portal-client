import React from "react";
import { Link } from "react-router-dom";

// Name, Email, Photo-URL, Password & Register Button

const Register = () => {
    return (
        <div className="card mx-auto my-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
                <h1 className="text-3xl font-bold text-center text-[#e50912]">
                    Register!
                </h1>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Photo URL"
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
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#e50912] text-white">
                        Register
                    </button>
                </div>

                <p className="mt-4 text-sm">
                    Already Have an Account?Please{" "}
                    <Link to={"/login"} className="font-bold">
                        Log In
                    </Link>{" "}
                </p>
            </form>
        </div>
    );
};

export default Register;
