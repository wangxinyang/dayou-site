import React from "react";

const GoogleMap = () => {
  const companyAddress = "神奈川県横浜市港北区新吉田東五丁目70番16号";
  const postalCode = "223-0058";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
    postalCode + " " + companyAddress
  )}&zoom=16&language=ja`;

  return (
    <div className="w-full h-[500px] relative">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
