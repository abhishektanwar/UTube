import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap'
import HomeScreen from './components/screens/HomeScreen';
import { useState } from 'react';
function App() {
  const [sidebar,setSidebar] = useState(false)

  const handleToggleSidebar = () => {
    setSidebar(value => !value)
    console.log("c",sidebar)
  }
  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className="app__container border border-info">
      <Sidebar sidebar={sidebar}/>
      <Container fluid className="app__main border border-warning">
        <HomeScreen />
      </Container>
    </div>
    
    
    </>
  );
}

export default App;
