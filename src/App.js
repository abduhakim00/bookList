import { Fragment } from "react";
import "./App.css";
import Navbar from "./comps/navbar";
function App() {
  return (
    <Fragment>
      <main className="App">
        <div className="overlay"></div>
        <Navbar></Navbar>
        <button>Record Your Next Read!</button>
      </main>
    </Fragment>
  );
}

export default App;
