import React,{useState,useEffect,useRef} from "react";
import styled from "styled-components";
import ContainerCy from "./ContainerCy";
import Footer from "../components/Footer";

export default function Container(){
    return(
        <Containers>
            <div className="Containers_main">
                <ContainerCy/>
                <ContainerCy/>
                <ContainerCy/>
                <ContainerCy/>
                <ContainerCy/>
            </div>
            <Footer />
        </Containers>
        
    )
}

const Containers = styled.div`
    width: 100%;
    height: 80vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    .Containers_main{
        width: 80%;
        display: flex;
        flex-direction: column;
        
    }
`