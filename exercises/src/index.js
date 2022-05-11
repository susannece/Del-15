import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
 //import App from './taniarascia/App';
// import Skill from './practise/Skill';
//import DataTable from './workshop/DataTable';
import DemoRouter from './workshop3/DemoRouter';

//ReactDOM.render(<DemoRouter />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DemoRouter />
  </React.StrictMode>
); 

