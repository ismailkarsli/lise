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
  const [currentTime] = React.useState(day());
  const { data: newsData, error: newsError, loading: newsLoading } = useQuery(
    GET_POSTS,
    {
      variables: {
        orderBy: "publishDate_DESC",
        where: JSON.stringify({
          publishDate_lte: currentTime,
          postType: "NEWS",
        }),
        first: 4,
      },
    }
  );

  const { data: annsData, error: annsError, loading: annsLoading } = useQuery(
    GET_POSTS,
    {
      variables: {
        orderBy: "publishDate_DESC",
        where: JSON.stringify({
          publishDate_lte: currentTime,
          postType: "ANNOUNCEMENT",
        }),
        first: 4,
      },
    }
  );

  if (newsLoading || annsLoading) {
    return <Loading />;
  } else if (newsError || annsError) {
    return null;
  }

  return (
    <div className="news-anns-section container">
      <div className="news-anns-section-content">
        <div>
          <h2>
            <Link to="/haberler/">Haberler</Link>
          </h2>
          <div className="news-anns-list">
            {newsData.posts.length > 0 ? (
              newsData.posts.map((post) => {
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
                        <time dateTime={post.publishDate}>
                          {day(post.publishDate).format("DD MMMM YYYY")}
                        </time>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ padding: "12px" }}>Henüz haber eklenmemiş.</div>
            )}
          </div>
        </div>

        <div>
          <h2>
            <Link to="/haberler">Duyurular</Link>
          </h2>
          <div className="news-anns-list">
            {annsData.posts.length > 0 ? (
              annsData.posts.map((post) => {
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
                        <time dateTime={post.publishDate}>
                          <BsCalendar />{" "}
                          {day(post.publishDate).format("DD MMMM YYYY")}
                        </time>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ padding: "12px" }}>Henüz duyuru eklenmemiş.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
