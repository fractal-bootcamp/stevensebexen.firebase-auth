import { Post as PostComponent } from "@prisma/client"

interface PostComponentProps {
  post: PostComponent
}

function PostComponent(props: PostComponentProps) {
  return (
    <p>{props.post.content}</p>
  );
}

export default PostComponent;