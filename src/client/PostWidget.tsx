import { Post } from "@prisma/client"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import fbConfig from './firebaseConfig';
import server from "./server";
import PostComponent from "./PostComponent";

function PostWidget () {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user] = useAuthState(fbConfig.auth);

  useEffect(() => {
    server.getPosts().then((result: Post[]) => { setPosts(result); console.log(result); });
  }, [user]);

  return (
    <div>
      <p>Posts</p>
      {posts.map(post => <PostComponent key={post.id} post={post} />)}
    </div>
  )
}

export default PostWidget;