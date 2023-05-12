import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Modal from "./components/Modal/Modal.jsx";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);

  function modalOpen() {
    setModalShow(true);
  };

  function modalClose() {
    setModalShow(false);
  };
  
  return (
    <>
      <Header />
      <Main modalOpen={modalOpen} />
      <Footer />
      {modalShow && <Modal modalClose={modalClose} />}
    </>
  );
}
export default App;
