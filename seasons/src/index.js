import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     //    success callback
//     (position) => console.log(position),
//     // fail callback
//     (err) => console.log(err)
//   );
//   return <div>Latitude</div>;
// };

class App extends React.Component {
  // very first function to be called- which makes it a good place to initalise state
  constructor(props) {
    super(props); //super is referencing the parent.Component and using its constructor settings
    this.state = { lat: null, errorMessage: "" }; //    THIS IS THE ONLY TIME YOU DIRECT ASSIGNMENT TO STATE OBJECT- ID WHEN YOU INITATE THE STATE     //state object  - assign key value pair "lat" to it with the value of null, which is used for number when you don't know what it is yet. But will know once got position. Then assign result of that {lat:null} to this.state property
    // once state object created and assigned to this.state we can freely reference this state and the properties inside, any function inside the app component
  }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      // setState to update state object- imported from React.Component
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentWillMount() {
    console.log("My component did render to screen");
  }
  componentDidUpdate() {
    console.log("my component was just updated- it rerendered");
  }

  //   WE HAVE TO DEFINE RENDER
  render() {
    // never initate calls or requests in the render method as it is called in the time
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading...</div>;
  }
}
//  this is known as conditional rendering

// when we make a class we are creating new class which has 1 method assigned to it-render. in order to use class with react it expects has many other methods attached to it.
// we 'borrow' these methods from React.Component. It allows us to pull functionality from React.component class into ours.

// State is JS object that contains data relevant to a component
// Updating state on a component causes the component to instantly rerender
// state must be initailized when a component is created- in order to do this you have to define the constructor function
// state can only be updated using the function 'setState'

// IF YOU WANT STATE TO RERENDER YOU MUST USE useState

ReactDOM.render(<App />, document.querySelector("#root"));
