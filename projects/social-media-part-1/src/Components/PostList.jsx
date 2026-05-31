import { useContext } from "react";
import Post from "./Post";
import { PostList33 } from "../Store/Post-list-store";
const PostList=()=>{

    let {postList}=useContext(PostList33)
    console.log(postList);
    return <>
        {postList.map((val)=>(
            
            <Post key={val["id"]}post={val}></Post>
            
        ))}

    </>
}
export default PostList;