import '@riotjs/hot-reload'
import { component } from 'riot'
import './router'
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import '../app/style/style.css';
import App from './tags/app.riot';
import '../app/assets/favicon-32x32.png'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";

/* Initialize Boot page */
console.log('Initializing App');
//Add edit and eye fontawesome font for use in the admin page
library.add(faEdit,faEye);
dom.watch();

component(App)(document.getElementById('app'), {
    name: 'Riot Blog App',
})