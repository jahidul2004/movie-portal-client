import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/allMovies"}>All Movies</NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink to={"/addMovie"}>Add Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/favoriteMovies"}>My Favorites</NavLink>
                    </li>
                </>
            )}
            <li>
                <NavLink to={"/trendingNow"}>Trending Now</NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink to={"/register"}>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/login"}>Login</NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl md:text-2xl lg:text-3xl font-bold text-[#e50912]">
                    Movie Portal
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex gap-2">
                        <div
                            className="border-2 border-[#e50912] rounded-full p-1"
                            title={user.displayName}
                        >
                            <img
                                className="h-[40px] w-[40px] rounded-full"
                                src={user.photoURL}
                                alt=""
                            />
                        </div>
                        <button
                            onClick={() => {
                                logOut()
                                    .then((res) => {
                                        if (res === undefined) {
                                            Swal.fire({
                                                title: "Success!",
                                                text: "Logged Out Successfully",
                                                icon: "success",
                                                confirmButtonText: "Close",
                                            });
                                        }
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }}
                            className="btn bg-[#e50912] text-white"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link to={"/login"} className="btn bg-[#e50912] text-white">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
