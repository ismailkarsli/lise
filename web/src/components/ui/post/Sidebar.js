import React from "react";
import { GET_POSTS } from "../../../gql/posts/query";
import { useQuery } from "@apollo/client";
import day from "dayjs";
import Loading from "../Loading";
import Error from "../Error";
import { Link } from "react-router-dom";

export default (props) => {
  const [date] = React.useState(day());
  const { data, loading, error } = useQuery(GET_POSTS, {
    variables: {
      orderBy: "publishDate_DESC",
      first: 15,
      where: JSON.stringify({
        postType: props.postType || undefined,
        publishDate_lte: date,
      }),
    },
  });

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  return (
    <div className="post-single-sidebar">
      {data.posts.length > 1 ? (
        <React.Fragment>
          <h2 className="sidebar-title">{props.title || "Son Haberler"}</h2>
          <ul className="posts">
            {data.posts.map((post) => {
              if (post.id === props.currentPostID) {
                return null;
              }
              return (
                <li key={post.id}>
                  <Link to={`/bilgi/${props.pageType}/${post.slug}`}>
                    {post.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
};
