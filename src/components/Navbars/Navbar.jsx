import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss"
import { MDBCol } from "mdbreact";

export default function Navbar(props) {
    const navigator = useNavigate();
    return (
        <div>
            <nav className="container-nav">
                <div className="left-nav">
                    <h1>AQUA</h1>
                    <Link className="link" to="/">
                        Home
                    </Link>
                    <a
                        className="link"
                        href="#storyContainer"
                        onClick={() => {
                            navigator("");
                        }}
                    >
                        Story
                    </a>
                    <Link className="link" to="/product">
                        Product
                    </Link>
                    <Link className="link" to="/login">
                        Login
                    </Link>
                </div>
                <div className="right-nav">
                    <div className="search">
                        <MDBCol className="input" md="6">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </MDBCol>
                    </div>
                    <div className="icon">
                        <Link className="link" to="/cart">
                            {" "}
                            <i class="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </div>
                    <div className="avt-item">
                        <img
                            className="avt"
                            src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"
                            alt=""
                            onClick={() => navigator("/profile")}
                        />
                    </div>
                    <div className="logout-icon">
                        <i
                            onClick={() => navigator("/")}
                            class="fa-solid fa-right-from-bracket "
                        ></i>
                    </div>
                </div>
            </nav>
        </div>
    );
}
