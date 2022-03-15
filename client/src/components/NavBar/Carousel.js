import React from 'react'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const Mycarousel = () => {
  return (
    <div><Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGI2miiGJW1vaDX_O_FUpxJakh__jMmZ6X_4jlSeiuNXVkimc8VBpjmsAHBN93WDgQtQ&usqp=CAU"
        alt="first slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://tunisie.co/uploads/images/content/camping-en-vogue-tunisie-310818-v.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.pinimg.com/originals/fe/ea/9d/feea9d5248ca6571541691fc35d537e6.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/771079/pexels-photo-771079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/3232542/pexels-photo-3232542.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/6039216/pexels-photo-6039216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Third slide"
      />
    </Carousel.Item>
    </Carousel></div>
  )
}

export default Mycarousel