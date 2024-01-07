import {BrowserRouter,Route,Routes} from "react-router-dom"

import Home from "./Component/Home";
import Footer from "./Component/Home/Footer";
import Header from "./Component/Home/Header"

import SingleArticle from "./Component/Article/SingleArticle.jsx";
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/articles/:id" element={<SingleArticle/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
