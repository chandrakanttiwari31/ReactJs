
// function add(a,b)
// {
// let sum=a+b;
  
//   return sum;
// }

// function sub(a,b)
// {

//  let  minus=a-b;
//   return minus;
// }

// function mul(a,b)
// {

//  let  mull=a*b;
//   return mull;
// }

// function divv(a,b)
// {

//  let  divvv=a/b;
//   return divvv;
// }

// export {add,sub,mul,divv};


//react Hook

// import React, { useState } from 'react';


// const App=()=>{
//  const state=useState();
//  const [count,setCount]=useState(0);


//  const Inc=()=>
//  {
//    setCount(count+1);
// console.log("clicked");

//  }
//   return(
//   <>
//  <h1>{count}</h1>
//  <button onClick={Inc}>click me</button>
//   </>
//   );
// };
// export default App;

import React, { useState } from 'react';

const App=()=>{

let newTime=new Date().toLocaleTimeString();

const[ctime ,setCtime]=useState(newTime);


const UpdateTime=()=>
{
 let newcTime=new Date().toLocaleTimeString();
   setCtime(newcTime);


};

  return(
<>
<div>
<h1>{ctime}</h1>
<button  onClick={UpdateTime}>get time</button>
</div>
</>

  );
};

export default App;
