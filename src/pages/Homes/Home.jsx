import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "@stores/slices/counter.slice";
import Carousel from "react-bootstrap/Carousel";
import Carousels from "./Carousels";
import Footers from "../../components/Footers/Footers";
import Bodys from "./Bodys";

export default function Home() {
    return (
        <div className="home-container">
            <div className="body-home">
                {<Carousels></Carousels>}
                <Bodys></Bodys>
            </div>
        </div>
    );
}
