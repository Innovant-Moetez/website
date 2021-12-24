import React,{useState} from 'react'
import { parseCookies} from 'nookies'
import cookie from 'ts-cookies'
import { useRouter } from 'next/dist/client/router'
import submit from "./index"
import withAuth from "./withAuth.jsx";
import styles from '../styles/Home.module.css'

 function Home() {
 
  //cookie.set("token","moetez")
    return (
        <div>
              <div id={styles.rectangle}>
      <div className={styles.flesh1}></div>

      <div className={styles.flesh2}></div>
      
       </div>
      <h1 id={styles.titleLogo}>The Logo Above is Made in Pure CSS</h1>
       
        </div>
        
    )
}
/*
export async function getServerSideProps(ctx:any,ownProps:string){


        const {res}=ctx
    
       res.writeHead(302,{Location:"/SignUp"})//
 
  
}*/
export default withAuth(Home);
