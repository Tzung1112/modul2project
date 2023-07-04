import Carousel from "react-bootstrap/Carousel";
import "./Carousels.scss";

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item className="carousel">
                <img
                    className="d-block w-100 anh"
                    src="https://www.adana.co.jp/jp/contents/nature_aquarium/pc/img/04/bg.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 anh"
                    src="https://www.adana.co.jp/jp/contents/nature_aquarium/pc/img/03/bg.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 anh"
                    src="https://www.adana.co.jp/jp/contents/nature_aquarium/pc/img/02/bg.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;
