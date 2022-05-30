import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="app_container container">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
