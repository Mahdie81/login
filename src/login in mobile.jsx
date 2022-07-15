import React from 'react'
import styled from "styled-components";
import './login.css'
import photo from './img/Group 25.png'
import photo2 from './img/Group 15.png'
import photo3 from './img/Untitled-1 3.png'
import sun from './img/cropped-123 1.png'


function Login_mob() {

    return (
        <$grid>

            <div className={"logo"}>
            <img src={sun} alt={'sun'} className={"sun sun-animat"} />
            <img src={sun} alt={'sun'} className={"sun"} />
                <h1>راهبران فردا</h1>
            </div>
            <$rightcolum>
                <form>
                    <h2>ورود</h2>
                    <input type={"text"} className={'email'} placeholder={'شماره موبایل'}/>
                    <input type={"password"} className={'email'} placeholder={'رمز عبور'}/>
                    <span>رمز عبور خود را فراموش کرده اید؟<button>کلیک کنید</button></span>
                    <button className={"interbtn"}><h3>ورود </h3></button>
                    <span>هنوز ثبت نام نکرده اید؟<button>ثبت نام کنید</button></span>
                </form>

            </$rightcolum>





        </$grid>
    );
}

export default Login_mob;
const $grid=styled.div`
  font-size:80%;
  display: grid;
  direction:rtl;
  background-color:var(--dark-blue);
  grid-template-rows:30% 70%;

  
  .sun{
    grid-row:1;
    z-index:2;
    position:absolute;
    margin-top:2rem;

  }
  .logo{
    height:15rem;
    margin:auto;
    color:#CAAB5A;
    
    h1{

      margin-top:10rem;

    }
  
  }
`

const $rightcolum=styled.div`
    border-radius:2rem 2rem 0rem 0rem;
    background-color: white;
    grid-row:2;
    margin:auto;
  
  form{
    padding:5rem 10rem;
    margin:auto;
    text-align:right;
    h2{
      text-align:center;
    }
    input{
      margin-top: 1rem;
      width:100%;
      font-size: 1rem;
      padding:1rem;
      border-radius:.5rem;
      border:solid 1px var(--dark-blue);
    }
   span{
     font-weight:600;
     opacity:50%;
   }
    .interbtn{
      background-color:var(--dark-blue);
      color:white;
      border-radius:.5rem;
      width:110%;
      margin-top:1.5rem;

    }

   
    
  }
 

`

