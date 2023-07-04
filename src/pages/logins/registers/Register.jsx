import React, { useEffect, useState } from "react";
import { registerActions } from "@stores/slices/userRegister.slice";
import "./Register.scss";
import { Link,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Register() {
    const dispatch = useDispatch();
    const reigisterStore = useSelector((store) => store.reigisterStore);
    const navigator = useNavigate();

   

    return (
        <div className="container-register">
            <div className="login">
                <h1>REGISTER</h1>
                {/* input User Name */}
                <form
                    onSubmit={(event) => {
                        event.preventDefault(); // ngăn chặn hành vi gọi action của form

                        if (
                            event.target.userName.value == "" ||
                            event.target.password.value == "" ||
                            event.target.firstName.value == "" ||
                            event.target.lastName.value == "" ||
                            event.target.email.value == ""
                        ) {
                            alert("Vui lòng điền đầy đủ thông tin");
                            return;
                        }

                        let newUser = {
                            userName: event.target.userName.value,
                            password: event.target.password.value,
                            isAdmin: false,
                            firstName: event.target.firstName.value,
                            lastName: event.target.lastName.value,
                            email: event.target.email.value,
                            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iZxuB8qbL-5ixjG8tc-RqZWx5AiJYSkePQ&usqp=CAU",
                            cart:[]
                        };
                        dispatch(registerActions.createNewUsers(newUser));
                        //reset form
                        // props.dataForm.functionCloseForm(false);
                    }}
                >
                    <div className="form_input input-group mb-3 input">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                First Name
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            aria-label="First Name"
                            aria-describedby="basic-addon1"
                            name="firstName"
                        />
                    </div>
                    <div className="form_input input-group mb-3 input">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                Last Name
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            aria-label="Last Name"
                            aria-describedby="basic-addon1"
                            name="lastName"
                        />
                    </div>
                    <div className="form_input input-group mb-3 input">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                Email
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            name="email"
                        />
                    </div>
                    <div className="form_input input-group mb-3 input">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                User Name
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="User Name"
                            aria-label="User Name"
                            aria-describedby="basic-addon1"
                            name="userName"
                        />
                    </div>
                    {/* input User Name */}
                    <div className="form_input input-group mb-3  input">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                Password
                            </span>
                        </div>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="password"
                        />
                    </div>
                    <div className="form_input input-group mb-3  input">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                Confirm Password
                            </span>
                        </div>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="confirmPassword"
                        />
                    </div>
                    <button onClick={()=>{navigator("/")}} type="submit" className="btn btn-primary button">
                        Register
                    </button>
                    <div className="link-register">
                        You have an account?
                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
