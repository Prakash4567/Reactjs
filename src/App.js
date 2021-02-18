import React from 'react';
import ComponentC from './Component/ComponentC.js';
import { UserProvider } from './Component/userContext.js';
// import Header from './LifeCycleDemo/Header.js';
// import ParentComp from './Component/ParentComp';
// import PureComp from './Component/PureComp';
// import Table from './Component/Table';
// import Clock from './Clock';
// import LifecycleA from './Component/LifecycleA'
// import Fragment from './Component/Fragment'
import { BrowserRouter as Router } from "react-router-dom";
import { CustomRouter } from './CustomRouter';
import { Links } from './Links';

function App() {
  return (
    <div className="app">
      <h1>Welcome to the Practise Demo Session</h1>
      <hr/>
       <div className="router">
      <Router> 
        <Links />  
        <hr/>    
        <CustomRouter />
      </Router>
      </div>
      
      
    {/* <LifeCycleDemo a={10} /> */}
    {/* <Calculator /> */}
    {/* <Movies /> */}
     
     {/* <LifecycleA /> */}
     {/* <Clock /> */}
     {/* <h1>Hellooo....!</h1>
   <h2>Welcome to the world of movies</h2> */}
      
      {/* <Header/> */}
      {/* <Fragment /> */}
      {/* <Table /> */}
      {/* <ParentComp /> */}
      {/* <UserProvider value ="Bala">
        <ComponentC />
      </UserProvider> */}
      
    </div>
  );
}

export default App;
