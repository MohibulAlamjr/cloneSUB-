import React from 'react';
import {Fragment} from 'react';
import '../src/style/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnavigation from './components/navigation/Topnavigation';
import Midnavigation from './components/navigation/Midnavigation';



function App() {
  return ( 
  <div>
      <Topnavigation></Topnavigation>
      <Midnavigation></Midnavigation>
    </div>
  );
}

export default App;