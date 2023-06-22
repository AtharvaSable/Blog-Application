import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>
    <div className='max-w-screen-md mx-auto pt-20'>
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/ArticleList' element={<ArticleList />} />
    <Route path='/Article/:name' element={<Article />} />
    </Routes>
  </div>
  </Router>
  );
}

export default App;
