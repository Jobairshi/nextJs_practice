// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
import { Sawarabi_Gothic } from 'next/font/google';
export default async function handler(req, res) 
{

  let data = await fs.promises.readdir("BlogData");
  let myFile;
  let allblogs = [];
  for(let i = 0;i<data.length;i++)
  {
    const item = data[i];
    myFile = await fs.promises.readFile(('BlogData/' + item),'utf-8')
    allblogs.push(JSON.parse(myFile))
  }
  res.status(200).json(allblogs)
}
