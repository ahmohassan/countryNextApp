// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const Home= ({data}) => {
  // console.log(data)

  //

  const [filterQuery, setFilterQuery] = useState("")
  const [search, setSearch] = useState([])

  // const searchFun =(e)=>{
  //   setFilterQuery(e.target.value)
    
  //   const query = data.filter((value)=>{return value.name.commo.toLowerCase().includes(filterQuery)})
  //   setSearch(query)
  //   // console.log(search);
  // }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center  text-center">
        <div className='sticky top-0 bg-white w-full p-5'>
          <h1 className="md:text-6xl font-bold">
            🌍 World{' '}
            <a className="text-blue-600" href="/">
              Countries
            </a>
          </h1>

          <div className='mt-4 rounded-md w-full bg-slate-300'>
          <input type="text" id="search" name='search' onChange={(e)=>setFilterQuery(e.target.value.toLowerCase())} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="🔎 Search....." />
          </div>
        </div>

        <div className="mt-32  flex flex-wrap items-center justify-center sm:w-full">
         {
          data.filter((value) =>value.name.common.toLowerCase().includes(filterQuery) ).map((data)=>(
          <a key={data.name.common} 
          href={`./country_detail/${data.name.common}`} 
          className={`m-4 `}
          >
         <div className="mt-6 w-full rounded-xl bg-slate-200 shadow-6xl  text-black border p-6 text-left hover:text-blue-600 focus:text-blue-600">
         <img src={data.flags.svg} className={`h-64 w-96 `} alt="" />
          <h3 className="text-2xl mt-8 font-bold">{data.name.common} &rarr;</h3>
          <p className="mt-4 text-xl">
           {data.capital}
          </p>
         </div>
        </a>
          ))
         }

        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
         <span className='font-bold'>©️ ahmanur</span>
        </a>
      </footer>
    </div>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://restcountries.com/v3.1/all`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
