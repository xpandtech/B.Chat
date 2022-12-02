import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <div className='card'>
      <Card.Header >
        <Nav  variant="pills" defaultActiveKey="#inbox">
          <Nav.Item className='pills'>
            <Nav.Link className='inbox' href="#inbox">Inbox</Nav.Link>
          </Nav.Item>
          <Nav.Item className='pills'>
            <Nav.Link  href="#broadcast">Broadcast</Nav.Link>
          </Nav.Item>
          <Nav.Item className='pills'>
            <Nav.Link className='outbox' href="#outbox">
              Outbox
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>

    </div>
  );
}

export default Navbar;