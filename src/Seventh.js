import React from 'react'
import{useState,useEffect} from 'react'

export default function Seventh() {
    const[comments,setComments] = useState([]);

     const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url === 'https://example.com/api/comments') {
              resolve({
                status: 200,
                message: 'Success',
                data: {
                  comments: [
                    {
                      name: 'Raju',
                      text: 'Hello how are you long time no see!!!',
                    },
                    { name: 'Pankaj', text: 'Party when??' },
                    { name: 'Sakshi', text: 'Where are you currently staying' },
                    { name: 'Kishore', text: 'Hello Buddy!!' },
                  ],
                },
              })
            } else {
              reject({
                status: 404,
                message: 'No comments Found',
              })
            }
          }, 2000)
        })
      }

      const fetchData =async()=>{
        try{
            const response = await fakeFetch("https://example.com/api/comments")
            const{data} = response
            setComments(data.comments)
        }catch(err){
console.log("Error fetching comments", err)
        }
      }

      useEffect(()=>{
        fetchData();
      },[])

const deleteComment = (index)=>{
setComments((prevComments)=>{
    const newComments =[...prevComments];
    newComments.splice(index, 1);
    return newComments
});
}

  return (
    <div>
        {comments.map((x)=>{
            return(
                <div>
                    <h3>{x.name}</h3>
                    <p>{x.text}</p>
                    <button onClick={deleteComment}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}
