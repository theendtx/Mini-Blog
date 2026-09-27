import { Post } from "../model/types";

type PostCardProps = {
    post: Post;
};

export default function PostCard(props: PostCardProps) {
    return (
        <div className="border p-4 mb-4 rounded hover: bg-gray-100" >
            <h3 className="text-lg font-bold">{props.post.title}</h3>
  <p className="text-gray-600">{props.post.body}</p>
        </div>
    );
}