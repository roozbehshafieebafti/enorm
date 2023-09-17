import { FC } from "react";

export const CarsSkeleton: FC = () => {
  return (
    <div className="card container p-3 mb-3">
      <div className="row">
        <div className="col-md-3 col-12">
          <span
            className="placeholder col-12"
            style={{ height: "100%" }}
          ></span>
        </div>
        <div className="col-md-6 col-12">
          <div className="container">
            <div className="row mb-2">
              <span className="placeholder col-2 m-1"></span>
              <span className="placeholder col-3 m-1"></span>
            </div>
            <div className="row mb-2">
              <span className="placeholder col-2 m-1"></span>
              <span className="placeholder col-4 m-1"></span>
              <span className="placeholder col-5 m-1"></span>
            </div>
            <div className="row mb-2">
              <span className="placeholder col-2 m-1"></span>
              <span className="placeholder col-4 m-1"></span>
              <span className="placeholder col-5 m-1"></span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 d-flex align-items-end">
          <span className="placeholder col-12"></span>
        </div>
      </div>
    </div>
  );
};
