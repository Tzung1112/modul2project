import React, { useEffect } from 'react'
import "./DetailCart.scss";
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from "../../stores/slices/product.slice";
import { randomId } from '@mieuteacher/meomeojs';


export default function DetailCart() {
  const productStore = useSelector((store) => store.productStore.listProducts);
      const dispatch = useDispatch();

  useEffect(() => {
      dispatch(productActions.findAllProducts());
  }, []);
  return (
      <div className="detail-container">
          <div className="detail" key={randomId()}>
           {/*  <div className="detail" key={randomId()}>
                <div className="img-detail">
                    <img src={item.url} alt="" />
                </div>
                <div className="title-detail">
                    <div>Name{item.productName}</div>
                    <div>Price{item.price}</div>
                    <div>Title</div>
                    <div>
                        <button type="button" class="btn btn-dark">
                            Dark
                        </button>
                    </div>
                </div>
            </div> */}
              {/* {productStore.map((item) => ())} */}
              
          </div>
      </div>
  );
}
