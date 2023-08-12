import React ,{ useState, useEffect }  from 'react'

import Link from 'next/link';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const Blog = () => {


  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('/api/Blogs_data')
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

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

export default Blog