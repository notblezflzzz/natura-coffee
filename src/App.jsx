import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
