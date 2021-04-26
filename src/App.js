import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap'
import HomeScreen from './components/screens/HomeScreen';
function App() {
  return (
    <>
    <Header />
    <div className="app__container border border-info">
      <Sidebar />
      <Container fluid className="app__main border border-warning">
        <HomeScreen />
      </Container>
    </div>
    
    
    </>
  );
}

export default App;
