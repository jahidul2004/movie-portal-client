import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiMovie2AiLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer gap-3 footer-center p-10">
            <aside>
                <RiMovie2AiLine className="text-6xl font-bold text-[#e50912]" />
                <p className="text-xl font-bold">
                    Movie Portal
                    <br />
                    Providing best movies since 1992
                </p>
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved
                </p>
            </aside>
            <nav>
                <ul className="flex gap-3">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/trendingNow"}>Trending Now</Link>
                    </li>
                    <li>
                        <Link to={"/favoriteMovies"} href="#">
                            Favorites
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <div className="grid text-[#e50912] text-2xl grid-flow-col gap-4">
                    <a>
                        <FaFacebook />
                    </a>
                    <a>
                        <FaInstagram />
                    </a>
                    <a>
                        <FaYoutube />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
