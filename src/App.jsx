import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Currentwork from './components/currentwork/Currentwork'

const App = () => (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Currentwork />
        <Portfolio />
        <Contact />
        <Footer />
    </>
)

// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//             <h1>Welcome to React</h1>
//         </header>
//       </div>
//     );
//   }
  
export default App