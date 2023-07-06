import React, { useEffect, useState} from 'react'
import './Logins.scss'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '@components/Loadings/Loading'
import { userLoginActions } from '@stores/slices/userLogin.slice'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLoginStore = useSelector((store) => store.userLoginStore);
    console.log("🚀 ~ file: Logins.jsx:14 ~ Login ~ userLoginStore :", userLoginStore )

    

    useEffect(() => {
        if (userLoginStore.userInfor == null) {
            if (localStorage.getItem("token")) {
                dispatch(
                    userLoginActions.checkTokenLocal(
                        localStorage.getItem("token")
                    )
                );
                
            }
        } else {
            navigate("/");
        }
    }, [userLoginStore.userInfor]);
    useEffect(() => {
        dispatch(userLoginActions.checkUser(localStorage.getItem("token")));
    }, [userLoginStore.userInfor]);
    
    return (
        <div className="container-login">
            {userLoginStore.loading ? <Loading></Loading> : <></>}
            <div className="login">
                <form
                    onSubmit={(eventForm) => {
                        eventForm.preventDefault(); // vô hiệu hành vi mặc định form
                        if (
                            eventForm.target.inputUserName.value == "" ||
                            eventForm.target.inputPassword.value == ""
                        ) {
                            alert("vui lòng điền đầy đủ các trường");
                            return;
                        }

                        dispatch(
                            userLoginActions.login({
                                userName: eventForm.target.inputUserName.value,
                                password: eventForm.target.inputPassword.value,
                            })
                        );
                    }}
                    className="login_form"
                >
                    <h1>Login</h1>
                    {/* input User Name */}
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
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="inputUserName"
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
                            type="text"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="inputPassword"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary button"
                     
                    >
                        Login
                    </button>
                    <div className="link-register">
                        You don't have an account?{" "}
                        <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}