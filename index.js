/* function Maincontent() {
  return (
    <div>
      <h1>Hi, there i am learning react</h1>
      <p>React is so cool and i am learning it to land a job</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Navbar />
    <Maincontent />
  </div>,
  document.querySelector("#cool")
);
 */
/* 
const container = document.querySelector("#root");
const h1 = document.createElement("h1");
h1.textContent = "roses are red, codom is transparent";
container.append(h1); */

//JSX

/* const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
);

ReactDOM.render(page, document.querySelector("#root"));
 */
/* 
const navbar = (
  <nav>
    <h1>Paul Richard</h1>
    <h1>Paul Richard</h1>
    <h1>Paul Richard</h1>

    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

const root = document.querySelector("#root");

root.append(JSON.stringify(navbar));
 */

//******************************************************
//******************************************************
//******************************************************

//challenge 1
/* 
function TemporaryName() {
  return (
    <body>
      <img src="./react-logo.png" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created ny jordan walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>It is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile appps</li>
      </ul>
    </body>
  );
}

ReactDOM.render(<TemporaryName />, document.querySelector("#root"));
 */

//************************************************
//************************************************
//QUIZ

//what is a react component?
//React component is a function that returns react element, which can be reUsed

//react element is simply JSX

//WHAT IS JSX?
//jSX looks like html and it is a react syntax that under the hood returns a javascript object

//Pascal case starts with a captal letter

//************************************************
//************************************************
//challenge 2

import { func } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

function Header() {
  return (
    <header>
      <nav className="navi">
        <img src="./react-logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function List() {
  return (
    <div>
      <h1>Reasons i am exicted to learn react</h1>
      <ul>
        <li>Because it fun to try new things</li>
        <li>It a popular framework that simplifies web</li>
        <li>It has lot of fun features</li>
        <li>It can kick start your journey into mobile app</li>
        <li>And i need it to get a job</li>
      </ul>
    </div>
  );
}

function Footer() {
  return <footer>0 20xx paul development. All rights reserved</footer>;
}

function MyPage() {
  return (
    <body>
      <Header />
      <List />
      <Footer />
    </body>
  );
}

ReactDOM.render(<MyPage />, document.querySelector("#root"));
