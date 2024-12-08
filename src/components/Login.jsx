import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();

    const { loginUser, loginWithGoogle } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
            .then((result) => {
                console.log(result);
                if (result.user) {
                    Swal.fire({
                        title: "Success!!",
                        text: "User Logged in Successfully",
                        icon: "success",
                        confirmButtonText: "Close",
                        customClass: {
                            confirmButton: "bg-[#e50912] text-white",
                        },
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "Close",
                    customClass: {
                        confirmButton: "bg-[#e50912] text-white",
                    },
                });
                form.reset();
            });
    };

    return (
        <div className="card mx-auto my-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-3xl font-bold text-center text-[#e50912]">
                    Login
                </h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        name="email"
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
                        name="password"
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

                <button
                    onClick={() => {
                        loginWithGoogle()
                            .then((result) => {
                                console.log(result);
                                if (result.user) {
                                    Swal.fire({
                                        title: "Success!!",
                                        text: "User Logged in Successfully",
                                        icon: "success",
                                        confirmButtonText: "Close",
                                        customClass: {
                                            confirmButton:
                                                "bg-[#e50912] text-white",
                                        },
                                    });

                                    const name = result.user.displayName;
                                    const email = result.user.email;
                                    const photoURL = result.user.photoURL;
                                    const password = null;

                                    const newUser = {
                                        name,
                                        email,
                                        photoURL,
                                        password,
                                    };

                                    fetch("http://localhost:3000/users", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(newUser),
                                    })
                                        .then((res) => res.json())
                                        .then((data) => {
                                            console.log(data);
                                            navigate("/");
                                        });
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                                Swal.fire({
                                    title: "Error!",
                                    text: error.message,
                                    icon: "error",
                                    confirmButtonText: "Close",
                                    customClass: {
                                        confirmButton:
                                            "bg-[#e50912] text-white",
                                    },
                                });
                            });
                    }}
                    type="button"
                    className="btn border-[#e50912]"
                >
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
