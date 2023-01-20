import React from 'react'

function Pagination({pageperpost,totalpost,paginate}) {

    const pageNumber = [];
    const forLoop = Math.ceil(totalpost/pageperpost)
    for(let i=1;i <= forLoop ; i++){
        pageNumber.push(i)
     
    }

  return (
    <div className='pageNumbers'>{
    pageNumber.map((pn,i)=>{
     return  <button key={i} style={{marginLeft:'2rem'}} onClick={()=>{
       paginate(pn)
     }}>{pn}</button>
    })
    }</div>
  )
}

export default Pagination