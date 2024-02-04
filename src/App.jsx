import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import DetailsPage from './Pages/DetailsPage'
import CheckoutPage from './Pages/CheckoutPage'


function App() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/contact' element={ <ContactPage /> } />
            <Route path='/details/:id' element={ <DetailsPage /> } />
            <Route path='/checkout' element={ <CheckoutPage /> } />
            {/* <Route path='*' element={ <Error /> } /> */}
          </Routes>
        </div>
      </Router> 
  )
}

export default App