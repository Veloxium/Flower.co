import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterLine from './components/router/RouterLine';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import Copyright from './components/copyright/Copyright';

function App() {
  return (
    <Router>
    <div className="App">
      <RouterLine />
      <Footer />
      <Copyright />
    </div>
    </Router>
  );
}

export default App;
