"use client"

import { Post } from "@/types/posts";
import { FC } from "react";
import { useQuery } from "react-query";
import Loader from "../shared/loader/Loader";

interface IPostsProps { }

const fetchData = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

const Posts: FC<IPostsProps> = ({ }) => {
  console.log('posts page')

  const { isLoading, data } = useQuery('posts', fetchData);
  return (
    <div>
      {isLoading
        ? <Loader />
        :
        <div className="flex max-w-[1200px] w-full gap-5 flex-wrap mx-auto">
          {data?.map(({ id, title, body }) => {
            return (
              <div key={id} className="p-2 relative h-full w-full max-w-[383px] rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                <h2 className="mb-2">{title.toUpperCase()}</h2>
                <p>{body}</p>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default Posts;
