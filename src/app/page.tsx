"use client";

import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import CardComponent from "@/components/Card";
import noBgBlack from "@/assets/noBgBlack.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const [techNews, setTechNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [loading, setLoading] = useState(true); // Start with true
  const router = useRouter(); // Initialize Router


  useEffect(() => {
    const fetchNews = async (category) => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`
        );
        const data = await response.json();
        return data.articles.slice(7, 10) || [];
      } catch (error) {
        console.error(`Error fetching ${category} news:`, error);
        return [];
      }
    };

    (async () => {
      setLoading(true);
      const [tech, business, sports] = await Promise.all([
        fetchNews("technology"),
        fetchNews("business"),
        fetchNews("sports"),
      ]);
      setTechNews(tech);
      setBusinessNews(business);
      setSportsNews(sports);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <Loader color="blue" type="dots" />
        </div>
      ) : (
        <div className="flex flex-col gap-y-5" style={{ width: "calc(100vw - 250px)" }}>
          <h2 className="font-semibold">Technology News</h2>
          <div className="flex justify-between">
            {techNews.map((news, index) => (
              <CardComponent
                key={index}
                src={news.urlToImage || noBgBlack}
                title={news.title}
                badge="Technology"
                description={news.description}
                showContinueReading={true}
                index={index}
              />
            ))}
          </div>
          <h2 className="font-semibold">Business News</h2>
          <div className="flex justify-between">
            {businessNews.map((news, index) => (
              <CardComponent
                key={index}
                src={news.urlToImage || noBgBlack}
                title={news.title}
                badge="Business"
                description={news.description}
                showContinueReading={true}
                index={index}
              />
            ))}
          </div>
          <h2 className="font-semibold">Sports News</h2>
          <div className="flex justify-between">
            {sportsNews.map((news, index) => (
              <CardComponent
                key={index}
                src={news.urlToImage || noBgBlack}
                title={news.title}
                badge="Sports"
                description={news.description}
                showContinueReading={true}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
