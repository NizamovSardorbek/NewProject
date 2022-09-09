import React, { useState } from "react";
import {
  AddInputWrapper,
  AddWrapper,
  Button,
  Container,
  Img,
  Input,
  InputWrapper,
  SearchMovies,
  TableBtnWrapper,
  Wrapper,
} from "./CrudStyle";
import Dates from "./data";
const FuncTable = () => {
  const [movies, setMovies] = useState(Dates);
  const [openinput, setOpenInput] = useState(false);
  const [file, setFile] = useState();
  const [nameValue, setNameValue] = useState("");
  const [searchVal, SetsearchVal] = useState("");
  const [select, setSelect] = useState("");
  const [newInputValue, setNewInputValue] = useState("");
  const [newImgValue, setNewImgValue] = useState("");
  const AddImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const AddNewMovie = () => {
    setOpenInput(!openinput);
  };
  const DeleteMovie = (valueId) => {
    let NewMovie = movies.filter((value) => value.id !== valueId);
    setMovies(NewMovie);
  };
  const AddMovie = () => {
    setMovies([
      ...movies,
      { id: movies.length + 1, url: file, name: nameValue },
    ]);
    setNameValue("");
    setFile();
  };
  const EditMovie = (value) => {
    setSelect(value);
  };
  const CancelEdit = () => {
    setSelect(null);
  };
  const SaveMovie = () => {
    let savedMovies = movies.map((value) =>
      value.id === select?.id
        ? {
            ...value,
            url: newImgValue <= 0 ? select.url : newImgValue,
            name: newInputValue <= 0 ? select.name : newInputValue,
          }
        : value
    );
    setMovies(savedMovies);
    setSelect(null);
  };
  return (
    <Wrapper>
      <Container>
        {openinput ? (
          <Button onClick={AddMovie} rang="green">
            AddMovies ✔️
          </Button>
        ) : (
          <Button onClick={AddNewMovie} rang="green">
            NewMovies ✔️
          </Button>
        )}

        <AddInputWrapper>
          {openinput ? (
            <InputWrapper>
              <Input
                alt="Rasm Tanlamadiz"
                filename={file}
                type="file"
                placeholder="AddImage"
                onChange={AddImage}
              />
              <Input
                value={nameValue}
                onChange={({ target }) => setNameValue(target.value)}
                placeholder="AddName"
              />
            </InputWrapper>
          ) : (
            ""
          )}
        </AddInputWrapper>
        <SearchMovies>
          {openinput ? (
            ""
          ) : (
            <Input
              onChange={({ target }) => SetsearchVal(target.value)}
              placeholder="🔍 Search Movies"
              type="text"
            />
          )}
        </SearchMovies>
        <table border={1} width="50%">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Image</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {movies.map(
              (value, index) =>
                value.name.toLowerCase().includes(searchVal.toLowerCase()) && (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {select?.id === value.id ? (
                        <Input
                          type="file"
                          placeholder="Add Image..."
                          filename={file}
                          onChange={(e) =>
                            setNewImgValue(
                              URL.createObjectURL(e.target.files[0])
                            )
                          }
                        />
                      ) : (
                        <Img src={value.url} />
                      )}
                    </td>
                    <td>
                      {select?.id === value.id ? (
                        <Input
                          defaultValue={value.name}
                          onChange={({ target }) =>
                            setNewInputValue(target.value)
                          }
                        />
                      ) : (
                        value.name
                      )}
                    </td>

                    <td>
                      {" "}
                      {select?.id === value.id ? (
                        <TableBtnWrapper>
                          <Button onClick={CancelEdit} rang="red">
                            Cancel ❌
                          </Button>
                          <Button onClick={SaveMovie} rang="yellow">
                            Save ✏️
                          </Button>
                        </TableBtnWrapper>
                      ) : (
                        <TableBtnWrapper>
                          <Button
                            onClick={() => DeleteMovie(value.id)}
                            rang="red"
                          >
                            Delete ❌
                          </Button>
                          <Button
                            onClick={() => EditMovie(value)}
                            rang="yellow"
                          >
                            Edit item ✏️
                          </Button>
                        </TableBtnWrapper>
                      )}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </Container>
    </Wrapper>
  );
};

export default FuncTable;
