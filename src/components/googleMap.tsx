import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.067292267553!2d139.605230!3d35.524788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187a0fcf0f2c59%3A0xf2da94b7728f6c0d!2z5a6e5biC5rWs5rC05YyX5a2Q5Lqs5b6J5rS_!5e0!3m2!1sen!2sin!4v1626711702723"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
