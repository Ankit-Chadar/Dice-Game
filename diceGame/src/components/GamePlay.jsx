import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import DiceRoll from "./DiceRoll";
import { useState } from "react";
import { Button, OutLineButton } from "../styled/Button";
import Rules from "./Rules";


const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectNum,setSelectNum]=useState();
  const [currDice,setcurrDice]=useState(1);
  const [error,setError]=useState();
  const [showRules , setShowRules]=useState(false);

  const generateRandomNumber=(min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
  }

  const resetScore=()=>{
    setScore(0);
  }

  const rollDice=()=>{
    if(!selectNum){
      setError("you have not selected number");
      return;
    }
    setError("");

    const randomeNum=generateRandomNumber(1,7);
    setcurrDice((prev)=>randomeNum);

    if(selectNum===randomeNum){
      setScore((prev)=>prev+randomeNum);
    }else{
      setScore((prev)=>prev-2);
    }
    setSelectNum(undefined);
  }

  return (
    <MainContainer>
     <div className="top_section"> 
      <TotalScore score={score}/>
      <NumberSelector 
      error={error}
      setError={setError}
      selectNum={selectNum}
      setSelectNum={setSelectNum}
      />
     </div>
     <DiceRoll  currDice={currDice}
     rollDice={rollDice} />

     <div className="btns">
      <OutLineButton onClick={resetScore}>Reset</OutLineButton>
      <Button onClick={()=>setShowRules((prev)=>!prev)}>
        {showRules ? "Hide" : "Show"}
        Rules</Button>
     </div>

    {showRules && <Rules /> }

    </MainContainer>
  )
}

export default GamePlay;

const MainContainer=styled.div`
  padding-top:70px;
  .top_section{
    display: flex;
    justify-content: space-evenly;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top:40px;
  }

`
