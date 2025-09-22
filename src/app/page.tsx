import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi, I'm Shivam Baheti
      </h1>
      <p className="mb-8 leading-relaxed text-slate-100">I’m an aspiring AI/ML engineer with a passion for solving real-world problems through code and creativity. I enjoy building projects that blend machine learning, data, and design into practical applications. When I’m not experimenting with neural networks or tinkering with side projects, I’m usually learning new frameworks and exploring how technology can make life easier and smarter..</p>
      <div className="flex justify-center">
        <a href="https://www.linkedin.com/in/your-profile-url/" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Connect</button>
        </a>
        <a href="https://github.com/sh1vam09" target="_blank" rel="noopener noreferrer">
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Explore</button>
        </a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center shadow-2xl rounded-4xl" width={500} height={500} alt="hero" src="/images/img.jpg"></Image>
    </div>
  </div>
</section>
</div>
  );
}