import "./App.css";
import About from "./components/About/About";
import BookTable from "./components/BookTable/BookTable";
import Facility from "./components/Facility/Facility";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PopularFoods from "./components/PopularFood/PopularFoods";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Header />
      <About />
      <Facility />
      <PopularFoods />
      <BookTable />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
