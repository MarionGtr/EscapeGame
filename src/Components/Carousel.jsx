import Carousel from 'react-bootstrap/Carousel';




function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img src={`/images/throne.png`} className="img-carousel" alt="ambiance1" />
        <Carousel.Caption>
          <h3>Le Trône De Fer</h3>
          <p>Plongeriez-vous dans l'intrigue de Westeros ?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src={`/images/starwars.png`} className="img-carousel" alt="ambiance2" />
        <Carousel.Caption>
          <h3>La Quête Du Jedi</h3>
          <p>La Rebellion a besoin de vous répondriez-vous présent ?.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src={`/images/sorcier.png`} className="img-carousel" alt="ambiance3" />
        <Carousel.Caption>
          <h3>L'épreuve Des Sorciers</h3>
          <p>
            Répondrez-vous présent à la convocation de Pourdlard ?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;