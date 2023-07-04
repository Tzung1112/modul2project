import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LazyLoad from "./LazyLoad";
import Navbar from "@components/Navbars/Navbar";
import Footers from "./components/Footers/Footers";

function App() {
    return (
        <div className="App">
            <div className="nav-container">
                <div className="nav-containers">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="app_container">
                {/* Content Router */}
                <Routes>
                    <Route
                        path=""
                        element={LazyLoad(() => import("@pages/Homes/Home"))()}
                    />
                    <Route
                        path="/product"
                        element={LazyLoad(() =>
                            import("@pages/product/Products")
                        )()}
                    />

                    <Route
                        path="/login"
                        element={LazyLoad(() =>
                            import("@pages/logins/Logins")
                        )()}
                    >
                        {/* Router Con Của About */}
                    </Route>
                    <Route
                        path="/register"
                        element={LazyLoad(() =>
                            import("@pages/logins/registers/Register")
                        )()}
                    ></Route>
                </Routes>
            </div>
            <Footers></Footers>
        </div>
    );
}

export default App;
