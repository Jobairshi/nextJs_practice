import React ,{ useState, useEffect }  from 'react'

import Link from 'next/link';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const Blog = (props) => {
 console.log(props)

  const [blogData, setBlogData] = useState(props.allblogs);
  

  return (
    <main className='min-h-screen'>
        <div className="grid grid-cols-3 gap-10">



        {blogData.map((blogItem, index) => (
          <div className="hov_class BlogItem"key={index}>
          <Link href={`/sub_pages/${blogItem.slug}`}>
           <Card className="py-4">
             <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold"></p>
              <h4 className="font-bold text-large">{blogItem.title}</h4>
              <small className="text-default-500 font-semibold">Total video : {blogItem.video_count}</small>
              <small className="text-default-500 font-semibold">Author: {blogItem.author}</small>
             </CardHeader>
             <CardBody className="overflow-visible py-2">
              <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/computer.avif"
              width={270}
              />
             </CardBody>
            </Card>
          </Link>
        </div>
        ))}

           


        </div>
    </main>
  )
}
export async function getServerSideProps(context)
{
    let data = await fetch('http://localhost:3000/api/Blogs_data')
    let allblogs = await data.json();
  return {
      props : {allblogs},
    }
}

export default Blog