import { CarsCard } from "@/components/cars";
import { Filters } from "@/components/filters";

export default function Home() {
  return (
    <div className="d-felx">
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-3 col-12 p-0">
            <Filters />
          </div>
          <div className="col-lg-9 col-12 p-0">
            <CarsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
