import { useQuery } from "@apollo/client";
import { Link, useRouteMatch } from "react-router-dom";
import htmlParser from "html-react-parser";
import React, { useState } from "react";
import day from "dayjs";
import "dayjs/locale/tr";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

import { GET_POSTS } from "../../gql/posts/query";

const News = () => {
  const match = useRouteMatch();
  day.locale("tr");
  const [postType, setPostType] = useState(undefined);
  const { data, loading, error } = useQuery(GET_POSTS, {
    variables: { postType: postType, orderBy: "publishDate_DESC" },
  });

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  return (
    <div className="main-container">
      <h2 className="page-title">Haberler</h2>
      <button
        onClick={() => {
          setPostType(undefined);
        }}
      >
        Tümü
      </button>
      <button
        onClick={() => {
          setPostType("NEWS");
        }}
      >
        Haberler
      </button>
      <button
        onClick={() => {
          setPostType("ANNOUNCEMENT");
        }}
      >
        Duyurular
      </button>

      <div className="timeline container">
        {data.posts.map((post) => {
          if (day(post.publishDate).isAfter(day(Date()))) {
            return null;
          }
          let content = htmlParser(
            post.content
              .replaceAll(
                "---SERVER-HOST---",
                process.env.REACT_APP_GRAPHQL_SERVER
              )
              .replaceAll(/(<table>.*?<\/table>|<[^>]*>|&nbsp;)/g, "")
          );

          return (
            <div key={post.id} className="timeline-item">
              <div className="item-photo">
                <Link to={`${match.url}/${post.slug}`}>
                  <img
                    src={
                      post.photo
                        ? `${process.env.REACT_APP_GRAPHQL_SERVER}images/320/256/${post.photo}`
                        : "/images/placeholder-1.png"
                    }
                    alt={post.title}
                  />
                </Link>
              </div>
              <div
                className="item-meta"
                date-is={day(post.publishedAt).format("DD MMM YYYY")}
              >
                <h1>
                  <Link to={`${match.url}/${post.slug}`}>{post.title}</Link>
                </h1>
                <div>
                  {content.length > 320
                    ? content.slice(0, 320) + "..."
                    : content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
