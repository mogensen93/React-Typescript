import PostTile from "./PostTile";
import "./Posts.scss";
import React, { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
   fetchPostIds();
  }, []);

  async function fetchPostIds(){
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((response) => response.json())
    .then((data) => {
      const arrayOfIds = data.slice(0, 10);
      fetchPosts(arrayOfIds);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  async function fetchPosts(ids) {
    let arrayOfPosts = [];
    for (let id of ids) {
      await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((response) => response.json())
        .then((data) => {
          arrayOfPosts.push(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    if (arrayOfPosts.length === 0) {
      return;
    }

    sortPostsByScore(arrayOfPosts);

  }

  function sortPostsByScore(posts){
    posts.sort((a, b) => {
      return b.score - a.score;
    });
    setPosts(posts);

  }

  return (
    <div className="posts-container">
      {posts.map((post) => {
        return (
          <PostTile 
            title={post.title} 
            id={post.id} 
            score={post.score} 
            unixTime={post.time} 
            author={post.by} 
            url={post.url}
          ></PostTile>
        );
      })}
    </div>
  );
}
