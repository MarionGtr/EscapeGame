import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import DetailsPage from '../Pages/DetailsPage';

const EscapeCard = ({ escapeGame }) => {
  const navigate = useNavigate();
    
  const navigateTo = (id_escape_game) => {
    navigate("/escapeGame/"+id_escape_game);
  }
  return (
    <div className='EscapeCard'>
      <Card style={{ width: '20rem' }} onClick={() => {navigateTo(escapeGame.id_escape_game)}}>
        <Card.Img 
          className='card-img' 
          variant="top" 
          
          src={`/images/${escapeGame.image_url}`} 
         
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