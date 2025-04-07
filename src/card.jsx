import Card from 'react-bootstrap/Card';
import { FaUserCircle } from 'react-icons/fa';

function F1({ name, message }) {
  return (
    <Card 
      style={{
        width: '100%',
        maxWidth: '22rem',
        border: 'none',
        borderRadius: '1rem',
        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
        margin: '1rem auto',
        padding: '1rem',
      }}
    >
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <FaUserCircle size={40} className="text-primary me-3" />
          <div>
            <Card.Title className="mb-0" style={{ fontSize: '1.2rem', fontWeight: '600' }}>
              {name}
            </Card.Title>
            <Card.Subtitle className="text-muted" style={{ fontSize: '0.9rem' }}>
              Gave Feedback
            </Card.Subtitle>
          </div>
        </div>

        <hr style={{ margin: '0.75rem 0', borderColor: '#eee' }} />

        <Card.Text style={{ fontSize: '1rem', color: '#333', lineHeight: '1.5', textAlign: 'justify' }}>
          {message}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default F1;
