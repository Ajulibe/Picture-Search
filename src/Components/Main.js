import React, { Component } from "react";
import FormPics from "./FormPics";
import unsplash from "./axios api/unsplash";
import ImageList from "./ImageList";

const testing = {
  name: "akachi",
};

export default class Main extends Component {
  state = { images: [] };

  onSearchSubnit = async (term) => {
    console.log(term);
    //using axios
    const Response = await unsplash.get("/search/photos", {
      params: { query: term.body },
    });

    const images = Response.data.results;
    this.setState({ images: images });

    // document.getElementById("fix").innerHTML = this.state.images;
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <FormPics onSubmit={this.onSearchSubnit} testing={testing} />
        <ImageList images={this.state.images} />
        <p>Found: {this.state.images.length} images</p>
      </div>
    );
  }
}
