import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faMotorcycle,
  faClock,
  faBus,
  faLayerGroup,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function convertSeconds(totalSeconds) {
  if (totalSeconds < 0) {
    return "Invalid input"; // Handle negative input
  }

  const hours = Math.floor(totalSeconds / 3600); // Calculate hours
  const minutes = Math.floor((totalSeconds % 3600) / 60); // Calculate minutes

  // Build the output string based on hours and minutes
  let result = [];

  if (hours > 0) {
    result.push(`${hours} jam`); // Add hours
  }

  if (minutes > 0) {
    result.push(`${minutes} menit`); // Add minutes
  }

  return result.length > 0 ? result.join(" ") : "0 detik"; // Handle case with no hours or minutes
}

const openInNewTab = (url) => {
  // Open the URL in a new tab
  window.open(url, "_blank", "noopener,noreferrer");
};

const ParkCard = ({
  title,
  imageUrl,
  type,
  totalSpace,
  bookedSpace,
  isFull,
  openTime,
  closeTime,
  pricePerHour,
  publicTransportData,
  mapsUrl,
}) => {
  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to handle card click
  const handleCardClick = () => {
    setShowModal(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="card"
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        {imageUrl && (
          <Image
            src={imageUrl[0]}
            width="300"
            height="150"
            className="card-img-top"
            alt={title}
          />
        )}
        <div className="card-body">
          <div className="border d-flex align-content-between">
            <div className="justify-center my-auto">
              {type === "car" ? (
                <FontAwesomeIcon icon={faCar} />
              ) : (
                <FontAwesomeIcon icon={faMotorcycle} />
              )}
            </div>
            <p className={`my-auto ${isFull ? "text-danger" : "text-success"}`}>
              {bookedSpace} / {totalSpace}{" "}
              {isFull ? "Full Booked" : "Available"}
            </p>
          </div>
          <h5 className="card-title">{title}</h5>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="close ms-auto bg-white border-0"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <strong>
                  <span aria-hidden="true">&times;</span>
                </strong>
              </button>
            </div>

            <div className="modal-body">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  {imageUrl.map((item, index) => (
                    <div className="carousel-item active" key={index}>
                      <Image
                        src={item}
                        width="400"
                        height="400"
                        className="d-block w-100"
                        alt=""
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="row my-2">
                <div className="col-md-4 mb-3 d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon
                    className="border m-0 p-0"
                    icon={faLayerGroup}
                  />
                  <p
                    className={`border mb-0 ${
                      isFull ? "text-danger" : "text-success"
                    }`}
                  >
                    {bookedSpace} / {totalSpace}{" "}
                  </p>
                </div>
                <div className="col-md-4 mb-3 d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon className="border m-0 p-0" icon={faClock} />
                  <p className="mb-0">
                    {openTime} - {closeTime}{" "}
                  </p>
                </div>
                <div className="col-md-4 mb-3 d-flex justify-content-start align-items-center">
                  <strong>Rp </strong>
                  <p className="mb-0"> {pricePerHour} / Jam</p>
                </div>
                <div className="col-md-4 mb-3 d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon className="border m-0 p-0" icon={faBus} />
                  <p className="mb-0">
                    {console.log("$$", publicTransportData)}
                    {convertSeconds(publicTransportData.time_seconds)} ke{" "}
                    {publicTransportData.name}
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => openInNewTab(mapsUrl)}
              >
                <FontAwesomeIcon
                  className="m-0 p-0 me-2"
                  icon={faLocationDot}
                />
                Arahkan Saya
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default ParkCard;
