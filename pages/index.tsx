import React ,{useState,SyntheticEvent} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import registerUsr from '../public/register.png'
import SignInUsr from '../public/login.png'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios'
import cookie from 'ts-cookies'
//var Cookies = require('cookies')
const Home: NextPage = () => {
  const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const route=useRouter()

    const submit= async (e:SyntheticEvent)=>{
      e.preventDefault()
      const data ={
          email,password
      }
      console.log(data);
      await axios.post('http://localhost:3000/api/login',data).then((res)=>{
      
          
          console.log(res);
      localStorage.setItem("token",res.data.token)
        //cookie.set("token",res.data.token)

         route.push("/Home")
         return true
      }).catch((err)=>{
          console.log(err.response.data);
  
      })
    
      
  }
  return (
    <div className={styles.signUpBox}>
               <div className={styles.BoxchekIcon}>
                  <span className={styles.chekIcon}>&#10003;</span>
                  </div>
              
                <div className={styles.signBox}>
                 
                    <Link href="/SignUp">

                    

                       <div className="card">
                               <div className={styles.card1}>
                                       <Image
                                       src={registerUsr}
                                          width={50}
                                        height={50}
                                        />
                                    <h2>Registre</h2>
                                   <div style={{fontSize:"smaller"}}>Brows and find what you need</div>
                               </div>
                       </div>
                       </Link>
                       <Link href="/">

                       
                       <div className="card">
            <div className={styles.card}>
              <Image
                    src={SignInUsr}
                     width={50}
                    height={50}
              />
                <h2>SignIn</h2>
                <div style={{fontSize:"smaller"}}>Already have an Account then welcom back</div>
              </div>
                       </div>
                       </Link>
        
               </div>
               <form onSubmit={submit}>
                 
                  <div className="form-group">
                      <input type="email" className="form-control" id="inputAddress" placeholder="Email*" onChange={e=>setemail(e.target.value)}  />
                  </div>
                  <div className="form-group">
                      <input type="password" className="form-control" id="inputAddress" placeholder="Password*" onChange={e=>setpassword(e.target.value)} />
                  </div>
                  <button type="submit" style={{marginLeft:"42%"}} className="btn btn-dark">Submit</button>

                  
             </form>
               
         


       
                

       
        </div>
  )
}

export default Home
