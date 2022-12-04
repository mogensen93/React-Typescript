import PostTile from "./PostTile";
import './Posts.scss';
import React, {useEffect } from 'react';


export default function Posts() {

  useEffect(() => {
     fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then((response) => response.json())
        .then((data) => {
           let arrayOfIds = data.slice(0,10);
           fetchPosts(arrayOfIds);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  function fetchPosts(ids){
    console.log(ids); 
 
    ids.forEach(id => {
     /* fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        let arrayOfPosts = []; 
        arrayOfPosts.push(data);
      })
      console.log(data)
      .catch((err) => {
         console.log(err.message);
      });*/
      console.log(id); 
      
    });

 

  }



  return <div className="posts-container"> 
      return(


      );

  </div>;
}

