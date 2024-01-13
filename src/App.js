import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import TechstackPage from "./pages/TechstackPage";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  
  return (
    <div className="App">
        <Header/>
        <Routes>
        {/* https://reactrouter.com/en/main/components/routes */}
            <Route path='/' element={<HomePage />} />
            <Route path='TechStack' element={<TechstackPage/>}/>
        </Routes>
        <Footer/>
      
    </div>
  );  
}

export default App;
