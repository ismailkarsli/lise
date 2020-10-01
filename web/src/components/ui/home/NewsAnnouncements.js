import React from "react";
import { Link } from "react-router-dom";
import { BsCalendar } from "react-icons/bs";
import day from "dayjs";
import "dayjs/locale/tr";
import { GET_POSTS } from "../../../gql/posts/query";
import Loading from "../../ui/Loading";
import { useQuery } from "@apollo/client";

export default () => {
  day.locale("tr");
  const {
    data: newsData,
    error: newsError,
    loading: newsLoading,
  } = useQuery(GET_POSTS, { variables: { postType: "NEWS" } });
  const {
    data: annsData,
    error: annsError,
    loading: annsLoading,
  } = useQuery(GET_POSTS, { variables: { postType: "ANNOUNCEMENT" } });

  if (newsLoading || annsLoading) {
    return <Loading />;
  } else if (newsError || annsError) {
    return null;
  }

  return (
    <div className="news-anns-section container">
      <div className="news-anns-section-content">
        <div>
          <h2>Haberler</h2>
          <div className="news-anns-list">
            {newsData.posts.length > 0
              ? newsData.posts.map((post) => {
                  return (
                    <div className="list-item" key={post.id}>
                      <div className="image-container">
                        <Link to={`/haberler/${post.slug}`}>
                          <img
                            src={`${
                              post.photo
                                ? `${process.env.REACT_APP_GRAPHQL_SERVER}images/0/0/${post.photo}`
                                : "/images/placeholder-1.png"
                            }`}
                            alt={post.title}
                          />
                        </Link>
                      </div>
                      <div className="item-meta-info">
                        <h3>
                          <Link
                            to={`/haberler/${post.slug}`}
                            className="item-title"
                          >
                            {post.title}
                          </Link>
                        </h3>
                        <div className="date">
                          <time dateTime={post.publishedAt}>
                            <BsCalendar />{" "}
                            {day(post.publishedAt).format("DD MMMM YYYY")}
                          </time>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>

        <div>
          <h2>Duyurular</h2>
          <div className="news-anns-list">
            {annsData.posts.length > 0
              ? annsData.posts.map((post) => {
                  return (
                    <div className="list-item" key={post.id}>
                      <div className="image-container">
                        <Link to={`/haberler/${post.slug}`}>
                          <img
                            src={`${
                              post.photo
                                ? `${process.env.REACT_APP_GRAPHQL_SERVER}images/0/0/${post.photo}`
                                : "/images/placeholder-1.png"
                            }`}
                            alt={post.title}
                          />
                        </Link>
                      </div>
                      <div className="item-meta-info">
                        <h3>
                          <Link
                            to={`/haberler/${post.slug}`}
                            className="item-title"
                          >
                            {post.title}
                          </Link>
                        </h3>
                        <div className="date">
                          <time dateTime={post.publishedAt}>
                            <BsCalendar />{" "}
                            {day(post.publishedAt).format("DD MMMM YYYY")}
                          </time>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
