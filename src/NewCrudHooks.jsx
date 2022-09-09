import React, { useState } from "react";
import { AddWrapper, Containering, Wrappering } from "./NewCrudStyle";
import Dating from "./Dating";
const NewCrudHooks = () => {
  const [movies, setMovies] = useState(Dating);
  const [addInputValue1, setAddInputValue1] = useState("");
  const [addInputValue2, setAddInputValue2] = useState("");
  const [addInputValue3, setAddInputValue3] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [select, setSelect] = useState("");
  const [newSelect, SetNewSelect] = useState("");
  console.log("hello word");
  const AddUser = () => {
    setMovies(
      addInputValue1.length >= 1 &&
        addInputValue2.length > 1 &&
        addInputValue3.length >= 1
        ? [
            ...movies,
            {
              id: movies.length + 1,
              name: addInputValue1,
              surname: addInputValue2,
              status: addInputValue3,
            },
          ]
        : movies
    );
    setAddInputValue1("");
    setAddInputValue2("");
    setAddInputValue3("");
  };
  const DeleteUser = (valueId) => {
    let res = movies.filter((value) => value.id !== valueId);
    setMovies(res);
  };
  const EditUser = (ValueID) => {
    setSelect(ValueID);
    console.log(ValueID);
  };
  const CancelUser = () => {
    setSelect("");
  };
  const SaveUser = () => {
    let str = movies.map((value) =>
      value.id === select.id
        ? {
            ...value,
            name: newSelect,
          }
        : value
    );
    setMovies(str);
    setSelect("");
  };
  return (
    <Wrappering>
      <Containering>
        <AddWrapper>
          <input
            placeholder="Check Name"
            value={addInputValue1}
            onChange={(e) => setAddInputValue1(e.target.value)}
            type="text"
          />
          <input
            value={addInputValue2}
            onChange={(e) => setAddInputValue2(e.target.value)}
            type="text"
            placeholder=" Check Surname"
          />
          <input
            value={addInputValue3}
            onChange={(e) => setAddInputValue3(e.target.value)}
            type="text"
            placeholder=" Check Status"
          />
          <button onClick={AddUser}>Add</button>
        </AddWrapper>
        <div>
          <input
            placeholder="Searching..."
            type="text"
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>
        <table border={1} width="50%">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(
              (value, index) =>
                value.name.toLowerCase().includes(searchVal.toLowerCase()) && (
                  <tr key={index}>
                    <td>{value.id + 1}</td>
                    <td>
                      {select.id === value.id ? (
                        <input
                          onChange={(e) => SetNewSelect(e.target.value)}
                          defaultValue={value.name}
                          type="text"
                        />
                      ) : (
                        value.name
                      )}
                    </td>
                    <td>{value.surname}</td>
                    <td>{value.status}</td>
                    {select.id === value.id ? (
                      <div>
                        <button onClick={CancelUser}>Cancel</button>
                        <button onClick={SaveUser}>Save</button>
                      </div>
                    ) : (
                      <div>
                        <button onClick={() => DeleteUser(value.id)}>
                          Delete
                        </button>
                        <button onClick={() => EditUser(value)}>Edit</button>
                      </div>
                    )}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </Containering>
    </Wrappering>
  );
};

export default NewCrudHooks;
