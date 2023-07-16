import React from 'react'
import {useState , useEffect} from 'react';
function Sixth() {
const[chats,setChats]= useState([])

 const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/userchat') {
          resolve({
            status: 200,
            message: 'Success',
            data: [
              {
                name: 'Alia',
                messages: [
                  {
                    from: 'Alia',
                    message: 'Good Morning',
                  },
                  {
                    from: 'Ranvir',
                    message: 'Good Morning, How are you?',
                  },
                ],
              },
              {
                name: 'Jeena',
                messages: [
                  {
                    from: 'Jeena',
                    message: 'When is the meeting scheduled?',
                  },
                  {
                    from: 'Seema',
                    message: 'It is at 10AM tomorrow.',
                  },
                ],
              },
              {
                name: 'Abhay',
                messages: [
                  {
                    from: 'Abhay',
                    message: 'Have you found a house yet?',
                  },
                  {
                    from: 'John',
                    message: 'No luck yet, still searching.',
                  },
                  {
                    from: 'Abhay',
                    message:
                      'Hey, an apartment just got vacant in my bulding. Do you wanna have a look?',
                  },
                ],
              },
            ],
          })
        } else {
          reject({
            status: 404,
            message: 'users chat not found.',
          })
        }
      }, 2000)
    })
  }

const fetchUsers =async()=>{
    try{
        const response= await fakeFetch("https://example.com/api/userchat")
     const{data} =response
     setChats(data)
    }catch(err){
        console.log("Error fetching chats: " + err);
    }
}

useEffect(()=>{
    fetchUsers();
},[]);

  return (
    <div>
        <div>{chats.map((x)=>{
            return(
                <>
                <h1>{x.name}'s chats</h1>
                <ul>{x.messages.map((x)=>{
                    return(
                        <>
                        <li>
                            <b>{x.from}</b>:{x.message}
                        </li>
                        </>
                    )
                })}</ul>
                </>
            )
        })}</div>
    </div>
  )
}

export default Sixth