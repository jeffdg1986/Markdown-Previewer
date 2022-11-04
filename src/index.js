import React from 'react';
import './styles.css';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectHolder from './components/ProjectHolder';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ProjectHolder />);
//ReactDOM.createRoot(container);
