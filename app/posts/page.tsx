"use client"

import React, { useEffect, useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { FaMessage, FaPaperPlane } from "react-icons/fa6";
import Modal from "../component/ModalBox";
import Login from "../component/Login";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Post {
  title: string;
  description: string;
  id: number;
  Likes: number;
  date: string;
}

interface Comments{
  comment_id: number,
  comment_content: string,
  id: number,
  created_at: string
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [Comment, setComment] = useState<Comments[]>([]);
  const [commentVisible, setCommentVisible] = useState<number | null>(null);
  const [comments, setComments] = useState<{ [postId: number]: string }>({});
  const [isLiked ,setIsliked] = useState(true)
  const [showComments, setShowComments] = useState<{ [postId: number]: boolean }>({});

const router  = useRouter()


  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleLike = async (postId: number) => {
  if (isLiked)
  {
    try {
      const response = await axios.post("http://localhost:5000/api/posts/like", { postId });

      if (response.status === 200) {
        const updatedPosts = posts.map((post) => {
          if (post.id === postId) {
            return { ...post, Likes: post.Likes + 1 };
          }
          return post;
        });
        setPosts(updatedPosts);
      } else {
        console.error("Error updating likes:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating likes:", error);
    }}
    else
    {
      try {
        const response = await axios.post("http://localhost:5000/api/posts/likes", { postId });
  
        if (response.status === 200) {
          const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
              return { ...post, Likes: post.Likes - 1 };
            }
            return post;
          });
          setPosts(updatedPosts);
        } else {
          console.error("Error updating likes:", response.statusText);
        }
      } catch (error) {
        console.error("Error updating likes:", error);
      }
    }
    setIsliked(!isLiked)
  };
  const toggleComment = (postId: number) => {
    setCommentVisible(commentVisible === postId ? null : postId);
  };

  const handleSendComment = async (postId: number) => {
    try {
      await axios.post("http://localhost:5000/api/comments", {
        comment_content: comments[postId],
        id: postId
    });
      // Clear the comment content after successful submission
      // Hide the comment input field if needed
      setCommentVisible(null);
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('Failed to submit comment');
    }
    router.push("/posts")
    console.log(postId,comments);
    
  };
//get comment posted in database and display them to  client 

useEffect(()=>{
  axios.get("http://localhost:5000/api/comments").then(res=>
    setComment(res.data)
  )
},[])

  //handle input changes

  const handleCommentChange = (postId: number, value: string) => {
    setComments({
      ...comments,
      [postId]: value // Update the comment for the specific post
    });
  };


  //display commment 
  const toggleShowComments = (postId: number) => {
    setShowComments({
      ...showComments,
      [postId]: !showComments[postId]
    });
  };

//modal
const [isOpen, setIsOpen] = useState(false);

const openModal = () => {
  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};


  return (
    <div className="pt-20">
      <div className="flex justify-end pr-10">
       
      <div >
      <button onClick={openModal} className={`${!isOpen? 'bg-blue-600': 'bg-white'} text-white px-3 py-1 rounded-md flex items-center`}>
        { !isOpen ?<span>Add Post</span>: null}
         
         </button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Login/>
      </Modal>
    </div>


      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {posts.map((post) => (
          <div key={post.id} className="max-w-2xl bg-white/90 rounded-2xl shadow-2xl overflow-hidden p-10">
            <h1 className="py-5 px-5 text-2xl text-center font-bold">{post.title}</h1>
            <p className="px-7">{post.description}</p>
            <div className="flex justify-around pt-8">
              <div className="flex items-center cursor-pointer" onClick={() => {handleLike(post.id)}}>
                <FaHeart className="text-red-600 text-xl" />
                <p className="pl-2">{post.Likes}</p>
              </div>
              <div>
              <div className="flex items-center">
                <span className="pr-1">comment</span>
                <FaMessage className="cursor-pointer text-blue-400" onClick={()=>toggleComment(post.id)}/>
              </div>

              </div>
             
              <div className="flex items-center">
                <span className="pr-3">posted</span>
                <BiCalendar />
                <p className="pl-2">{new Date(post.date).toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
              </div>
            </div>

            {commentVisible === post.id && (
              <div className="mt-4 flex items-center">
                <input type="text" placeholder="Add your comment..."  
                 value={comments[post.id] || ""}
                 onChange={(e) => handleCommentChange(post.id, e.target.value)}
                className="border border-gray-300 rounded-l-md px-2 py-1" />
                <FaPaperPlane className="text-blue-500 cursor-pointer ml-1" onClick={() => handleSendComment(post.id)} />
              </div>
            )}

              <div className="pt-4 w-full h-24 overflow-scroll">
              <p className="cursor-pointer" onClick={() => toggleShowComments(post.id)}>
                {!showComments[post.id] ? 'View comments' : 'Hide comments'}
              </p>
             
     {showComments[post.id] && (
    <>
      {Comment.filter(comment => comment.id === post.id).length > 0 ? (
        Comment.map((comment) => (
          <div key={comment.comment_id} className="text-center">
            {comment.id === post.id && (
              <p>{comment.comment_content}</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-red-700">No comment yet</p>
      )}
    </>
  )}

              </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts
