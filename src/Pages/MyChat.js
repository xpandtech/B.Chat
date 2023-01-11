import { ChatEngine } from 'react-chat-engine';
import TheSameChatUI from '../components/Inbox';
import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar'
import './MyChat.css';



const MyChat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (

    <div className="Main-page">
    <NavBar/>
    <TheSameChatUI/>
    </div>
    
  );

};


// infinite scroll, logout, more customizations...

export default MyChat;
