import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../components/ChatFeed';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar'
import './MyChat.css';


const projectID = 'eec11bf8-0c40-4f33-a078-d09551198bc7';

const MyChat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (

    <div className="Main-page">
    <Navbar/>
    <ChatEngine
      height="90vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
    
  );

};


// infinite scroll, logout, more customizations...

export default MyChat;
