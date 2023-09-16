import { CarsCard } from "@/components/cars";

export default function Home() {
  return (
    <div className="d-felx">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 p-0"></div>
          <div className="col-lg-9 col-12 p-0">
            <CarsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
