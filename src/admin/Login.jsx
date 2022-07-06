import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { UserOutlined } from '@ant-design/icons';
import { Button, Input,message  } from 'antd';
import { useNavigate } from 'react-router-dom'
import $http from '../https/request'
import img from "../assets/background-login.png"
function Login(){
    const history = useNavigate()
    const [postData,setValues]=useState({
        username:"",
        password:"",
    })
    const change1 = (e) => {
        console.log( e.target.name);
        console.log( e.target.value);
        setValues({...postData,[e.target.name]:e.target.value})
    };
    const change3 = (e) => {
        console.log( postData);
        $http.post("/my/user/login",postData).then(res=>{
            console.log(res)
            if(res.data.code == 200){
                message.success(res.data.msg)
                history({pathname: '/admin/index'})
                localStorage.setItem("token",res.data.token)
            }else{
                message.error(res.data.msg)
            }
        })
    };
    const change4 = (e) => {
        console.log( postData);
        $http.get("/api/nftitem/list").then(res=>{
            console.log(res)
        })
    };
    
    return(
        <Logins>
            <div className="Logins_main">
                {/* <Button type="primary">Button</Button> */}
                <div className="Logins_main_top">
                    管理员登录
                </div>
                <div className="Logins_main_body">
                    <div>
                        <Input onChange={change1} name="username" className="Logins_main_input" prefix={<UserOutlined />} placeholder="用户名"/>
                    </div>
                    <div>
                        <Input onChange={change1} name="password" className="Logins_main_input" prefix={<UserOutlined />} placeholder="密码"/>
                    </div>
                    
                </div>
                <div className="Logins_main_bottom">
                    <Button onClick={change3} type="primary">登录</Button>
                </div>
                
            </div>
        </Logins>
    )
}
const Logins = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${img});
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .Logins_main{
        width: 15vw;
        height: 45vh;
        background-color: rgba(0,0,0,0.5);
        box-shadow: 10px  10px 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .Logins_main_top{
            width: 80%;
            height: 10%;
            color: white;
            font-size: 1.1rem;
        }
        .Logins_main_body{
            width: 80%;
            height: 30%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            margin-top: 5%;
            .Logins_main_input{
                width: 100%;
            }
        }
    }
`

export default Login;