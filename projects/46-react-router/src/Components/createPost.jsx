import { useContext, useRef } from "react";
import { PostList33 } from "../Store/Post-list-store";

const CreatePost = () => {
    const {addPost}=useContext(PostList33);
    const userId=useRef();
    const postTitle=useRef();
    const postContent=useRef();
    const reaction=useRef();
    const tag=useRef();

    return (
        <form className="create"
        onSubmit={(e)=>{
            e.preventDefault();

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

            fetch("https://dummyjson.com/posts/add", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
            
                    title:postTitle2,
                    body:postContent2,
                    reaction:reaction2,
                    userId:userId4,
                    tags:tag2
           })
           })
           .then(res => res.json())
           .then((data1)=>{
            console.log("all data",data1)
            addPost(e,data1.userId,data1.title,data1.body,data1.reaction,data1.tags)
           })

           
            // addPost(e,userId4,postTitle2,postContent2,reaction2,tag2);
        }}
        >

            <div className="mb-3">
                <label htmlFor="userId" className="form-label">
                    Enter your userId
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="userId"
                    placeholder="Your USER ID"
                    ref={userId}
                    
                />
                
            </div>

            <div className="mb-3">
                <label htmlFor="title" class="form-label">
                    Post Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="How are you feeling today?"
                    ref={postTitle}
                    
                />
                
            </div>
            <div className="mb-3">
                <label htmlFor="body" class="form-label">
                    Post Content
                </label>
                <textarea
                    type="text"
                    rows="5"
                    className="form-control"
                    id="body"
                
                    placeholder="Tell us about it!"
                    ref={postContent}
                    
                />
                
            </div>

            <div className="mb-3">
                <label htmlFor="title" class="form-label">
                    Number of Reaction
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="reaction"
                    placeholder="How many people are reacted to this post?"
                    ref={reaction}
                    
                />
                
            </div>

            <div className="mb-3">
                <label htmlFor="title" class="form-label">
                    Enter your Hashtags here
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="tags"
                    placeholder="Please enter hashtags using space"
                    ref={tag}
                    
                />
                
            </div>
            
            <button type="submit" className="btn btn-primary"
            /*onClick={()=>{
                console.log("button is clicked");
            }}*/>
                Submit
            </button>
        </form>
    );
};
export default CreatePost;
