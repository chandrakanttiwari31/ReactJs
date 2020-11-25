import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import Head from './Head';
// import Para from "./Para";
//import {add,sub,mul,divv} from './App';


// let cdate=new  Date();
// cdate=cdate.getHours();
// let greeting="";

// const cssStyle={};

// if(cdate>=1 && cdate<12)
// {

//   greeting="good morning";
//   cssStyle.color="red";
// }
// else if(cdate>13 && cdate<=15)
// {

//   greeting="good afternoon";
//   cssStyle.color="orange";
// }

// else if(cdate>16 && cdate<=19)
// {
//   greeting="good evening";
//   cssStyle.color="green";

// }
// else{
//   greeting="good night";
//   cssStyle.color="blue";
// }


// ReactDOM.render(

//   <>
//    <div>
 
//        <h1>hello programmers <span style={cssStyle}>{greeting}</span></h1> 
//        </div>

// </>,

//   document.getElementById('root')

// );


//this is for component function in react

// ReactDOM.render(
// <>
// <Head />
// <Para/>
// </>,
// document.getElementById("root")

// );


// performing add sub mul div operation using react js

// ReactDOM.render(
//   <>
//   <h1>Addition of two no is {add(30,40)}</h1>
//   <h1>Subtraction of two no is {sub(30,10)}</h1>
//   <h1>multiplication  of two no is {mul(30,10)}</h1>
//   <h1>Division of two no is {divv(30,10)}</h1>
//   </>,
//   document.getElementById("root")
  
//   );


// react Hook
ReactDOM.render(
<App/>,document.getElementById("root")

);