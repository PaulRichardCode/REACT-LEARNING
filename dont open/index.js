/* import React from "react";
import ReactDOM from "react"; */
import Header from "./header";
import Footer from "./footer";
import List from "./list";

function App() {
  return (
    <body>
      <Header />
      <List />
      <Footer />
    </body>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
