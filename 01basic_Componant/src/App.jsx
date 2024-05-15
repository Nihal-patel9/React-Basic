import './App.css'
import Title from './Title'
import Description from './Description'
import ProductTab from './ProductTab'
import Image from './Image'


// This is not right way to declare Componant in react you can just create another jsx file to create Compant 
// function Title() {
//   return <h1>I am Title</h1>
// }

// function Description() {
//   return <h3>I am Description</h3>
// }

function App() {

 
  return (
    <>
      <Image
        src="https://i.pinimg.com/550x/40/07/25/4007253b2d7211bdfa1f72ec026b8b69.jpg"
        width="300px"
        height="200px"
      />

      <Image
        src="https://paradepets.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg"
        width="300px"
        height="200px"
      />

      <Image
        src="https://i.redd.it/i-asked-chatgpt-to-make-a-cute-dog-and-then-make-him-even-v0-rh6xs23x6m2c1.jpg?width=768&format=pjpg&auto=webp&s=e44200f03de3be830f7d34719e7861b4b117380a"
        width="300px"
        height="200px"
      />




    </>
  )
}

export default App
