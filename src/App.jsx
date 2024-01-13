

import './App.css'
import Counter from './components/counter'
import Navbar from './components/navbar'
import Products from './components/products'



function App() {


  return (
    <>
      <Navbar />
      <h1>React Project</h1>
    <Counter />
      <p className="read-the-docs">
        Click on the button to increment
      </p>
      <Products />
    </>
  )
}

export default App
