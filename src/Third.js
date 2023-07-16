import React from 'react'
import{useState,useEffect} from 'react'

function Third({width, height}) {
const[user,setUser] = useState([])

     const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url === 'https://example.com/api/user') {
              resolve({
                status: 200,
                message: 'Success',
                data: {
                  name: 'Saroj',
                  image:
                    'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
                  likes: 500,
                  comments: 10,
                },
              })
            } else {
              reject({
                status: 404,
                message: 'user data not found.',
              })
            }
          }, 2000)
        })
      }


const fetchUser = async()=>{
try{
    const response= await fakeFetch("https://example.com/api/user");
    const {data}=response
    setUser(data)
}catch(err){
    console.log("unable to fetch the users",err)
}

}

useEffect(()=>{
    fetchUser();
},[])

  return (
    <div>
        <div style={{border:"1px solid black", padding:"5px" }}>
            <img src={user.image} width={width} height={height} alt={user.name}/>
            <h4> Likes : {user.likes}</h4>
            <h4>Comments : {user.comments}</h4>
        </div>
    </div>
  )
}


export default Third