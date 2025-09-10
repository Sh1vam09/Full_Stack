// import Link from "next/link";

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// interface BlogPostProps {
//   params: {
//     blogID: string;
//   };
// }

// export default async function BlogPost({ params }: BlogPostProps) {
//   const { blogID } = params;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogID}`);

//   if (!res.ok) {
//     // Handle not found or errors gracefully
//     return <div>Post not found.</div>;
//   }

//   const post: Post = await res.json();

//   return (
//     <div className="container px-5 py-24 mx-auto">
//       <article className="prose lg:prose-xl">
//         <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">{post.title}</h1>
//         <div className="rounded-lg h-64 overflow-hidden">
//                   <img
//                     alt="content"
//                     className="object-cover object-center h-full w-full"
//                     // src={`https://dummyimage.com/1203x503?text=Post+${post.id}`}
//                     src={`https://picsum.photos/id/${post.id+20}/1203/503`}
//                   />
//                 </div>
//         <p>{post.body}</p>
//         <p className="text-sm text-gray-500">Post ID: {post.id} | User ID: {post.userId}</p>
//         <Link href={`/blog`} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Back</Link>
//       </article>
//     </div>
//   );
// }


import Link from "next/link";

type Post = {
   userId: number;
   id: string; // The ID from your API is a string
   title: string;
   content: string; // Your API returns 'content', not 'body'
};

interface BlogPostProps {
   params: {
      blogID: string;
   };
}

export default async function BlogPost({ params }: BlogPostProps) {
   const { blogID } = params;
   const res = await fetch(`http://localhost:3000/api/blog/${blogID}`, { cache: 'no-store' });

   if (!res.ok) {
    if (res.status === 404) {
      return <div>Blog post not found.</div>;
    }
      return <div>An error occurred.</div>;
   }

   const post: Post = await res.json();

   return (
      <div className="container px-5 py-24 mx-auto">
         <article className="prose lg:prose-xl">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">{post.title}</h1>
            <div className="rounded-lg h-64 overflow-hidden">
                           <img
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              // src={`https://dummyimage.com/1203x503?text=Post+${post.id}`}
                              src={`https://picsum.photos/id/${post.id+20}/1203/503`}
                           />
                        </div>
            <p>{post.content}</p> {/* Use post.content */}
            <p className="text-sm text-gray-500">Post ID: {post.id}</p>
            <Link href={`/blog`} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Back</Link>
         </article>
      </div>
   );
}