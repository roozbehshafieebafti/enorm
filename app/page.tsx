"use client";
import { CarInput, getAllCars } from "@/apis/cars";
import { CarType } from "@/apis/cars/types";
import { CarsCard } from "@/components/cars";
import { Filters } from "@/containers/home/filters";
import { PresentedCarType, HomeContext } from "@/containers/home/home-context";
import { PAGE_LIMIT_SIZE } from "@/utils/constants";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState<CarType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [listCars, setListCars] = useState<PresentedCarType>();

  const getCars = useCallback(async (input?: CarInput) => {
    setLoading(true);
    const result = await getAllCars(input ?? {});
    if (result.response) {
      setAllCars(result.response.data);
      setListCars({
        page: 1,
        limit: PAGE_LIMIT_SIZE,
        cars: result.response.data.slice(0, PAGE_LIMIT_SIZE),
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getCars();
  }, [getCars]);

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
              {!loading &&
                listCars?.cars?.map((item, index) => {
                  return <CarsCard key={index} {...item} />;
                })}
              {loading && <>loading ...!</>}
            </div>
          </div>
        </div>
      </div>
    </HomeContext.Provider>
  );
}
