"use client";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import Link from "next/link";

// app/IconExample.js

import Header from "./Components/Header";
import NewsCard from "./Components/NewsCard";
import ParkCard from "./Components/ParkCard";

const OpenStreetMap = ({ position }) => {
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
  const [userLocation, setUserLocation] = useState(null);
  const [data, setData] = useState(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Extract latitude and longitude from position.coords
          const { latitude, longitude } = position.coords;
          alert("oke");
          setUserLocation([latitude, longitude]);
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Error fetching data:", error));
        },

        (error) => console.error("Error getting user location:", error)
      );
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <>
      {data ? (
        <Header content={"Kamu Berada di "} city={data?.address?.city} />
      ) : null}
      {userLocation ? <OpenStreetMap position={userLocation} /> : null}
      <div className="section2 d-flex justify-content-between align-content-center mt-5">
        <p className="h3">
          <strong>
            Berita Lalu Lintas Hangat di <br />
            {data ? (
              <em className="text-primary">{data?.address?.city}</em>
            ) : null}
          </strong>
        </p>

        {data ? (
          <Link
            className="border text-center align-content-center m-0 text-secondary text-decoration-none"
            legacyBehavior
            href={{ pathname: "/news", query: { city: data?.address?.city } }}
          >
            <a>Lihat semua &gt;</a>
          </Link>
        ) : null}
      </div>
      <div className="row justify-content-around">
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
      </div>

      <div className="section2 d-flex justify-content-between align-content-center mt-5">
        <p className="h3">
          <strong>
            Area Parkir Terdekat di <br />
            {data ? (
              <em className="text-primary">{data?.address?.city}</em>
            ) : null}
          </strong>
        </p>

        {data ? (
          <Link
            className="border text-center align-content-center m-0 text-secondary text-decoration-none"
            legacyBehavior
            href={{ pathname: "/park", query: { city: data?.address?.city } }}
          >
            <a>Lihat semua &gt;</a>
          </Link>
        ) : null}
      </div>
      <div className="row justify-content-around">
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
              "https://www.shutterstock.com/shutterstock/photos/1835092750/display_1500/stock-photo-a-city-crossing-with-a-semaphore-red-and-orange-light-in-semaphore-traffic-control-and-regulation-1835092750.jpg",
            ]}
          />
        </div>
      </div>
    </>
  );
}
