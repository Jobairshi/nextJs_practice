import React from 'react'
import Link from 'next/link';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const Blog = () => {
  return (
    <main className='min-h-screen'>
        <div className="grid grid-cols-3 gap-10">

           <div className="hov_class BlogItem">
             <Link href={'/sub_pages/learn-css'}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                 <p className="text-tiny uppercase font-bold">Daily Course</p>
                   <small className="text-default-500">12 Video</small>
                   <h4 className="font-bold text-large">Frontend CSS JSX</h4>
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

           <div className="hov_class BlogItem">
             <Link href={'/sub_pages/learn-css'}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                 <p className="text-tiny uppercase font-bold">Daily Course</p>
                   <small className="text-default-500">12 Video</small>
                   <h4 className="font-bold text-large">Frontend CSS JSX</h4>
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

           <div className="hov_class BlogItem">
             <Link href={'/sub_pages/learn-css'}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                 <p className="text-tiny uppercase font-bold">Daily Course</p>
                   <small className="text-default-500">12 Video</small>
                   <h4 className="font-bold text-large">Frontend CSS JSX</h4>
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

           <div className="hov_class BlogItem">
             <Link href={'/sub_pages/learn-css'}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                 <p className="text-tiny uppercase font-bold">Daily Course</p>
                   <small className="text-default-500">12 Video</small>
                   <h4 className="font-bold text-large">Frontend CSS JSX</h4>
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

           <div className="hov_class BlogItem">
             <Link href={'/sub_pages/learn-css'}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                 <p className="text-tiny uppercase font-bold">Daily Course</p>
                   <small className="text-default-500">12 Video</small>
                   <h4 className="font-bold text-large">Frontend CSS JSX</h4>
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

           <div className="hov_class BlogItem">
             <Link href={'/sub_pages/learn-css'}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                 <p className="text-tiny uppercase font-bold">Daily Course</p>
                   <small className="text-default-500">12 Video</small>
                   <h4 className="font-bold text-large">Frontend CSS JSX</h4>
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

        </div>
    </main>
  )
}

export default Blog