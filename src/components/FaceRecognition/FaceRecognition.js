import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="center">
      <div className="absolute pb4">
        <img
          className="bn br3 shadow-2"
          id="inputimage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        {boxes.map(box => (
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
