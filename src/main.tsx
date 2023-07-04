import './index.css';

import { render } from 'preact';
import App from './app';


const { VITE_APP_TITLE } = import.meta.env;

console.log("VITE_APP_TITLE", VITE_APP_TITLE)

render(<App />, document.getElementById('app')!)
