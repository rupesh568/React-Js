import { createContext, useCallback, useMemo, useReducer,useState,useEffect } from "react";


export const PostList33= createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
    fetching:false,
});

const postListReducer=(currItems,action)=>{
    let finalPostList=currItems;
    if(action.type=="ADD_Item"){
        finalPostList=[...finalPostList,/*{
            id:action.payload.id,
            title:action.payload.title,
            body:action.payload.body,
            reaction:action.payload.reaction,
            userId:action.payload.userId,
            tags:action.payload.tags,
        }*/action.payload]
        
        
    }else if(action.type=="DELETE_Item"){
        finalPostList=finalPostList.filter((val55)=>{
            return ! (val55.id===action.payload.id);
        })

    }else if(action.type=="ADDInitial_Item"){
        finalPostList=action.payload.posts;
        
        
    
    }
    console.log(finalPostList);
    return finalPostList;
}


const default_post_list=[
        {
            id:'1',
            title:"Going to Delhi",
            body:"Hi Friends,I am going to Delhi for my vacations.Hope to enjoy a lot .Peace out",
            reaction:2,
            userId:"user-9",
            tags:["vactaion","Mumbai","Enjoying "],

        },
        {
           id:'2',
            title:"Passed BTECH",
            body:"Finally passed the four year of my B.tech Course.",
            reaction:30,
            userId:"user-ID",
            tags:["Graduating","Unbelievable"],
        },]
const PostListProvider=({children})=>{

    const[postList,dispatchPostList]=useReducer(postListReducer,[]);

    const addPost=(e,userId4,postTitle2,postContent2,reaction2,tag2)=>{
        // let userId4=userId.current.value;
        // let postTitle2=postTitle.current.value;
        // let postContent2=postContent.current.value;
        // let reaction2=reaction.current.value;
        // let tag2=tag.current.value.split(" ");
        
        // userId.current.value="";
        // postTitle.current.value="";
        // postContent.current.value="";
        // reaction.current.value="";
        // tag.current.value="";
    

        const addDispatch={
            type:"ADD_Item",
            payload:{
                
                title:postTitle2,
                body:postContent2,
                reaction:reaction2,
                userId:userId4,
                tags:tag2
            }
        }
        dispatchPostList(addDispatch);




        


    }



    const addInitialPost=(posts)=>{
        

        const addInitialDispatch={
            type:"ADDInitial_Item",
            payload:{
                posts,
            }
        }
        dispatchPostList(addInitialDispatch);


        

        


    }

    const deletePost=useCallback((val)=>{
        console.log(`${val} id conten is deleted`)
        const deleteDispatch={
            type:"DELETE_Item",
            payload:{
                id:val
            }
        }
        dispatchPostList(deleteDispatch);
          
    },[dispatchPostList]);

    let [fetching,setFetching]=useState(false);
    useEffect(()=>{
        if(postList.length > 0) {
        return;
        }
        setFetching(true);

        const controller=new AbortController();
        const signal=controller.signal;
        fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then(data=> {
            console.log(data.posts)
            addInitialPost(data.posts);
            setFetching(false);

        });
        return ()=>{
            console.log("use Effect is cleaning up..");
            controller.abort();
        }
    },[]);

    // const arr=[5,1,3,2,9];
    // const sortArr=useMemo(()=>{
    //     return arr.sort();
    // },[arr]);
    // console.log(sortArr);


    return <PostList33.Provider value={{
        postList,
        addPost,
        deletePost,
        addInitialPost,
        fetching,

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