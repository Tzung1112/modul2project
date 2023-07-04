import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss"

export default function Navbar(props) {
    const [show, setShow] = useState(false);

    const navigator = useNavigate();
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-dark "
            style={{ paddingLeft: "50px", paddingRight: "50px" }}
        >
            <div className="container-fluid">
                <div className="nav-left">
                    <div className="logo">
                        <a
                            className="navbar-brand text-white "
                            style={{
                                fontSize: "45px",
                            }}
                            href="/"
                        >
                            AQUA
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active  text-white"
                                    aria-current="page"
                                    to=""
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active  text-white"
                                    aria-current="page"
                                    href="#storyContainer"
                                    onClick={() => navigator("/")}
                                >
                                    Story
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active  text-white"
                                    aria-current="page"
                                    to="/product"
                                >
                                    Product
                                </Link>
                            </li>
                            {!show ? (
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active  text-white"
                                        aria-current="page"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active  text-white"
                                        aria-current="page"
                                        to="/"
                                        onClick={() => {
                                            setShow(false);
                                        }}
                                    >
                                        Logout
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <>
                    {/* Right elements */}
                    <div className="d-flex align-items-center nav-right">
                        <div className="form-search">
                            <form className="d-flex seacrh">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </form>
                        </div>
                        <div className="dropdown icon">
                            <i
                                className="cart-item"
                                class="fa-solid fa-cart-shopping"
                                style={{
                                    color: "white",
                                    fontSize: "30px",
                                    marginLeft: "20px",
                                }}
                            ></i>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="dropdown">
                                <a
                                    class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuAvatar"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                        class="rounded-circle avt"
                                        height="25"
                                        alt="Black and White Portrait of a Man"
                                        loading="lazy"
                                    />
                                </a>
                                <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuAvatar"
                                >
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            My profile
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </nav>
    );
}
