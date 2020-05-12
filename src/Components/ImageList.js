import React from "react";
import "./ImageStyle.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const show = images.map((image) => {
    return (
      <ImageCard key={image.id} style={{ marginTop: "15px" }} image={image} />
    );
  });
  return (
    <div
      className="image-list"
      style={{ width: "60%", marginLeft: "20%", marginTop: "8%" }}
    >
      {show}
    </div>
  );
};
export default ImageList;
