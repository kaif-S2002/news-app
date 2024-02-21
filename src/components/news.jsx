import React, { useEffect, useState } from "react";
import Loader from "./loader";
import axios from "axios";

const News = (props) => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  // let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&size=10&language=en&category=${props.categories}`;
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.categories}&apikey=${apiKey}`;
  const altImg =
    "https://marketplace.canva.com/EAE_sZAo4mg/1/0/1600w/canva-dark-blue-red-white-generic-news-general-news-logo-UGXjaAXDCaM.jpg";
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchInfo = async () => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      // setNews(data.results);
      setNews(data.articles);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitalizeFirstLetter(props.categories)} - Newzee`;

  return (
    <>
      {isLoading ? <Loader /> : null}
      <div className="wrapper grid justify-center items-center ">
        <div
          className={`heading ${
            isLoading ? "hidden" : "flex"
          } h-fit pt-5 text-2xl font-semibold tracking-wide text-red-900 max-[360px]:text-xl`}
        >
          {`--Top ${capitalizeFirstLetter(
            props.categories === "top" ? "General" : props.categories
          )} Headlines--`}
        </div>

        <div className="news grid grid-cols-1 gap-x-16 gap-y-10 justify-evenly items-center h-100vh w-100% md:grid-cols-3 md:gap-y-16 md:max-[1020px]:gap-x-4">
          {news.map((ele) => {
            return (
              <>
                <div className="card bg-white w-80 md:max-[1090px]:w-60 max-[360px]:w-64">
                  <div className="img-div">
                    <img
                      // src={ele.image_url === null ? altImg : ele.image_url}
                      src={ele.urlToImage === null ? altImg : ele.urlToImage}
                      className="card-img-top"
                      alt="News Image"
                    />
                  </div>
                  <div className="card-body p-4">
                    <div className="news-text overflow-hidden">
                      <h5 className="card-title text-sm font-bold pb-2">
                        {ele.title.length > 100
                          ? `${ele.title.slice(0, 100)}...`
                          : ele.title}
                      </h5>
                      <p className="card-text text-xs font-base pb-6">
                        {ele.description === null || ele.description === ""
                          ? "Read full content on the news sourced website by click on the 'read more'."
                          : `${ele.description.slice(0, 135)}...`}
                      </p>
                    </div>
                    <div className="btn-div flex justify-between items-center">
                      <a
                        // href={ele.link}
                        href={ele.url}
                        target="_blank"
                        className="news-btn text-base"
                      >
                        Read more
                      </a>
                      <span className="date flex text-[10px] md:max-[1090px]:text-[8px] ">
                        {/* Published At: {ele.pubDate} */}
                        Published At: {ele.publishedAt}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
