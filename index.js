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
