import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import htmlParser from "html-react-parser";
import React from "react";
import day from "dayjs";
import "dayjs/locale/tr";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

import { GET_POST } from "../../gql/posts/query";

const News = () => {
  const params = useParams();
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
      {post.photo && (
        <div className="post-photo">
          <img
            src={`${process.env.REACT_APP_GRAPHQL_SERVER}images/0/0/${post.photo}`}
            alt={post.title}
          />
        </div>
      )}

      <div>{day(post.publishedAt).format("DD MMM YYYY")}</div>
      <h1>
        <div>{post.title}</div>
      </h1>
      <div>{htmlParser(content)}</div>
    </div>
  );
};

export default News;
