import Book from './components/Book'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  return (
    <> 
    <Navbar/>

    <div id="adi">
      <Book title="Maths" price="800" img ="https://media.istockphoto.com/id/1044168372/vector/mathematics.jpg?s=612x612&w=0&k=20&c=02J5s_9nIBV_T4B7ng_6qo2wMfZQne-w8xNHm8XSzqo="/>
      <Book title="Chemistry" price="1000" img="https://media.istockphoto.com/id/1044168372/vector/mathematics.jpg?s=612x612&w=0&k=20&c=02J5s_9nIBV_T4B7ng_6qo2wMfZQne-w8xNHm8XSzqo="/>
      <Book title="Physics" price="1200" img="https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book-500x500.png"/>

    </div>
    

    </>
  )
}

export default App
