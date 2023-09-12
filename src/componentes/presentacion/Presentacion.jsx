import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './presentacion.css'
import img1 from '../../img/pexels-engin-akyurt-2271106.jpg'
import img2 from '../../img/pexels-seyed-ali-hosseini-2331536.jpg'
import img3 from '../../img/pexels-marcos-kohler-17182466.jpg'


function Presentacion() {
    return (
        <>
            <div className='carouseldiv'>
                <Carousel fade>

                    <Carousel.Item>

                        <img className="rounded mx-auto d-block" src={img1} alt="First slide" />

                        <Carousel.Caption>

                            <h1>Happy Burger</h1>

                            <p>Look at our Happy Meal deals!</p>

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>

                        <img className="rounded mx-auto d-block" src={img2} alt="First slide" />

                        <Carousel.Caption>

                            <h3>Tag us and get a $10usd discount coupon!</h3>

                            <p>Valid on your next visit and if you follow us.</p>

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>

                        <img className="rounded mx-auto d-block" src={img3} alt="First slide" />

                        <Carousel.Caption>

                            <h3>All day Deal</h3>
                            <p>
                                Burger and Soda for $7usd.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>



        </>



    )

}



export default Presentacion