import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: gray;
  flex-direction: column;
  padding: 50px 0 ;

  table td {
    padding: 10px;
  }
`;

export const TableBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Img = styled.img`
width: 45px;
height: 45px;
border-radius: 50%;
object-fit: cover;
`

export const Input = styled.input`
border: none;
outline: none;
height: 30px;
width: 48.4%;
border-radius: 10px;
padding: 10px 10px;
color: red; 
:focus{
  border: 2px solid black;
}
`

export const Button = styled.button`
   cursor: pointer;
    background-color: gray;
    padding: 5px 15px;
border-radius: 10px;
transition: all 0.4s ease;
:hover{
  border: 4px solid ${({rang})=> rang ? rang :"black"};
}
`
export const SearchMovies = styled.div`
width: 50%;
margin: 20px 0;
`
export const AddInputWrapper = styled.div`
`

export const InputWrapper = styled.div`
display: flex;
gap: 50px;
margin: 20px 0;
`