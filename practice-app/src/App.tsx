import React from 'react';
import './App.css';
import Customer from './components/Customer';
import User from './components/User';
import Counter from './components/Counter';
import Youtube from './components/Youtube';
import Login from './components/Login';

function App() {
  return (
    <div className="App text-center" style={{color: "darkblue"}}>
      <h1 className='mb-5'>React Practice Application</h1>
      {/* <div style={{display:"flex", justifyContent: "space-evenly"}}>
        <div>
          <Customer name="Juhi Sahu" total={400}/>
          <br />
          <Customer name="Vansh"/>
        </div>
        <div>
          <User name="Juhi Sahu" total={400}/>
        </div>
      </div> */}

        <Counter count={10}/>
        <Youtube message=''/>
      <Login/>
    </div>
  );
}

export default App;
