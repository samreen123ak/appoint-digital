import { Plus, Search, Heart } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    date: "20 Jun 2024",
    title: "Richard Norton photorealistic rendering as real photos",
    description:
      "Easily apply the image style to your own photo in just one click.",
    author: "Peter Rowardson",
    likes: 120,
    image: "/images/cardimg1.svg",
  },
  {
    id: 2,
    date: "21 Jun 2024",
    title: "Richard Norton photorealistic rendering as real photos",
    description: "Why photos cant always be trusted to portray reality.",
    author: "Peter Rowardson",
    likes: 98,
    image: "/images/cardimg2.svg",
  },
  {
    id: 3,
    date: "22 Jun 2024",
    title: "Richard Norton photorealistic rendering as real photos",
    description: "Every image can be modified for perception shift.",
    author: "Peter Rowardson",
    likes: 143,
    image: "/images/cardimg3.svg",
  },
  {
    id: 4,
    date: "22 Jun 2024",
    title: "Richard Norton photorealistic rendering as real photos",
    description: "Every image can be modified for perception shift.",
    author: "Peter Rowardson",
    likes: 143,
    image: "/images/cardimg4.svg",
  },
  {
    id: 5,
    date: "22 Jun 2024",
    title: "Richard Norton photorealistic rendering as real photos",
    description: "Every image can be modified for perception shift.",
    author: "Peter Rowardson",
    likes: 143,
    image: "/images/cardimg5.svg",
  },
];

export default function DigitalWorldSection() {
  return (
    <section className="relative bg-black text-white">
      <div className="relative px-6 md:px-20 py-16">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-wide">
            Learn Everything
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Your Next Big Move in the Digital World
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            With Appoint Digital, you can easily stay aware of all the updates
            in the marketing domain. So what are you waiting for? Stay ahead
            with insights that drive smarter decisions and real growth.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Sidebar */}
          <div className="">
            <h3 className="font-semibold mb-6">Stay up-to-date</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                "Digital Marketing",
                "Web Development",
                "SEO",
                "UI/UX",
                "Brand Identity",
                "Technology",
                "Innovation",
                "Trends",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2  border-gray-800 pb-2"
                >
                  <Plus size={12} className="text-gray-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Search Box */}
            <div className="mt-3 relative">
              <Search
                size={14}
                className="absolute  top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search Topics"
                className="w-full pl-5 pr-4 py-2    text-white  focus:outline-none "
              />
            </div>
          </div>

          {/* Articles Section */}
          <div className="md:col-span-3 space-y-10 ">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col md:flex-row gap-6  border-gray-800 pb-6"
              >
                {/* Article Image */}
                <div className="w-full md:w-1/3">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="rounded-lg object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="flex-1 flex flex-col">
                  {/* Date */}
                  <p className="text-sm text-white">{article.date}</p>

                  {/* Title + Subtitle */}
                  <h4 className="text-md font-semibold mt-1 w-60 text-gray-500">
                    {article.title}
                  </h4>
                  <p className="text-white mt-2 w-60 text-sm">
                    {article.description}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-800 my-4"></div>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between text-sm text-white">
                    <span>{article.author}</span>
                    <div className="flex items-center gap-2">
                      <Heart
                        size={16}
                        className="text-gray-400 hover:text-red-500 cursor-pointer"
                      />
                      <span>{article.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
