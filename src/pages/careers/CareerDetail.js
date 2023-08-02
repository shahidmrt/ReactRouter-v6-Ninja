import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetail() {
    const {id} = useParams(); // yaha pr hum params jis variable me store krty hai usko udher app.js me waisy use karengy i.e {:id} id ki jaga hum kuch or bi likh skty hai. lekin waisa pir hum app.js me likengy.. .
    const career = useLoaderData();

  return (
    <div className='text-white mt-8 border space-y-8 '>
        <h2 className='text-2xl  font-bold text-orange-800'>{career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location : {career.location}</p>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quos quasi eaque odio necessitatibus. Molestias odio corporis veritatis ipsum, debitis atque vel laboriosam tenetur nihil repellendus vitae magni reprehenderit cupiditate?</p>
        </div>

      
    </div>
  )
}

// Loader function
export const careerDetailLoader= async ({params}) =>{
const {id} = params 

const res = await fetch('http://localhost:4000/careers/' + id )

if(!res.ok){
    throw Error(`"npx json-server --watch data/db.json --port 4000", plz first run this command and then and run program... `);
    
}
return res.json()

}

