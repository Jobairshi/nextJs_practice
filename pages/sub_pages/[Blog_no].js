import { useRouter } from 'next/router'
import React from 'react'

const sub_page = () => {
    const router = useRouter()
    const {Blog_no} = router.query 
  return (
    <main>
        <div className="container flex flex-col gap-5">
            <h1 className='font-semibold text-5xl'>
                {Blog_no}
                <hr />
            </h1>
           

            <div>
               <p className='text-1xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum nobis voluptatibus accusamus, reiciendis aliquid corporis a aspernatur vel cupiditate sed molestias animi velit.
               </p>
            </div>

            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat cumque tenetur recusandae dolores? Accusantium facere ut soluta accusamus iure expedita aliquam voluptas.
            </div>

            
        </div>
    </main>
  )
}

export default sub_page