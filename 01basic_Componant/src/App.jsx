import './App.css'
import Title from './Title'
import Description from './Description'
import ProductTab from './ProductTab'

// This is not right way to declare Componant in react you can just create another jsx file to create Compant 
// function Title() {
//   return <h1>I am Title</h1>
// }

// function Description() {
//   return <h3>I am Description</h3>
// }

function App() {
  return <ProductTab />
}

export default App
