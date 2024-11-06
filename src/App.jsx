import './App.css'
import About from './components/About/About'
import BookTable from './components/BookTable/BookTable'
import Facility from './components/Facility/Facility'
import Header from './components/Header/Header'
import PopularFoods from './components/PopularFood/PopularFoods'
import Testimonial from './components/Testimonial/Testimonial'

function App() {
 

  return (
    <>
      <Header/>
      <About/>
      <Facility/>
      <PopularFoods/>
      <BookTable/>
      <Testimonial/>
    </>
  )
}

export default App
