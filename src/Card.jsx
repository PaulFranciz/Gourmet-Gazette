import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <>
      <section className="content">
        <div className="card">
          <img src={props.card.coverImg} alt="" className="cover-img" />
          <div className="card-info">
            <div className="location">
              <img src="./location-icon.png" alt="" className="location-icon" />
              <h3 className="country">{props.card.country}</h3>
              <a href="#" className="map-link">
                View on Google Maps
              </a>
            </div>
            <h1 className="travel-location">{props.card.location}</h1>
            <h2 className="date">{props.card.date}</h2>
            <p className="description">{props.card.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
