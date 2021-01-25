console.log("Hello World !");

import {sum} from './sum';
console.log(sum(2,8));

let heading = document.querySelector("#demo"), 
sumValue = sum(101111,2221);
heading.innerHTML = `101111 + 2221 = ${sumValue}`;
import style from "../css/index.scss";