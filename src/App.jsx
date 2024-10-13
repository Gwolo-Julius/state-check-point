import React, { Component } from "react";
import "./App.css";
import state_juli from "./assets/state-juli.jpg"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Gwolo Julius",
        bio: "A software engineer with a passion for web development.",
        imgSrc: "./assets/state-juli.jpg",
        profession: "React JS Certified",
      },
      shows: false,
      mountedTime: 0,
      intervalId: null,
    };
  }

  // Lifecycle method: when component is mounted
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000); // increments time by 1 second

    this.setState({ intervalId });
  }

  // Lifecycle method: when component is about to unmount
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  // Function to toggle the show state
  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;
    const { shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile">
            <img src={state_juli} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <h3>{profession}</h3>
          </div>
        )}

        <div className="timer">
          <h4>Time since component was mounted: {mountedTime} seconds</h4>
        </div>
      </div>
    );
  }
}

export default App;
