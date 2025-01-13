import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const ParkCard = ({
  title,
  imageUrl,
  type,
  totalSpace,
  bookedSpace,
  isFull,
}) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-img-top" />}
      <div className="card-body">
        <div className="border d-flex align-content-between">
          <div className="justify-center border my-auto">
            {type == "car" ? (
              <FontAwesomeIcon icon={faCar} />
            ) : (
              <FontAwesomeIcon icon={faMotorcycle} />
            )}
          </div>
          <p className={`my-auto ${isFull ? "text-danger" : "text-success"}`}>
            {bookedSpace} / {totalSpace} {isFull ? "Full Booked" : "Available"}
          </p>
        </div>
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default ParkCard;
