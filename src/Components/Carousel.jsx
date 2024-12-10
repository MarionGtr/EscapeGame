import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/ambiance1.png'
import img2 from '../img/ambiance2.jpg'
import img3 from '../img/ambiance3.jpeg'



function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img src={img1} className="img-carousel" alt="ambiance1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src={img2} className="img-carousel" alt="ambiance2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src={img3} className="img-carousel" alt="ambiance3" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;