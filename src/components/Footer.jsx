import React,{useState,useEffect,useRef} from "react";
import styled from "styled-components";

export default function Footer(){
    return(
        <Footers>
            <div className="footers_main">
                <div className="footers_main_first">
                    <div className="footers_main_first_title">
                        网站导航
                    </div>
                    <div className="footers_main_first_main">
                        <div>长用工具</div>
                        <div>长用工具</div>
                        <div>长用工具</div>
                        <div>长用工具</div>
                        <div>长用工具</div>
                        <div>长用工具</div>
                    </div>
                </div>
                <div className="footers_main_two">
                    <div className="footers_main_two_title">
                        关注交流（加群）
                    </div>
                    <div className="footers_main_two_main">
                        <div className="footers_main_two_main_left">
                            <img src="https://uau.cc/wp-content/uploads/2022/02/qrcode_for_gh_1598cb967009_258.jpg"/>
                            微信公众号
                        </div>
                        <div className="footers_main_two_main_right">
                        <img src="https://uau.cc/wp-content/uploads/2022/02/qrcode_for_gh_1598cb967009_258.jpg"/>
                            微信(NFT群)
                        </div>
                    </div>
                </div>
                <div className="footers_main_three">
                    <div className="footers_main_three_title">
                        关注交流（加群）
                    </div>
                    <div className="footers_main_three_main">
                        <div className="footers_main_three_main_title">
                            俄罗斯“FB”Vkontakte计划加入NFT和区块链技术领域
                        </div>
                        <div className="footers_main_three_main_title">
                            俄罗斯“FB”Vkontakte计划加入NFT和区块链技术领域
                        </div>
                    </div>
                </div>
                <div className="footers_main_four">
                    <div className="footers_main_four_title">
                        关于我们社区
                    </div>
                    <div className="footers_main_four_main">
                        <div className="footers_main_four_main_title">
                        ☑️欢迎大家使用BiTea☑️<br />
                        我们致力于打造全网内容最全的NFT中文交流社区。<br />
                        你可以在BiTea分享观点、输出优质内容、关注地板价、阅读研报。<br />
                        🌐BiTea官网：https://www.bitea.one/<br />
                        🕊官方推特：https://twitter.com/bitea_one/<br />
                        🗣DC群：https://discord.gg/S5PXPUrrQP<br />
                        </div>
                    </div>
                </div>
            </div>
        </Footers>
    )
}

const Footers = styled.div`
    width: 100%;
    _height: 20vh;
    background-color:#3d4557 ;
    position: relative;
   
    .footers_main{
        width: 80%;
        height: 100%;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        margin: 0 auto;
        .footers_main_first{
            display: flex;
            flex-direction: column;
            margin: 5px;
            color: white;
            .footers_main_first_title{
                font-size: 1.1rem;
            }
            .footers_main_first_main{
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                div{
                    width: 30%;
                }
            }
        }
        .footers_main_two{
            display: flex;
            flex-direction: column;
            margin: 5px;
            color: white;
            .footers_main_two_title{
                font-size: 1.1rem;
            }
            .footers_main_two_main{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                img{
                        width: 100%;
                }
                div{
                    margin:5px;
                    font-size: 0.8rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
        }
        .footers_main_three{
            display: flex;
            flex-direction: column;
            margin: 5px;
            color: white;
            .footers_main_three_title{
                font-size: 1.1rem;
            }
        }
        .footers_main_four{
            display: flex;
            flex-direction: column;
            margin: 5px;
            color: white;
            .footers_main_four_title{
                font-size: 1.1rem;
            }
        }
    }
`