import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiMovie2AiLine } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-[#f7f7f7] p-10">
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
                <div className="grid text-2xl grid-flow-col gap-4">
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
