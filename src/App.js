import React, { Component } from 'react'
import './index.css'
import Homepage from './containers/Homepage'
import Classfeed from './containers/Classfeed'
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Routes,
  Switch,
} from 'react-router-dom'

function App() {
    return (
    //   <Router>
        <div className="App">
            
          <Routes>
            <Route path="/e" component={Classfeed} />
          </Routes>
        </div>
    //   </Router>
    )
}

// function App(){
//     return (
//         <div>
//             <Routes>
//                 <Route path="/home"
//                 element={Homepage} />
//             </Routes>
//         </div>
//     );
// };

export default App;
