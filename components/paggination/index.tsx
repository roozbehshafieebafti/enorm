import clsx from "clsx";
import { FC, useMemo } from "react";
import classes from "./styles/paggination.module.scss";

interface PaginationType {
  onChange: (page: number) => void;
  total: number;
  limit: number;
  currentPage: number;
}

export const Pagination: FC<PaginationType> = ({
  total,
  limit,
  currentPage,
  onChange,
}) => {
  const pages = useMemo(() => {
    const totalPages = Math.ceil(total / limit);
    let pagesToShow: string[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pagesToShow.push(`${i}`);
      }
    } else {
      pagesToShow.push("1");
      if (currentPage === 0) {
        pagesToShow = [
          ...pagesToShow,
          `${currentPage + 2}`,
          "...",
          `${totalPages}`,
        ];
      } else if (currentPage === 1) {
        pagesToShow = [
          ...pagesToShow,
          `${currentPage + 1}`,
          `${currentPage + 2}`,
          "...",
          `${totalPages}`,
        ];
      } else if (currentPage === 2) {
        pagesToShow = [
          ...pagesToShow,
          `${currentPage}`,
          `${currentPage + 1}`,
          `${currentPage + 2}`,
          "...",
          `${totalPages}`,
        ];
      } else if (currentPage > 2 && currentPage + 3 < totalPages) {
        pagesToShow = [
          ...pagesToShow,
          "...",
          `${currentPage}`,
          `${currentPage + 1}`,
          `${currentPage + 2}`,
          "...",
          `${totalPages}`,
        ];
      } else if (currentPage + 3 === totalPages) {
        pagesToShow = [
          ...pagesToShow,
          "...",
          `${currentPage}`,
          `${currentPage + 1}`,
          `${currentPage + 2}`,
          `${totalPages}`,
        ];
      } else if (currentPage + 2 === totalPages) {
        pagesToShow = [
          ...pagesToShow,
          "...",
          `${currentPage}`,
          `${currentPage + 1}`,
          `${totalPages}`,
        ];
      } else if (currentPage + 1 >= totalPages) {
        pagesToShow = [
          ...pagesToShow,
          "...",
          `${currentPage - 1}`,
          `${currentPage}`,
          `${totalPages}`,
        ];
      }
    }
    return pagesToShow;
  }, [currentPage, limit, total]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-1" />
        <div className="col-md-8 col-6 d-flex justify-content-center">
          {pages.map((page, index) => {
            return (
              <button
                className={clsx(
                  "caption",
                  classes.numbers,
                  currentPage === Number(page) - 1 && classes.active
                )}
                key={index}
                onClick={() => {
                  page !== "..." && onChange(Number(page) - 1);
                }}
              >
                {page}
              </button>
            );
          })}
        </div>
        <div className="col-md-2 col-5 d-flex justify-content-end">
          <button
            className={classes.next}
            onClick={() => {
              let value =
                currentPage + 2 > Math.ceil(total / limit)
                  ? currentPage
                  : currentPage + 1;
              onChange(value);
            }}
          >
            Next Page
            <i className="bi bi-chevron-right text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};
