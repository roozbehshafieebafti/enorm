import { FC } from "react";
import { Navbar } from "../navbar";
import classes from "./styles/header.module.scss";

export const Header: FC = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.cover} />
        <div className={classes.content}>
          <div>
            <h1>New BMW Cars</h1>
            <p className="body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
