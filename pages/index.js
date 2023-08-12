import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import styles1 from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  return (

    <main className='flex min-h-screen flex-col items-center justify-between py-10'>
      <Head>
        <link rel="stylesheet" href="style.css" />
      </Head>
      

      <div className="flex flex-col gap-20 items-center">
       
       <div className='container items-center flex flex-col gap-6'>

         <h1 className="text-5xl font-semibold bolds">
           My Coding Blog
         </h1>
         
         <h1 className='text-3xl'>
           select from below
         </h1>

       </div>

       <div className='container'>
      <Image src="/computer.avif" alt="" layout='responsive' width={600} height={400}  />
      </div>
       
      <div className="flex items-center flex-col">

          <div className="blog flex items-center flex-col text-center gap-6">
            <h1 className='text-3xl font-semibold'> learn next js in 1hour. 100% grrnted </h1>
            <p className={styles1.redss}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br /> Soluta nobis nihil, harum tempore deleniti quo qui quod voluptas eaque autem et eum? Optio 
              <br />iusto reprehenderit delectus consequuntur deserunt earum asperiores?</p>
          </div>
      </div>

     </div>
    </main>
  );
}
