import React from 'react'
import NavBar from '../NavBar'
import { Carousel } from 'react-bootstrap'
import img1 from '../Images/adbanner (1).webp'
import img2 from '../Images/adbanner2.webp'
import img4 from '../Images/adbanner4.webp'





const Dashboard = ({menulist}) => {
  return (
    <div>
    <NavBar
    menulist='Dashboard'
    />
    <br />
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default Dashboard