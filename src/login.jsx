import React from 'react'
import styled from "styled-components";
import './login.css'
import photo from './img/Group 25.png'
import photo2 from './img/Group 15.png'
import photo3 from './img/Untitled-1 3.png'
import sun from './img/cropped-123 1.png'
function Login() {

  return (
       <$grid>
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
           <img src={photo2} alt={'photo2'} className={"photo2"} />
           <img src={photo3} alt={'photo3'} className={"photo3"}/>
           <img src={sun} alt={'sun'} className={"sun sun-animat"} />
           <img src={sun} alt={'sun'} className={"sun"} />

        <$leftcolum>
            <img src={photo} alt={'photo'} />
        </$leftcolum>

       </$grid>
  );
}

export default Login;
const $grid=styled.div`

  display: grid;
  direction:rtl;
  grid-template-columns:[sidebar-s] 8rem [sidebar-b sidebar-e] minmax(6rem,1fr) [center] repeat(8,[col-s] minmax(min-content,14rem)[col-e]) [certer-e] minmax(6rem,1fr) [full-end]  ;
  grid-template-rows:1fr;
  
  .photo3{
    grid-row:1;
    grid-column:3;
    margin-top:auto;

  }

  .photo2{
    grid-row:1;
    grid-column:2;

  }

  .sun{
    grid-row:1;
    grid-column:10;
    z-index: 2;
    margin-top:60%;
  }
`

const $rightcolum=styled.div`
  
    grid-row:1;
    grid-column:2/4;
    margin:auto;
  
  form{
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
const $leftcolum=styled.div`
    grid-row:1/-1;
    grid-column:7/-1;
  justify-self: end;
img{
  overflow: hidden;
  height:40.2rem;
  margin-bottom:-5px;
}
`