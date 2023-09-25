import Head from "next/head";
import style from "../styles/Home.module.css"


export default function Home({data}) {
  console.log(data)
  return (
    <div className={style.container}>
    <Head><title>blog</title></Head>
      <h1>home page</h1>
      <p>home Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia in harum inventore consectetur saepe doloremque, placeat quo iure minima eligendi illo illum debitis iste soluta dolore reiciendis fugiat praesentium cumque assumenda expedita tempore unde dolorem! Fugit voluptates reprehenderit iste.</p>
      <div>
        {data.map((item, i)=> {return (<div key={i}>
      <h3>{item?.title}</h3>
      <p>{item?.body}</p>
      <hr />
        </div>)})}
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json()
  return {
    props: {
      data: data
    }
  }
}