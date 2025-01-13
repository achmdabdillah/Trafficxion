"use client";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
// app/IconExample.js

import Header from "./Components/Header";
import NewsCard from "./Components/NewsCard";
import ParkCard from "./Components/ParkCard";

const OpenStreetMap = () => {
  const position = [-6.223553715945312, 106.8259215730152]; // Example coordinates

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default function Home() {
  return (
    <>
      <Header content={"Kamu Berada di"} />
      <OpenStreetMap />
      <div className="section2 border border-4 d-flex justify-content-between align-content-center mt-5">
        <p className="h3">
          <strong>
            Berita Lalu Lintas Hangat di <br />
            <em className="text-primary">Kuningan</em>
          </strong>
        </p>

        <a
          href="/news"
          className="border text-center align-content-center m-0 text-secondary text-decoration-none"
        >
          Lihat semua &gt;
        </a>
      </div>
      <div className="row justify-content-around">
        <div className="col-md-4 border">
          <NewsCard
            title="Pembangunan Flyover Baru di Cilandak, Jalan Raya Jakarta Selatan Alami Penutupan Sementara"
            time="2025-01-10 10:10:10"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
        <div className="col-md-4 border">
          <NewsCard
            title="Pembangunan Flyover Baru di Cilandak, Jalan Raya Jakarta Selatan Alami Penutupan Sementara"
            time="2025-01-10 10:10:10"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
        <div className="col-md-4 border">
          <NewsCard
            title="Pembangunan Flyover Baru di Cilandak, Jalan Raya Jakarta Selatan Alami Penutupan Sementara"
            time="2025-01-13 08:10:10"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
      </div>

      <div className="section2 border border-4 d-flex justify-content-between align-content-center mt-5">
        <p className="h3">
          <strong>
            Area Parkir Terdekat di <br />
            <em className="text-primary">Kuningan</em>
          </strong>
        </p>

        <a
          href="/park"
          className="border text-center align-content-center m-0 text-secondary text-decoration-none"
        >
          Lihat semua &gt;
        </a>
      </div>
      <div className="row justify-content-around">
        <div className="col-md-4 border">
          <ParkCard
            isFull={false}
            type="car"
            totalSpace="20"
            bookedSpace="10"
            title="Kuningan Park Spot"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
        <div className="col-md-4 border">
          <ParkCard
            isFull={false}
            totalSpace="20"
            bookedSpace="10"
            title="Kuningan Park Spot"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
        <div className="col-md-4 border">
          <ParkCard
            isFull={true}
            totalSpace="20"
            bookedSpace="20"
            title="Kuningan Park Spot"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg"
          />
        </div>
      </div>
    </>
  );
}
