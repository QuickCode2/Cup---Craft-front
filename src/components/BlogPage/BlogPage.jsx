// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import BrewingImg from "../../assets/BlogPage/Brewing-Espresso.jpg";
import ColdBrewImg from "../../assets/BlogPage/Cold Brew.webp";
import CoffeeCodingImg from "../../assets/BlogPage/Coffee & Coding.webp";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Brewing Espresso",
    date: "March 10, 2026",
    author: "Cafe Team",
    description:
      "Espresso is more than just coffee — it’s an art form. Discover how our baristas craft the perfect shot with precision and passion.",
    img: BrewingImg,
    content:
      "Full article about brewing espresso... (yaha tum apna pura blog likh sakte ho).",
  },
  {
    id: 2,
    title: "Why Cold Brew is Trending",
    date: "March 15, 2026",
    author: "Cafe Team",
    description:
      "Cold Brew has taken the coffee world by storm. Learn why this smooth, refreshing drink is perfect for summer days.",
    img: ColdBrewImg,
    content:
      "Full article about cold brew... (yaha tum apna pura blog likh sakte ho).",
  },
  {
    id: 3,
    title: "Coffee & Coding: A Perfect Match",
    date: "March 20, 2026",
    author: "Cafe Team",
    description:
      "Our café is a hub for coders and creators. Explore how coffee fuels creativity and productivity in the digital age.",
    img: CoffeeCodingImg,
    content:
      "Full article about coffee & coding... (yaha tum apna pura blog likh sakte ho).",
  },
];

const BlogPage = () => {
  const navigate = useNavigate();

  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`, { state: post }); // navigate with blog data
  };

  return (
    <div
      id="blog"
      className="min-h-screen bg-gradient-to-br from-brandDark via-[#3d2517] to-black py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-5xl font-bold font-cursive text-white drop-shadow-lg">
            Coffee Blog
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to our café’s storytelling corner. Here you’ll find brewing
            secrets, coffee trends, and inspiring tales of how coffee fuels
            creativity. Every post is freshly crafted to give you insights,
            tips, and a taste of the coffee culture we love.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-500"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {post.date} • By {post.author}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {post.description}
                </p>
                <button
                  onClick={() => handleReadMore(post)}
                  className="mt-4 bg-gradient-to-r from-[#D4AF37] to-[#c69c6d] text-black font-semibold py-2 px-5 rounded-full shadow-lg hover:scale-110 transition duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;