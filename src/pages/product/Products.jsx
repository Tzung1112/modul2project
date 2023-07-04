import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.scss";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../stores/slices/product.slice";

export default function Products() {
    const productStore = useSelector(
        (store) => store.productStore.listProducts
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.findAllProducts());
    }, []);
    useEffect(() => {}, [productStore]);

    console.log(productStore);
    return (
        <div className="product-container">
            <div>
                <h1>Product</h1>
            </div>
            <div className="list-product">
                {productStore.map((item) => (
                    
                        <Card
                            className="product-item"
                            style={{ width: "18rem" }}
                        >
                            <Card.Img className="product-avt" variant="top" src={item.url} />
                            <Card.Body>
                                <Card.Title>{item.productName}</Card.Title>
                                <Card.Text>Pirce:{item.price}</Card.Text>
                                <Button variant="primary">Mua Hàng</Button>
                            </Card.Body>
                        </Card>
                ))}
            </div>

            <br></br>
            <Outlet></Outlet>
        </div>
    );
}
