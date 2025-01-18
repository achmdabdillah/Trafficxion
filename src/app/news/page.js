import React from "react";
import Header from "../Components/Header";
import NewsCard from "../Components/NewsCard";

const page = async ({ searchParams }) => {
  const { city } = await searchParams;
  return (
    <>
      <Header content={"Berita di"} city={city} />
      <div className="section2 w-50 mt-5">
        <p className="h3">
          <strong>Apa yang Sedang Terjadi di Sekitar Mu</strong>
        </p>
      </div>

      <div className="row justify-justify-content-start mt-5">
        <div className="col-md-4">
          <NewsCard
            title="Pembangunan Flyover Baru di Cilandak, Jalan Raya Jakarta Selatan Alami Penutupan Sementara"
            time="2025-01-10 10:10:10"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
        <div className="col-md-4">
          <NewsCard
            title="Pembangunan Flyover Baru di Cilandak, Jalan Raya Jakarta Selatan Alami Penutupan Sementara"
            time="2025-01-10 10:10:10"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
        <div className="col-md-4">
          <NewsCard
            title="Pembangunan Flyover Baru di Cilandak, Jalan Raya Jakarta Selatan Alami Penutupan Sementara"
            time="2025-01-13 08:10:10"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
        <div className="col-md-4">
          <NewsCard
            title="Pembangunan Flyover Baru di Cilandak, Jalan Raya Jakarta Selatan Alami Penutupan Sementara"
            time="2025-01-13 08:10:10"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
        <div className="col-md-4">
          <NewsCard
            title="Pembangunan Flyover Baru di Cilandak, Jalan Raya Jakarta Selatan Alami Penutupan Sementara"
            time="2025-01-13 08:10:10"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
        <div className="col-md-4">
          <NewsCard
            title="Pembangunan Flyover Baru di Cilandak, Jalan Raya Jakarta Selatan Alami Penutupan Sementara"
            time="2025-01-13 08:10:10"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default page;
