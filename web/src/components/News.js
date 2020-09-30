import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POSTS } from "../gql/posts/query";

const News = () => {
  const { data, loading, error } = useQuery(GET_POSTS, {
    variables: { postType: "NEWS", orderBy: "publishDate_DESC" },
  });

  if (loading) {
    return <div>Yükleniyor</div>;
  } else if (error) {
    return <div>Hata</div>;
  }

  return (
    <div className="main-container">
      <h2 className="page-title">Haberler</h2>
      <div className="timeline container">
        {data.posts.map((post) => {
          let postContent = post.content.replaceAll(
            "---SERVER-HOST---",
            process.env.REACT_APP_GRAPHQL_SERVER
          );
          postContent = RegExp(/<*?>/, "gmi").exec(postContent);
          return (
            <div key={post.id} className="timeline-item">
              <div className="item-photo">
                <img src="https://picsum.photos/1500/800" alt="Phosto" />
              </div>
              <div className="item-meta" date-is="28 Eylül 2020">
                <h1>Arcu odio ut sem nulla pharetra diam sit amet.</h1>
                <div>{postContent} </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
