import "../App.css";

import NoteApp from "../components/NoteApp";
import IntroModal from "../features/IntroModal";

const HomePage = () => {

  return (
    <>
      <IntroModal/>
      <NoteApp /> 
    </>
  );
};

export default HomePage;
