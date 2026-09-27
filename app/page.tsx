import { getPosts } from "@/entities/post/api/getPosts"
import PostCard from "@/entities/post/ui/PostCard"

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}