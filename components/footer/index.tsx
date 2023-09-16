import { FC } from "react";
import classes from "./styles/footer.module.scss";
import Link from "next/link";
import clsx from "clsx";

export const Footer: FC = () => {
  return (
    <div className={clsx("d-flex", classes.root)}>
      <div className="container d-flex align-items-center flex-grow-1">
        <div className="row justify-content-between flex-grow-1">
          <div className="col-12 col-sm-12 col-md-5 p-0">
            <Link href="/" className="h4 no-decoration m-0">
              <span className="text-primary">Auto</span>
              <span className="text-white">Car</span>
            </Link>
            <p className={clsx("caption", classes.text)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 p-0 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <Link
                  href="/"
                  className={clsx(
                    "body-1 no-decoration col-md-3",
                    classes.links
                  )}
                >
                  New cars
                </Link>
                <Link
                  href="/"
                  className={clsx(
                    "body-1 no-decoration col-md-3",
                    classes.links
                  )}
                >
                  Used cars
                </Link>
                <Link
                  href="/"
                  className={clsx(
                    "body-1 no-decoration col-md-3",
                    classes.links
                  )}
                >
                  About us
                </Link>
                <Link
                  href="/"
                  className={clsx(
                    "body-1 no-decoration col-md-3",
                    classes.links
                  )}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
