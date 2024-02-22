import React from 'react';
import '../Styles/CardDetail.css';

export default function CarDetail() {
  return (
    <div className="card-body">
      <div className="card-container">
        <div className="card-imgBx">
          <img
            className="card-image"
            src="https://www.royaldrive.in/_next/image?url=https%3A%2F%2Froyaldrive-prod.s3.ap-south-1.amazonaws.com%2F29029c904f2b089709c6456af1d46688.jpg&w=640&q=75"
            alt="Shoe"
          />
        </div>
        <div className="card-details">
          <h3 className="card-brand-name">
            GLA  <br />
            <span className="card-brand">Mercedes Benz</span>
          </h3>
          <h4 className="card-car-detail">Car Details</h4>
          <ul className="card-size">
            <li className="card-set">36</li>
            <li className="card-set">38</li>
            <li className="card-set">40</li>
          </ul>
          <ul className="card-size">
            <li className="card-set">36</li>
            <li className="card-set">38</li>
            <li className="card-set">40</li>
          </ul>
          <div className="card-group">
            <h2 className="card-price-symbol">
              <sup className="card-price-rupee">₹</sup>19999
            </h2>
            <a className="card-hyper" href="#">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
