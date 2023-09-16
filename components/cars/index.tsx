import { FC } from "react";
import Image from "next/image";

import classes from "./styles/car.module.scss";
import clsx from "clsx";
import { Button } from "../button";

export const CarsCard: FC = () => {
  return (
    <div className={clsx("card", classes.root)}>
      <div className={classes.picture}>
        <div>
          <Image src="/images/car.png" layout="fill" alt={"car"} />
        </div>
      </div>
      <div className={clsx("p-0", classes.information)}>
        <div className="container">
          <div className="row mb-3">
            <span className="title-2 p-0">Humda</span>
          </div>
          <div className="row">
            <div className="col-lg-4 col-6 mb-3 p-0">
              <div>
                <Image
                  src="/images/milage.svg"
                  width={16}
                  height={12}
                  alt="milage"
                />
                <span className={clsx("caption", classes.caption)}>Milage</span>
              </div>
              <div className={clsx("body-1", classes.data)}>69.426 km</div>
            </div>
            <div className="col-lg-4 col-6 p-0">
              <div>
                <Image
                  src="/images/transmission.svg"
                  width={16}
                  height={12}
                  alt="Transmission"
                />
                <span className={clsx("caption", classes.caption)}>
                  Transmission
                </span>
              </div>
              <div className={clsx("body-1", classes.data)}>69.426 km</div>
            </div>
            <div className="col-lg-4 col-6 p-0">
              <div>
                <Image
                  src="/images/year.svg"
                  width={16}
                  height={12}
                  alt="year"
                />
                <span className={clsx("caption", classes.caption)}>Year</span>
              </div>
              <div className={clsx("body-1", classes.data)}>69.426 km</div>
            </div>
            <div className="col-lg-4 col-6 p-0">
              <div>
                <Image
                  src="/images/intake.svg"
                  width={16}
                  height={12}
                  alt="intake"
                />
                <span className={clsx("caption", classes.caption)}>Intake</span>
              </div>
              <div className={clsx("body-1", classes.data)}>69.426 km</div>
            </div>
            <div className={clsx("col-lg-4 col-6 p-0", classes.margin)}>
              <div style={{ whiteSpace: "nowrap" }}>
                <Image
                  src="/images/power.svg"
                  width={16}
                  height={12}
                  alt="milage"
                />
                <span className={clsx("caption", classes.caption)}>
                  Power KW (PK)
                </span>
              </div>
              <div className={clsx("body-1", classes.data)}>69.426 km</div>
            </div>
            <div className={clsx("col-lg-4 col-6 p-0", classes.margin)}>
              <div>
                <Image
                  src="/images/color.svg"
                  width={16}
                  height={12}
                  alt="color"
                />
                <span className={clsx("caption", classes.caption)}>Color</span>
              </div>
              <div className={clsx("body-1", classes.data)}>69.426 km</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-0 d-flex justify-content-end align-items-end mt-4">
        <Button shape="secondary" style={{ whiteSpace: "nowrap" }}>
          View car
        </Button>
      </div>
    </div>
  );
};
