import React, { Component } from "react";
import Child from "./carte";


class Parent extends Component {
  state = {
    message: "",
  };

  nessrine= (value) => {
    this.setState({ message: value });
  };
  render() {
    return (
      <div className="elbou">
        <div>Hello {this.state.message}</div>
        

        <Child nessrine={this.nessrine} />

        
      </div>
    );
  }
}

export default Parent;