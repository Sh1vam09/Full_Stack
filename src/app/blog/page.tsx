// import Link from "next/link";

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// export default async function Blog() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   // const posts = await res.json();
//   const posts: Post[] = await res.json();

//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col">
//             <div className="h-1 bg-gray-200 rounded overflow-hidden">
//               <div className="w-24 h-full bg-indigo-500"></div>
//             </div>
//             <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
//               <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
//                 My Blog
//               </h1>
//               <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
//                 Blog articles fetched from JSONPlaceholder.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
//             {posts.slice(0, 6).map((post) => (
//               <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={post.id}>
//                 <div className="rounded-lg h-64 overflow-hidden">
//                   <img
//                     alt="content"
//                     className="object-cover object-center h-full w-full"
//                     // src={`https://dummyimage.com/1203x503?text=Post+${post.id}`}
//                     src={`https://picsum.photos/id/${post.id+20}/1203/503`}
//                   />
//                 </div>
//                 <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{post.title}</h2>
//                 <p className="text-base leading-relaxed mt-2">{post.body}</p>
//                 <Link href={`/blog/${post.id}`} className="text-indigo-500 inline-flex items-center mt-3">
//                   Learn More
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-4 h-4 ml-2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                   </svg>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import Link from "next/link";

type Post = {
  userId: number;
  id: string; // Use string to match the ID type from your API
  title: string;
  body: string;
};

export default async function Blog() {
  // Use a relative path to fetch from your local API route
  const res = await fetch('http://localhost:3000/api/blog', { cache: 'no-store' });
  // const posts = await res.json();
  const posts: Post[] = await res.json();

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                My Blog
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Blog articles fetched from JSONPlaceholder.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {posts.slice(0, 6).map((post) => (
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={post.id}>
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    // src={`https://dummyimage.com/1203x503?text=Post+${post.id}`}
                    src={`https://picsum.photos/id/${post.id+20}/1203/503`}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{post.title}</h2>
                <p className="text-base leading-relaxed mt-2">{post.body}</p>
                <Link href={`/blog/${post.id}`} className="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}