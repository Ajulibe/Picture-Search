import React from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

class NewPost extends React.Component {
  state = {
    title: "",
    body: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onSubmit(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      title: "",
      body: "",
    });
    console.log("state reset");
  };

  render() {
    return (
      <div>
        <Card
          style={{
            width: "60%",
            marginLeft: "20%",
            backgroundColor: "#F7F7F7",
            padding: "15px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                name="title"
                onChange={this.handleInputChange}
                value={this.state.title}
              />
            </div>
            <div className="form-group">
              <textarea
                cols="19"
                rows="2"
                placeholder="input search Item ....."
                className="form-control"
                name="body"
                onChange={this.handleInputChange}
                value={this.state.body}
              ></textarea>
            </div>
            <div className="form-group">
              <p>
                <button type="submit" className="btn btn-primary">
                  SEARCH
                </button>
              </p>

              {/* <button
                type="button"
                className="btn btn-warning"
                onClick={this.handleReset}
              >
                Reset
              </button> */}
            </div>
          </Form>
        </Card>
        <Card>
          <div id="fix"></div>
        </Card>
      </div>
    );
  }
}

export default NewPost;
