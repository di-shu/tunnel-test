"use client"
import Posts from "@/components/posts/Posts";
import { QueryClientProvider, queryClient } from "@/config/queryConfig";
import { FC } from "react";

interface IPostsProps { }

const PostsPage: FC<IPostsProps> = () => {
  return (
    <main>
      <h1 className="text-center mb-5">Posts</h1>
      <QueryClientProvider client={queryClient}>
        <Posts />
      </QueryClientProvider>
    </main>
  )
}

export default PostsPage;
