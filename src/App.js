import "./App.css";
import About from "./components/about/About";
import BlogComponent from "./components/blog/Blog";

import FooterComponent from "./components/contact/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Service from "./components/services/Service";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Service />
      <BlogComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
