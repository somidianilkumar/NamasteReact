import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor is called");
    }

    componentDidMount() {
    console.log("Parent ComponentDidMount is called");

  }
  componentDidUpdate() {
    console.log("Parent ComponentDidUpdate is called");
  }
    render() {
        console.log("Parent render is called");
        return (
            <div style ={{backgroundColor: "#f0f0f0"}}>
                <h1>About Us</h1>
                <p>This is Namaste React course. We are learning React from scratch🚀🚀.</p>
                <User />
        </div>
    )
    }
}
export default About;