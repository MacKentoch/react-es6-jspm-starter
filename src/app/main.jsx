import React        from 'react';
import ReactDOM     from 'react-dom';
import HelloWorld   from './components/helloworld/helloword.jsx!'; 

  
console.info(`React js version : ${React.version}`);  
  
ReactDOM.render(
  <HelloWorld></HelloWorld>,
  document.querySelector('.root'))
