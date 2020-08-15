import Link from "next/link";
import React from "react";
import About from "../pages/about";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link href="/">
                <a className="navbar-brand" href="#">NextJs MovieApp</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link" >Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/about"}>
                                <a className="nav-link" href="#">About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services">
                            <a className="nav-link" href="#">Services</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                            <a className="nav-link" href="#">Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;
