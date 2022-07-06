import React,{useState,useEffect,useRef} from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg"
import {Link,Route} from "react-router-dom"
export default function Header(){
    return(
        <Headers>
            <div className="Header_top">
                <div className="Header_top_container">
                    <div className="Headers_top_left">
                        <a>网站首页</a>
                        <a>NFT头条</a>
                    </div>
                    <div className="Headers_top_mid">
                        
                    </div>
                    <div className="Headers_top__right">
                        <a>2022年6月09日 </a>
                        <a> 星期四 </a>
                            <Link  to="/login">
                                登录
                            </Link>
                        <a> 注册 </a>
                    </div>
                </div>
            </div>
            <div className="Header_mid">
                <div className="Header_mid_container">
                    <div className="Header_mid_left">
                        <img className="Header_mid_left_img" src="https://uau.cc/wp-content/uploads/2022/02/cropped-logo-1.png" />
                    </div>
                    <div className="Header_mid_mid">
                        <input type="text" className="baiduinput" id="baidu" placeholder="百度一下，你就知道"/>
                        <input type="button" className="baidubtn" id="baidubtn" value="百度一下"/>
                    </div>
                    <div className="Header_mid_right">
                        <span>公众号</span>
                        <span>discord</span>
                        <span>微博</span>
                    </div>
                </div>
            </div>
            <div className="Header_bottom">
                <div className="Header_bottom_container">
                    <a>
                        常用工具
                    </a>
                    <a>
                        数字藏品
                    </a>
                    <a>
                        OpenSea
                    </a>
                    <a>
                        数据分析
                    </a>
                    <a>
                        Meta元宇宙
                    </a>
                    <a>
                        NFT游戏
                    </a>
                    <a>
                        NFT金融
                    </a>
                    <a>
                        基础设施
                    </a>
                    <a>
                        NFT服务商
                    </a>
                </div>
            </div>
        </Headers>
    )
}

const Headers = styled.div`
    width: 100%;
    height: 20vh;
    display: grid;
    grid-template-rows: 20% 55% 25%;
    color: white;
    font-size: 0.8rem;
    .Header_top{
        background-color: #3d4557;
        display: flex;
        justify-content: center;
        .Header_top_container{
            width: 80%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .Headers_top_left{
                a{
                    margin: 0 2rem;
                }
            }
            .Headers_top__right{
                a{
                    margin: 0 1rem;
                }
            }
        }
        
    }
    .Header_mid{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        color: black;
        .Header_mid_container{
            width: 80%;
            display: flex;
            flex-direction: row;
            div{
                margin: 0 1%;
            }
            .Header_mid_left{
                width: 29%;
                
                img{
                    height: 5rem;
                }
            }
            .Header_mid_mid{
                width: 34%;
                display: flex;
                align-items: center;
                .baiduinput{
                    width: 70%;
                    height: 60%;
                    padding: 0 15px;
                }
                .baidubtn{
                    width: 30%;
                    height: 60%;
                    background-color: #0099e5;
                    border: none;
                    color: white;
                    font-size: 1.2rem;
                }
            }
            .Header_mid_right{
                width: 34%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                span{
                    margin: 0 0 0 20%;
                }
            }
        }
        
    }
    .Header_bottom{
        display: flex;
        justify-content: center;
        background-color: white;
        color: black;
        
        .Header_bottom_container{
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #f0f0f0;
        }
    }
`