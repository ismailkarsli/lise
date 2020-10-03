import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import htmlParser from "html-react-parser";
import React from "react";
import day from "dayjs";
import "dayjs/locale/tr";
import Loading from "../ui/Loading";
import Sidebar from "../ui/post/Sidebar";
import Error from "../ui/Error";

import { GET_POST } from "../../gql/posts/query";

const News = () => {
  const params = useParams();
  const postType =
    params.type === "haberler"
      ? "NEWS"
      : params.type === "duyurular"
      ? "ANNOUNCEMENT"
      : params.type === "etkinlikler"
      ? "EVENT"
      : undefined;

  day.locale("tr");
  const { data, loading, error } = useQuery(GET_POST, {
    variables: { slug: params.slug },
  });

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  let post = data.post;
  let content = post.content.replaceAll(
    "---SERVER-HOST---",
    process.env.REACT_APP_GRAPHQL_SERVER
  );

  return (
    <div className="post-single main-container container">
      <div className="post-single-content">
        {post.photo && (
          <div
            className="post-photo"
            style={{ borderBottom: "2px solid black" }}
          >
            <img
              src={`${process.env.REACT_APP_GRAPHQL_SERVER}images/0/0/${post.photo}`}
              alt={post.title}
            />
          </div>
        )}
        <h1 className="post-title">{post.title}</h1>
        <div className="post-date">
          {day(post.publishDate).format("DD MMMM YYYY")}
        </div>

        <div>{htmlParser(content)}</div>
      </div>
      <Sidebar
        title={"Son " + params.type[0].toUpperCase() + params.type.slice(1)}
        postType={postType}
        pageType={params.type}
        currentPostID={post.id}
      />
    </div>
  );
};

export default News;
