import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function EscapeCard() {
  return <>
    
    <div className='EscapeCard'>

      <Card style={{ width: '20rem' }}>
        <Card.Img className='card-img' variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='card-btn'>Découvrir ce jeu</Button>
        </Card.Body>
      </Card>
    </div>
  </>
}

export default EscapeCard;