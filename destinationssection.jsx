import React from 'react';

function DestinationsSection() {
  return (
    <section id="destinations" className="destinations">
      <h2 className="destinations-title">Popular Destinations</h2>
      <div className="destination">
        <img src="destination1.jpg" alt="Destination 1" className="destination-image" />
        <p className="destination-description">Description of Destination 1</p>
      </div>
      <div className="destination">
        <img src="destination2.jpg" alt="Destination 2" className="destination-image" />
        <p className="destination-description">Description of Destination 2</p>
      </div>
      {/* Add more destinations */}
    </section>
  );
}

export default DestinationsSection;
