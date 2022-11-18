
import Nav from "./components/Nav";
import Footer from "./components/ui/Footer";
import {  BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <Router>
    <div className="App">
      <Route />
        <Nav />
        <Route path="/" exact component={Home} />
        <Route Path="/books" render={() => <Books books={books} />} />
        <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
