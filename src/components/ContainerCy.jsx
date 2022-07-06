import React,{useState,useEffect,useRef} from "react";
import styled from "styled-components";

export default function ContainerCy(){
    return(
        <ContainerCys>
                <div className="ContainerCys_main_top">
                    <span>常用工具</span>
                </div>
                <div className="ContainerCys_main_bottom">
                    
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((item,index)=>{
                        return (
                            <div key={index} className="ContainerCys_main_items">
                                <img src="https://uau.cc/wp-content/uploads/2020/03/itemlogo-50.png" />
                                <span>MetaMask</span>
                            </div>
                        )
                    })}
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((item,index)=>{
                        return (
                            <div key={index} className="ContainerCys_main_itemstest">
                            </div>
                        )
                    })}
                    
                </div>
                
        </ContainerCys>
    )
}

const ContainerCys = styled.div`
    width: 100%;
    _height: 20vh;
    background-color: white;
    border-radius: 10px;
    margin: 1rem 0;
    .ContainerCys_main_top{
            height: 5vh;
            display: flex;
            align-items: center;
            span{
                margin: 0 1rem;
                font-weight: bold;
                font-size: 1.1rem;
            }
    }
    .ContainerCys_main_bottom{
            _height: 25vh;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .ContainerCys_main_items{
                width: 14%;
                height: 35%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px 0;
                margin: 5px;
                cursor: pointer;
                img{
                    width: 20%;
                }
                span{
                    margin-left: 0.5rem;
                }

            }
            .ContainerCys_main_items:hover{
                width: 14%;
                height: 35%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #eaf4f8;
                cursor: pointer;
                border-radius: 10px ;
                img{
                    width: 20%;
                }

            }
            .ContainerCys_main_itemstest{
                wIDth: 14%;
                height:0px;
                margin: 0px;
            }
            
        }

`