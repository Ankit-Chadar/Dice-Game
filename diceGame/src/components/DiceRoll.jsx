import { useState } from "react";
import styled from "styled-components";

const DiceRoll = ({currDice,rollDice}) => {

  return (
    <div>  
     <DiceContainer>
        <div className="dice" onClick={rollDice}>
         <img src={`/images/dice/dice_${currDice}.png`} alt="Dice 1" />
        </div>  
        <p>Click on Dice to roll</p>
      </DiceContainer>
 </div>     
  )
}

export default DiceRoll; 

const DiceContainer=styled.div`
    margin-top:48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size:24px;
    }


    .dice{
        cursor: pointer;
    }
    
`;
