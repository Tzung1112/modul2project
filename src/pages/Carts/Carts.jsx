import React, { useEffect } from 'react'
import "./Carts.scss"
import { useDispatch, useSelector } from "react-redux";
import { userLoginActions } from "@stores/slices/userLogin.slice";
import { useNavigate } from 'react-router-dom';

export default function Carts() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
      const userLoginStore = useSelector((store) => store.userLoginStore);
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
             navigate("/cart");
         }
     }, [userLoginStore.userInfor]);
         useEffect(() => {
         }, [userLoginStore.userInfor]);
     
     
      console.log("🚀 ~ file: Carts.jsx:13 ~ Carts ~ userLoginStore:", userLoginStore)

  return (
      <div className="cart-container">
          <div className="carts">
              {userLoginStore.userInfor.cart.map((item) => (
                  <div className="cart-item">
                      <div className="name">{item.productName}</div>
                      <div className="img">
                          <img src={item.url} alt="" />
                      </div>
                      <div className="price">{item.price}</div>
                      <div className="delete">
                          <button type="button" class="btn btn-dark">
                              DELETE
                          </button>
                      </div>
                  </div>
              ))}
              <div className="buy">
                  <button type="button" class="btn btn-dark">
                      BUY
                  </button>
              </div>
          </div>
      </div>
  );
}
