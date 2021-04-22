import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/Footer.js";
import "./styles/App.css";
import "./styles/MobileApp.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
