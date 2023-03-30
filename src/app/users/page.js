"use client";
import Image from "next/image";
import LoadingSkelton from "./loadingSkelton";
import { useGetPosts } from "./request";
import './users.css'
import style from '../page.module.css'
import Navigasi from "../components/Headers/navigasi/navigasi";
import Footer from "../components/Footer/footer";
import { parseCookies } from "nookies";
import { admin } from "../login/validation";
import  {redirect} from 'next/navigation'
import { useEffect, useState } from "react";

export default function Page() {
  const { data, error, isLoading } = useGetPosts();
  const [activeLogin,setActiveLogin] = useState(false)
  const datas_users = data && data.users

  const cookies = parseCookies()

  if (Object.keys(cookies).length===0){
    redirect('/login')
}
  if(cookies.actived === admin.token) {
    useEffect(() => setActiveLogin(true),[])
  } 

  

  return (
    <>
    <title>Data users</title>
    <Navigasi activeLogin={activeLogin} />
    <div id="users">
      <div style={{margin:'4rem 0',textAlign:"center"}}>
      <h1 className={style.title}>Selamat Datang</h1>
      <h4 style={{margin:"5px 0"}}>di halaman users</h4> 
      </div>
      {isLoading ? <LoadingSkelton/> : null}
      <div id="table" className="tableWrapper" style={{display : isLoading ? "none" : "inherit"}}>
    <table className="GeneratedTable table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Foto</th>
      <th>Nama Lengkap</th>
      <th>Email</th>
      <th>Website</th>
      <th>Informasi Lengkap</th>
    </tr>
  </thead>
  <tbody>
   {datas_users && datas_users.map((data,key) => {
    return (
      <tr key={key}>
      <td>{data.id}</td>
      <td><Image src={data.image} height="100" width='100' style={{width: "60px",height:"auto",borderRadius:"10px"}} className='ImageProfile' alt="ProfileAvatar"/></td>
      <td>{data.firstName} {data.lastName}</td>
      <td>{data.email}</td>
      <td>{data.domain}</td>
      <td><button className={style.btnLogin} onClick={() => window.open('https://dummyjson.com/users/'+data.id)}>Detail</button></td>
    </tr>
    )
   })}
  </tbody>
</table>
</div>

    </div>
    <Footer/>
    </>
  );
}




