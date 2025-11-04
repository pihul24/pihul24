import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  'bootstrap/dist/css/bootstrap.css';
import img from './assets/cute.jpg';
import Navbar from './Componenet/Navbar';
import Card from './Componenet/Card';
import Count1 from './Componenet/Count1';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// function App() {
// return (
//     <div>
//       <Card />
//       </div>
// )
// }

// <div>
//   <Navbar />
//   <br/>
//   <Card name="Aditya" edu="Ph.D."></Card>

     
// // {/* { card start} */}
// // <div class="container mt-3">
// //   <h2>Card Header and Footer</h2>
// //   <div class="card">
// //     <div class="card-header">Header</div>
// //     <div class="card-body">Content</div> 
// //     <div class="card-footer">Footer</div>
// //   </div>
// // </div>

// // {/* {card end} */}

// // {/* {this is image start} */}
// // <img src={img} height ={500} width={ 500} alt="cute"/>
// // {/* {this is image end} */}


// //     </div>
// //   )
// // }


// export default App


// assignment 
// src/App.jsx
import React from "react";
// import Restaurant from "./Restaurant"; // Importing the Restaurant component

export default function App() {
  return (
    <>
      <Count1 />
    </>
  );
}
