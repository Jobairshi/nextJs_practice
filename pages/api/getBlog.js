// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
export default function handler(req, res) 
{

  fs.readFile(`BlogData/${req.query.Blog_no}.json`,'utf-8',(err,data)=>
  {
    if(err)
    {
       res.status(500).json({error: "no such blog found"}) 
    }

    console.log(JSON.parse(data))
    res.status(200).json(JSON.parse(data))
  })

}
