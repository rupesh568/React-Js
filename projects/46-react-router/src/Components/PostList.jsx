import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList33 } from "../Store/Post-list-store";
import ErrorMessage from "./ErrorMessage";
import LoaderSpinner from "./LoaderSpinner";
const PostList=()=>{
    let {postList,fetching}=useContext(PostList33);
    
    // if(!dataFetched){
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then(data=> {
    //         console.log(data.posts)
    //         addInitialPost(data.posts);

    //     });
    //     setdataFetched(true);
    // }
    // console.log(postList);
    // const onclickFetch=()=>{
    //     console.log("button is clicked;");
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then(data=> {
    //         console.log(data.posts)
    //         addInitialPost(data.posts);
    //     });
        
    // }

    // let {postList}=useContext(PostList33)
    // console.log(postList);
    return <>
        {fetching && <LoaderSpinner></LoaderSpinner>}
        {!fetching && postList.length==0 && <ErrorMessage /*handleronClick={onclickFetch}*/></ErrorMessage>}
        {!fetching && postList.map((val)=>(
            
            <Post key={val["id"]}post={val}></Post>
            
        ))}

    </>
}
export default PostList;