import { createContext, useReducer } from "react";


export const PostList33= createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}
});

const postListReducer=(currItems,action)=>{
    let finalPostList=currItems;
    if(action.type=="ADD_Item"){
        finalPostList=[...finalPostList,{
            id:action.payload.id,
            title:action.payload.title,
            body:action.payload.body,
            reaction:action.payload.reaction,
            userId:action.payload.userId,
            tag:action.payload.tag,
        }]
        
    }else if(action.type=="DELETE_Item"){
        finalPostList=finalPostList.filter((val55)=>{
            return ! (val55.id===action.payload.id);
        })

    }
    return finalPostList;
}


const default_post_list=[
        {
            id:'1',
            title:"Going to Delhi",
            body:"Hi Friends,I am going to Delhi for my vacations.Hope to enjoy a lot .Peace out",
            reaction:2,
            userId:"user-9",
            tag:["vactaion","Mumbai","Enjoying "],

        },
        {
           id:'2',
            title:"Passed BTECH",
            body:"Finally passed the four year of my B.tech Course.",
            reaction:30,
            userId:"user-ID",
            tag:["Graduating","Unbelievable"],
        },]
const PostListProvider=({children})=>{

    const[postList,dispatchPostList]=useReducer(postListReducer,default_post_list);

    const addPost=(e,userId,postTitle,postContent,reaction,tag)=>{
        let userId4=userId.current.value;
        let postTitle2=postTitle.current.value;
        let postContent2=postContent.current.value;
        let reaction2=reaction.current.value;
        let tag2=tag.current.value.split(" ");
        
        userId.current.value="";
        postTitle.current.value="";
        postContent.current.value="";
        reaction.current.value="";
        tag.current.value="";

        const addDispatch={
            type:"ADD_Item",
            payload:{
                id:Date.now(),
                title:postTitle2,
                body:postContent2,
                reaction:reaction2,
                userId:userId4,
                tag:tag2
            }
        }
        dispatchPostList(addDispatch);

        


    }

    const deletePost=(val)=>{
        console.log(`${val} id conten is deleted`)
        const deleteDispatch={
            type:"DELETE_Item",
            payload:{
                id:val
            }
        }
        dispatchPostList(deleteDispatch);
          
    }


    return <PostList33.Provider value={{
        postList,
        addPost,
        deletePost,

    }}>
        {children}
    </PostList33.Provider>
    
    // const default_post_list=[
    //     {
    //         id:'1',
    //         title:"Going to Delhi",
    //         body:"Hi Friends,I am going to Delhi for my vacations.Hope to enjoy a lot .Peace out",
    //         reaction:2,
    //         userId:"user-9",
    //         tag:["vactaion","Mumbai","Enjoying "],

    //     },
    //     {
    //        id:'2',
    //         title:"Paas BTECH",
    //         body:"Finally passed the four year of my B.tech Course.",
    //         reaction:30,
    //         userId:"user-ID",
    //         tag:["Graduating","Unbelievable"],
    //     },

    // ]


}
export default PostListProvider;