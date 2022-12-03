import React from 'react'

const countryDetail = ({data}) => {
    data.map((item)=>{console.log(item.name.common)})
  return (
   <div className='flex items-center justify-center w-full bg-slate-200'>
    { data.map((items)=>(
        <div key={items.name.common} className={`flex-col items-center justify-center`}>
            <div className='flex-1 flex-row shadow-xl m-8'>
                <div><img src={items.flags.svg} alt="" /></div>
                
            </div>
            <div className=' p-5 ml-8  h-screen flex-col items-center justify-center'>
                <div className=''>
                    <h1 className='text-[2rem] font-bold ' >
                        Region:  <span className='text-[2.5rem]'>{items.region}</span>
                    </h1>
                </div>
                <div className=''>
                    <h1 className='text-[2rem] font-bold ' >
                        Country name:  <span className='text-[2.5rem]'>{items.name.common}</span>
                    </h1>
                </div>
                <div>
                    <h1 className='text-[2rem] font-bold font-serif' >Country Capital:  <span className=''>{items.capital}</span></h1>
                </div>
                <div>
                    <h1 className='text-[2rem] font-bold font-serif' >Population:  <span className=''>{items.population}</span></h1>
                </div>
                <div>
                    <h1 className='text-[2rem] font-bold font-serif' >Country Area:  <span className=''>{items.area} ㎢</span></h1>
                </div>

                <div className='mt-28 m-auto flex items-center justify-center w-96 h-96'><img src={items.coatOfArms.svg} className={`m-auto`} alt="" /></div>
            </div>
        </div>
    ))}

   </div>
  )
}
export async function getServerSideProps({params :{country}}) {
    // Fetch data from external API
    const res = await fetch(`https://restcountries.com/v3.1/name/${country.toLowerCase()}`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

export default countryDetail