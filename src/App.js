import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap'
import HomeScreen from './components/screens/HomeScreen';
import { useState } from 'react';
import LoginScreen from './components/loginScreen/LoginScreen'
import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import WatchScreen from './components/screens/WatchScreen/WatchScreen';
const Layout = ({ children }) => {
  const [sidebar,setSidebar] = useState(false)

  const handleToggleSidebar = () => {
    setSidebar(value => !value)
    console.log("c",sidebar)
  }
  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className="app__container">
      <Sidebar sidebar={sidebar}/>
      <Container fluid className="app__main">
        {/* <HomeScreen /> */}
        { children }
      </Container>
    </div>
    
    
    </>
  );
}

function App() {
  // return (
  //   <Layout />
  // )
  
  // return <LoginScreen />

  const {accessToken,loading} = useSelector(state => state.auth)
  const history = useHistory()
  // auth
  // useEffect(() => {
  //   if(!loading && !accessToken){
  //     history.push('/auth')
      
  //   }
  // },[accessToken,loading,history]) 
  return (
    // <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>

        {/* login */}
        <Route exact path="/auth">
            <LoginScreen />
        </Route>

        <Route path="/search">
          <Layout>
            <h1>Search screen</h1>
            {/* <WatchScreen /> */}
          </Layout>
        </Route>
        <Route path="/watch/:id">
          <Layout>
            {/* <h1>Search screen</h1> */}
            <WatchScreen />
          </Layout>
        </Route>

{/* invalid route */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
      
    // </Router>
  )

    
}

export default App;
