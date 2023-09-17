"use client";
import { CarInput, getAllCars } from "@/apis/cars";
import { CarType } from "@/apis/cars/types";
import { CarsCard } from "@/components/cars";
import { Pagination } from "@/components/paggination";
import { Filters } from "@/containers/home/filters";
import { PresentedCarType, HomeContext } from "@/containers/home/home-context";
import { PAGE_LIMIT_SIZE } from "@/utils/constants";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState<CarType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [listCars, setListCars] = useState<PresentedCarType>({
    page: 0,
    total: 0,
    cars: [],
    limit: PAGE_LIMIT_SIZE,
  });

  const getCars = useCallback(async (input?: CarInput) => {
    setLoading(true);
    const result = await getAllCars(input ?? {});
    if (result.response) {
      setAllCars(result.response.data);
      setListCars({
        page: 0,
        limit: PAGE_LIMIT_SIZE,
        total: result.response.data.length,
        cars: result.response.data,
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getCars();
  }, [getCars]);

  const carsList = useCallback(() => {
    if (listCars.cars.length > 0) {
      const start = listCars.page * PAGE_LIMIT_SIZE;
      const end = start + PAGE_LIMIT_SIZE;
      const list = listCars.cars.slice(start, end);
      return list.map((item, index) => {
        return <CarsCard key={index} {...item} />;
      });
    }
    return <></>;
  }, [listCars.cars, listCars.page]);

  return (
    <HomeContext.Provider
      value={{
        allCars,
        setCars: (values) => values && setListCars({ ...values }),
      }}
    >
      <div className="d-felx">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-3 col-12 p-0">
              <Filters />
            </div>
            <div className="col-lg-9 col-12 p-0">
              {!loading && carsList()}
              {!loading && listCars?.cars && listCars.cars.length > 0 && (
                <Pagination
                  currentPage={listCars?.page}
                  limit={PAGE_LIMIT_SIZE}
                  onChange={(page) => {
                    setListCars((pre) => ({ ...pre, page }));
                  }}
                  total={listCars.total}
                />
              )}
              {loading && <>loading ...!</>}
            </div>
          </div>
        </div>
      </div>
    </HomeContext.Provider>
  );
}
