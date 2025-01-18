import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import ParkCard from "../Components/ParkCard";

// components/TabsComponent.js

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("car");

  return (
    <div className="my-2">
      <ul className="nav nav-tabs mb-3 justify-content-center">
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeTab === "car"
                ? "active bg-primary text-white"
                : "bg-white text-primary"
            }`}
            onClick={() => setActiveTab("car")}
          >
            Car
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeTab === "motor"
                ? "active bg-primary text-white"
                : "bg-white text-primary"
            }`}
            onClick={() => setActiveTab("motor")}
          >
            Motor
          </a>
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === "car" && (
          <div className="tab-pane fade show active">
            <h2>Car Content</h2>
            <p>This is the content for the Car tab.</p>
          </div>
        )}
        {activeTab === "motor" && (
          <div className="tab-pane fade show active">
            <h2>Motor Content</h2>
            <p>This is the content for the Motor tab.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const page = async ({ searchParams }) => {
  const { city } = await searchParams;
  return (
    <>
      <Header content={"Area Parkir di"} city={city} />

      <TabsComponent />
      <div className="row justify-content-start">
        <div className="col-md-4">
          <ParkCard
            isFull={false}
            type="car"
            totalSpace="20"
            bookedSpace="10"
            title="Kuningan Park Spot"
            openTime="07.00"
            pricePerHour="5000"
            closeTime="22.00"
            publicTransportData={{ name: "Transjakarta", time: 420 }}
            mapsUrl="https://maps.app.goo.gl/PbRzyNyfCN98BBNU8"
            imageUrl={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSCJWYLxYetzZXOGhh0K6cG4AT_ZPKZHwWg&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FGH9XM6WKyaBmKHT8zUCYa7VzHkL758qlw&s",
              "https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg",
            ]}
          />
        </div>
        <div className="col-md-4">
          <ParkCard
            isFull={false}
            totalSpace="20"
            bookedSpace="10"
            title="Kuningan Park Spot"
            openTime="07.00"
            pricePerHour="5000"
            closeTime="22.00"
            publicTransportData={{ name: "Transjakarta", time: 420 }}
            mapsUrl="https://maps.app.goo.gl/PbRzyNyfCN98BBNU8"
            imageUrl={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSCJWYLxYetzZXOGhh0K6cG4AT_ZPKZHwWg&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FGH9XM6WKyaBmKHT8zUCYa7VzHkL758qlw&s",
              "https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg",
            ]}
          />
        </div>
        <div className="col-md-4">
          <ParkCard
            isFull={true}
            totalSpace="20"
            bookedSpace="20"
            title="Kuningan Park Spot"
            openTime="07.00"
            pricePerHour="5000"
            closeTime="22.00"
            publicTransportData={{ name: "Transjakarta", time: 420 }}
            mapsUrl="https://maps.app.goo.gl/PbRzyNyfCN98BBNU8"
            imageUrl={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSCJWYLxYetzZXOGhh0K6cG4AT_ZPKZHwWg&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FGH9XM6WKyaBmKHT8zUCYa7VzHkL758qlw&s",
              "https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg",
            ]}
          />
        </div>
        <div className="col-md-4">
          <ParkCard
            isFull={true}
            totalSpace="20"
            bookedSpace="20"
            title="Kuningan Park Spot"
            openTime="07.00"
            pricePerHour="5000"
            closeTime="22.00"
            publicTransportData={{ name: "Transjakarta", time: 420 }}
            mapsUrl="https://maps.app.goo.gl/PbRzyNyfCN98BBNU8"
            imageUrl={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSCJWYLxYetzZXOGhh0K6cG4AT_ZPKZHwWg&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FGH9XM6WKyaBmKHT8zUCYa7VzHkL758qlw&s",
              "https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg",
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default page;
