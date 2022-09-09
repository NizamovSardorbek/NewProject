import React from "react";
import { useState, useEffect } from "react";

const Fetch = () => {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState({});
  const getUser = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users/${id ? `${id}` : ""}`
    ).then((res) => res.json());
  };
  useEffect(() => {
    getUser().then((res) => setStudents(res));
  }, []);

  const getInfo = (id) => {
    getUser(id).then((res) => {
      console.log(res);
      setSelected(res);
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        {students?.map((value) => (
          <h1 key={value.id}>
            Name : {value.id}- {value.name}{" "}
            <button onClick={() => getInfo(value.id)}>GetInfo</button>
          </h1>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <div key={selected?.id}>
          <h1>Name : {selected?.name} </h1>
          <h2>UserName : {selected?.username} </h2>
          <h3>Email: {selected?.email} </h3>
        </div>
      </div>
    </div>
  );
};

export default Fetch;
