import React, { Component } from "react";

class AddFoodButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: " ",
      calories: " ",
      image: " ",
    };
  }

  //handleNameInput = (event) => {
  //  this.setState({
  //    title: event.target.value,
  //  });
  //};
  //
  //handleCaloriesInput = (event) => {
  //  this.setState({
  //    calories: event.target.value,
  //  });
  //};
  //
  //handleImageInput = (event) => {
  //  this.setState({
  //    image: event.target.value,
  //  });
  //};

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFoodButton(this.state);
    this.setState({
      name: "",
      calories: "",
      image: false,
    });
  };

  handleChange(event) {
    let { name, value } = event.target;
    if (name === "image" && value === "on") {
      value = true;
    }
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
        />

        <label>Number of calories:</label>
        <input
          type="number"
          name="calories"
          value={this.state.calories}
          onChange={(e) => this.handleChange(e)}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          alt="image"
          value={this.state.image}
          onChange={(e) => this.handleChange(e)}
        />

        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}

export default AddFoodButton;
