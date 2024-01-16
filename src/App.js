import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/Homepage";
import TechstackPage from "./pages/TechstackPage.js"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ShepherdTour} from "react-shepherd";
import { steps, tourOptions } from "./features/Tour.js";
import 'shepherd.js/dist/css/shepherd.css';



function App() {

  return (
    <div className="App">
      <ShepherdTour steps={steps} tourOptions={tourOptions}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/TechStack" element={<TechstackPage />} />
        </Routes>
        <Footer />
      </ShepherdTour>

    </div>
  );
}

export default App;
