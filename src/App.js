import CardContainer from "./components/CardContainer";
import Comments from "./components/Comments";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import './components/css/main.css'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Companies/>
    <CardContainer/>
    <Comments/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
