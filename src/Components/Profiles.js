import React, { useState, useEffect } from "react";
import "./Profile.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import Card from "./Card";

function Profiles() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
        left: "50%",
        position: "absolute",
        textAlign: "center",
        top: "50%",
      }}
      spin
    />
  );
  if (loading) {
    return <Spin indicator={antIcon} />;
  }
  return (
    <div className="cards">
      {user.map((userObj, index) => (
        <Card
          key={userObj.id}
          name={userObj.name}
          address={userObj.address}
          email={userObj.email}
          username={userObj.username}
          phone={userObj.phone}
          website={userObj.website}
        />
      ))}
    </div>
  );
}

export default Profiles;
