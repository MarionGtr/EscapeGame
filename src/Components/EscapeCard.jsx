import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const EscapeCard = ({ escapeGame }) => {
  return (
    <div className='EscapeCard'>
      <Card style={{ width: '20rem' }}>
        <Card.Img 
          className='card-img' 
          variant="top" 
          src={`http://localhost:5173/${escapeGame.image_url}`}
        />
        <Card.Body>
          <Card.Title>{escapeGame.name}</Card.Title>
          <Card.Text>
            {escapeGame.description}
          </Card.Text>
          <Button className='card-btn'>Découvrir ce jeu</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EscapeCard;