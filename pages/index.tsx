import type { NextPage } from 'next'
import style from '../styles/index.module.css'

const Home: NextPage = () => {

  console.log("hello world!")

  return (
    <div style={{
      minHeight:"100vh",
      padding:"0",
      margin:"0",
      flex:"1",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
      }}>
      <h1>
        <a style={{color:"#891FB7", textDecoration:"none"}}
        href="https://github.com/Andr7st/"
        rel="noreferrer" 
        target="_blank" 
        >Andr7st</a> 
      </h1>
      <p className={style.parrafo}>permission policy error</p>
    </div>
  )
}

export default Home
