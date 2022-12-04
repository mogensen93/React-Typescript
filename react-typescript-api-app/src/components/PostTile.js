import React from "react";
import './PostTile.scss';
import image from "../assets/images/placeholder.jpg";

export default function PostTile(){
    return(
        <div className="post-card-container">
            <img src={image} alt="Awesome post" className="post-card-image">
            </img>
            <div >
                <h2>This is a headline</h2>
                <p>Truncated .. read more</p>
                <button>Read more ></button>
            </div>
        
        </div>
    );
}