import { useRouter } from 'next/router'
import React, { useState,useEffect } from 'react'

const sub_page = (props) => {
   
  const [blogData, setBlogData] = useState(props.myblog);

  return (
    <main>
        <div className="container flex flex-col gap-5">
            <h1 className='font-semibold text-5xl'>
                {
                  blogData.title
                }
                <hr />
            </h1>
           

            <div>
               <p className='text-1xl'>
                {blogData.content}
               </p>
            </div>

            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat cumque tenetur recusandae dolores? Accusantium facere ut soluta accusamus iure expedita aliquam voluptas.
            </div>

            
        </div>
    </main>
  )
}
export async function getServerSideProps(context)
{
  const {Blog_no} = context.query 

    let data = await fetch(`http://localhost:3000/api/getBlog?Blog_no=${Blog_no}`)
    let myblog = await data.json();
  return {
      props : {myblog},
    }
}


export default sub_page