import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                title: "Error!",
                text: "Password must contain at least 6 characters, including uppercase, lowercase letters and numbers",
                icon: "error",
                confirmButtonText: "Close",
                customClass: {
                    confirmButton: "bg-[#e50912] text-white",
                },
            });
            return;
        }

        const newUser = { name, email, photoURL, password };

        createUser(email, password)
            .then((data) => {

                if (data.user) {
                    Swal.fire({
                        title: "Success!!",
                        text: "User Registered Successfully",
                        icon: "success",
                        confirmButtonText: "Close",
                        customClass: {
                            confirmButton: "bg-[#e50912] text-white",
                        },
                    });
                    form.reset();

                    fetch(
                        "https://movie-portal-server-indol.vercel.app/users",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(newUser),
                        }
                    )
                        .then((response) => response.json())
                        .then((data) => console.log(data));

                    updateUser({
                        displayName: name,
                        photoURL: photoURL,
                    })
                        .then((data) => console.log(data))
                        .catch((error) => console.log(error));

                    navigate("/");
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
            <form onSubmit={handleRegister} className="card-body">
                <h1 className="text-3xl font-bold text-center text-[#e50912]">
                    Register!
                </h1>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        name="name"
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
                        name="email"
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
                        name="photoURL"
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
                        name="password"
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
