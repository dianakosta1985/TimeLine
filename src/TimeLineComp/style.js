import { Box, Paper } from "@mui/material";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
    display: flex;
    justify-content: flex-start;
    position:relative;
    height: 90vh;
    width: 62.5rem;
    border: 1px solid black;
    //background-image: url(/icons/background.png);
    margin: 20px 0  0 100px;
`;

export const StyledBox = styled(Box)`
    position: absolute;
    background-color: ${props => props.randomColor || "black"} ;
    width: ${props => props.width};
    height: 30px;
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    border-radius: 10px;
`;
