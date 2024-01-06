import React from "react";
import UserContext from "../../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
      },
    };

    console.log("UserClass constructor");
  }

  async componentDidMount() {
    console.log("UserClass componentDidMount");
    // API CALL
    const data = await fetch("https://api.github.com/users/shashwatrakesh");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log("UserClass render");

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <div></div>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        <h2>
          Logged in User:
          <UserContext.Consumer>
            {({ loggedInuser }) => (
              <span className="font-bold"> {loggedInuser}</span>
            )}
          </UserContext.Consumer>
        </h2>
      </div>
    );
  }
}

export default UserClass;
