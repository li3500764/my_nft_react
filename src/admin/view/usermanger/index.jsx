import React,{useState,useEffect} from "react";
import styled from "styled-components";
import $http from '../../../https/request'
  
const UserManger = (data) => {
    let test=[]
    useEffect(()=>{
        console.log("进来了！")
        getMenu()
    })
    const getMenu=function(){
      $http.get("/api/nftitem/list").then(res=>{
          console.log(res)
          test=res.data
      })
    }
    return (
        <MainIndex>
           <div> this is usermanger</div>
        </MainIndex>
      
    );
  };
const MainIndex = styled.div`
    width: 100vw;
    height: 100vh;
    
`

export default UserManger;