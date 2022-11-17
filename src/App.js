
import Nav from "./components/Nav";
import Footer from "./components/ui/Footer";
import {  BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/books";

function App() {
  return (
    <Router>
    <div className="App">
      <Route />
        <Nav />
        <Route path="/" exact component={Home} />
        <Route Path="/books" component={Books} />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
