import { useEffect, useState } from "react";

const User = (props) => {
    const[data , setData] = useState({});
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch("https://api.github.com/users/somidianilkumar");
        const json = await data.json();
        console.log("Data fetched:", json);
        setData(json);
        const {name, location, created_at} = data;
      };
      fetchData();
        const interval = setInterval(() => {
            console.log("Namaste React Interval");
        }, 1000);
        return () => {
          console.log("Namaste React Interval is cleared");
          clearInterval(interval);};
    }, []);
  return (
    <div className="aboutus-card">
      <h1> Name: {data.name}</h1>
      <h2>Location: {data.location}</h2>
      <h3>Contact: {data.created_at}</h3>
    </div>
  );
};

export default User;