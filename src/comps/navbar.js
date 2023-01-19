import { Fragment } from "react";
import "../styles/navbar.css";
function Navbar() {
  return (
    <Fragment>
      <section>
        <ul>
          <li>
            <a href="/#">HOME</a>
          </li>
          <li>
            <a href="/">Your Bookshelf</a>
          </li>
          <li>
            <a href="/#">Wishlist</a>
          </li>
          <li>
            <a href="/">BROWSE</a>
          </li>
        </ul>
      </section>
    </Fragment>
  );
}

export default Navbar;
