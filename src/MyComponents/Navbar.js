import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Logo from '../logo.png';

function Navbar() {
  return (
    <div className='card'>
      <Card.Header >
        <Nav  variant="pills" defaultActiveKey="#inbox">
        <img src={Logo} className="logo" />

          <Nav.Item className='pills'>
            <Nav.Link className='inbox' href="#inbox">I</Nav.Link>
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