import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
// styles
import classes from "./styles/navbar.module.scss";

export const Navbar: FC = () => {
  return (
    <nav
      className={clsx(
        "navbar navbar-expand-lg d-flex justify-content-between",
        classes.root
      )}
    >
      <div className="d-flex align-items-center p-0">
        <Link href="/" className="h4 no-decoration m-0">
          <span className="text-primary">Auto</span>
          <span>Car</span>
        </Link>
        <Link href="/" className={clsx("body-1 no-decoration", classes.links)}>
          New ars
        </Link>
        <Link href="/" className={clsx("body-1 no-decoration", classes.links)}>
          Used cars
        </Link>
        <Link href="/" className={clsx("body-1 no-decoration", classes.links)}>
          About us
        </Link>
        <Link href="/" className={clsx("body-1 no-decoration", classes.links)}>
          Contact
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <button className="btn btn-primary">Find your car</button>
        <i className={clsx("bi bi-person-circle", classes["user-icon"])} />
      </div>
    </nav>
  );
};
