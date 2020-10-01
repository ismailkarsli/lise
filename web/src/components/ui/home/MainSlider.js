import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../../gql/posts/query";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./../../../styles/swiper-bundle.min.css";

const backgroundImageStyle = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default () => {
  SwiperCore.use([Navigation, Pagination]);
  const { data, loading, error } = useQuery(GET_POSTS);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  return (
    <div className="home-slider">
      {data.posts.length > 0 ? (
        <Swiper
          slidesPerView={1}
          loop
          speed={1000}
          navigation={{ prevEl: "#prev-slide", nextEl: "#next-slide" }}
          pagination={{ el: ".slider-pagination", clickable: true }}
        >
          {data.posts.slice(0, 5).map((post) => {
            const contentClean = post.content.replaceAll(
              /(<table>.*?<\/table>|<[^>]*>|&nbsp;)/g,
              ""
            );

            return (
              <SwiperSlide
                key={post.id}
                style={{
                  background: `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 75%), url('${
                    post.photo
                      ? `${process.env.REACT_APP_GRAPHQL_SERVER}images/0/0/${post.photo}`
                      : "/images/placeholder-1.png"
                  }')`,
                  ...backgroundImageStyle,
                }}
              >
                <div className="slide-content-wrapper container">
                  <div className="slide-content">
                    <h2>{post.title}</h2>
                    <p>
                      {contentClean.length > 120
                        ? contentClean.slice(0, 120) + "..."
                        : contentClean}
                    </p>
                    <Link to={`/haberler/${post.slug}`} className="read-more">
                      Devamını oku
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="slider-hover container">
            <div className="slider-pagination"></div>
            <div className="slider-navigation">
              <div id="prev-slide">
                <AiOutlineArrowLeft size="48" />
              </div>
              <div id="next-slide">
                <AiOutlineArrowRight size="48" />
              </div>
            </div>
          </div>
        </Swiper>
      ) : (
        <Swiper slidesPerView={1}>
          <SwiperSlide
            style={{
              background: `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 75%), url('/images/placeholder-1.png')`,
              ...backgroundImageStyle,
            }}
          ></SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};
