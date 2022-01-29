import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/contact">
          <ContactPage></ContactPage>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
