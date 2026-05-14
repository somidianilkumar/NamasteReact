import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(" Child constructor is called");
    this.state = {
     data: {
        name: "Dummy Name",
       location: "Dummy Location",
       contact: "Dummy Contact",
       avatar_url: "Dummy Avatar URL",
      },
    };
  }
  async componentDidMount() {
    console.log(" Child ComponentDidMount is called");
    const data = await fetch("https://api.github.com/users/somidianilkumar");
    const json = await data.json();
    console.log("child componentDidMount data is fetched");
    this.interval = setInterval(() => {
      console.log("Namaste React Interval");
    }, 1000);
    this.setState({
      data:json,
    });

  }
  componentDidUpdate() {
    console.log(" Child ComponentDidUpdate is called");
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log(" Child ComponentWillUnmount is called");
  }
  render() {
    const { name, location, contact, avatar_url } = this.state.data;
    console.log("Child render is called");
    return (
      <div className="aboutus-card">
        <img  style={{width: "200px", height: "200px"}} src={avatar_url} alt="Avatar" className="avatar" />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
