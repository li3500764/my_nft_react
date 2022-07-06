import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Container from "../components/Container";

function Index(){
    
    return(
        <MainIndex>
            <Header/>
            <Container />
        </MainIndex>
    )
}
const MainIndex = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f4f5f6;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
`

export default Index;