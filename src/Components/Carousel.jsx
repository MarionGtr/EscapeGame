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
          <h3>Rassemblez votre équipe et relevez le défi en moins de 60 minutes ! </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src={img2} className="img-carousel" alt="ambiance2" />
        <Carousel.Caption>
          <h3>Des énigmes captivantes et des décors immersifs vous attendent</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src={img3} className="img-carousel" alt="ambiance3" />
        <Carousel.Caption>
          <h3>Prêts à devenir les héros de votre propre aventure? Réservez maintenant !</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;