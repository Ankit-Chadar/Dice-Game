import styled from "styled-components"

export const Button = styled.button`
padding: 10px 18px ;
color: white;
min-width:220px;
background:#000000;
border-radius:5px;
border: none;
font-size:16px;
border: 1px solid transparent;
transition: 0.3s background ease-in;
cursor: pointer;
&:hover{
    background-color: white;
    color:black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}
`;

export const OutLineButton = styled(Button)`
    background-color:white;
    color: black;
    border: 1px solid black;

&:hover{
    background-color: black;
    color:white;
    border: 1px solid transparent;
}
`