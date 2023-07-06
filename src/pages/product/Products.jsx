import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.scss";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../stores/slices/product.slice";
import { userLoginActions } from "../../stores/slices/userLogin.slice";
import { detailActions } from "../../stores/slices/detail.slice";


export default function Products() {
    const productStore = useSelector(
        (store) => store.productStore.listProducts
    )
     const detailStore = useSelector(
        (store) => store.detailStore.detailcart
    );
   
    const navigate = useNavigate();

    const userLoginStore = useSelector((store) => store.userLoginStore);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.findAllProducts());
    }, []);
     useEffect(() => {
         dispatch(detailActions.FillDetail());
     }, []);
  
    useEffect(() => {
        dispatch(
            userLoginActions.checkTokenLocal(localStorage.getItem("token"))
        );
    }, []);

    useEffect(() => {
    }, [userLoginStore.userInfor]);

   

    return (
        <div className="product-container">
            <div>
                <h1>Product</h1>
            </div>
            <div className="list-product">
                {productStore.map((item) => (
                    <Card className="product-item" style={{ width: "18rem" }}>
                        <Card.Img
                            className="product-avt"
                            variant="top"
                            src={item.url}
                        />
                        <Card.Body>
                            <Card.Title>{item.productName}</Card.Title>
                            <Card.Text>Pirce:{item.price}</Card.Text>
                            <Button
                                onClick={() => {/* navigate("/detail-cart")
                                dispatch(detailActions.FillDetail(item)); */
                                    
                                    if (userLoginStore.userInfor) {
                                        dispatch(
                                            productActions.addProduct({
                                                usersId:
                                                    userLoginStore.userInfor.id,
                                                data: {
                                                    cart: [
                                                        {
                                                            productId:1,
                                                            productName:
                                                                "Hồ Cá Thủy Sinh Rong Biển",
                                                            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNxQ-U2IFK0SWX3eGkjHf1LemB5TI0kI4hA&usqp=CAU",
                                                            price: 145414231,
                                                        },
                                                        ...userLoginStore
                                                            .userInfor.cart,
                                                    ],
                                                },
                                            })
                                        );
                                    } else {
                                        alert("vui long dang nhap");
                                    }
                                }}
                                variant="primary"
                            >
                                Chi Tiết
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            <br></br>
            <Outlet></Outlet>
        </div>
    );
}
