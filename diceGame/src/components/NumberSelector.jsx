import { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({setError,error,selectNum,setSelectNum}) => {
const arrayNumber=[1,2,3,4,5,6];

 const numberSelectorHandler=(value)=>{
    setSelectNum(value);
    setError("");
 }

  return (
    <NumSelectorContainer>

      <p className="error">{error}</p>
      <div className="flex">
        {
          arrayNumber.map((value,i)=><Box
          isSelected={value===selectNum}
          onClick={()=>numberSelectorHandler(value)}
          key={i}>{value}</Box>)
        }
      
      </div>
      <p>Select Number</p>
    </NumSelectorContainer>
  )
}

export default NumberSelector;
const NumSelectorContainer=styled.div`
  display: flex;
  flex-direction:column;
  align-items: end;
  .flex{
    display: flex;
    gap:24px
  }
  .error{
    color: red;
    font-weight:500;
  }
  

`
const Box = styled.div`
  
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items:center;
  font-size:24px;
  font-weight:700;
  background-color: ${(props)=>(props.isSelected ? "black" : "white")};
  color: ${(props)=>(!props.isSelected ? "black" : "white")};
`