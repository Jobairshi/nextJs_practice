import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function about() 
{
  // here min-h-screen is added to remove odd grid layout
  return (
    <main className=' min-h-screen'>
      <div className="container p-6 flex flex-col items-center gap-4 ">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className='text-center text-2xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Nesciunt ab provident neque labore saepe quidem praesentium, <br /> quis, adipisci reprehenderit assumenda eius consequatur soluta, recusandae deserunt ipsum qui? Consectetur, illo ut?
        </p>
      </div>
    </main>
  );
}
