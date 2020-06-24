import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";

import FoodBox from "./compoments/FoodBox";
import AddFoodButton from "./compoments/AddFoodButton";

class App extends Component {
  state = {
    foods,
  };

  addFoodButtonHandler = (food) => {
    const newFoodsList = [...this.state.foods];
    newFoodsList.push(food);
    this.setState({
      foods: newFoodsList,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">IronNutrition</h1>
        {this.state.foods.map((food) => {
          return <FoodBox {...food} />;
        })}
        <button onClick={this.clickHandler}>Add new food</button>
        <AddFoodButton addFoodButton={this.addFoodButtonHandler} />
      </div>
    );
  }
}

export default App;
