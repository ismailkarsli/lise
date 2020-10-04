import { useLazyQuery } from "@apollo/client";
import { Link, useRouteMatch } from "react-router-dom";
import htmlParser from "html-react-parser";
import React from "react";
import day from "dayjs";
import duration from "dayjs/plugin/duration";
import "dayjs/locale/tr";
import Loading from "../ui/Loading";
import { useHistory } from "react-router-dom";
import Error from "../ui/Error";

import { GET_POSTS } from "../../gql/posts/query";

const News = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [date] = React.useState(day());
  day.locale("tr");
  day.extend(duration);

  const pageType = match.params.type;
  const postType =
    pageType === "haberler"
      ? "NEWS"
      : pageType === "duyurular"
      ? "ANNOUNCEMENT"
      : pageType === "etkinlikler"
      ? "EVENT"
      : undefined;

  const [getPosts, { data, loading, error }] = useLazyQuery(GET_POSTS, {
    variables: {
      orderBy: "publishDate_DESC",
      where: JSON.stringify({
        postType: postType,
        publishDate_lte: date,
      }),
    },
  });

  React.useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading || !data) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  return (
    <div className="main-container">
      <h2 className="page-title">
        {pageType ? pageType[0].toUpperCase() + pageType.slice(1) : "Tümü"}
      </h2>
      <div className="sub-nav-menu container">
        <button
          style={{
            backgroundColor: pageType === undefined ? "rgb(209 81 78)" : "",
          }}
          onClick={() => {
            history.push("/bilgi/");
          }}
        >
          Tümü
        </button>
        <button
          style={{
            backgroundColor: pageType === "haberler" ? "rgb(209 81 78)" : "",
          }}
          onClick={(e) => {
            history.push("/bilgi/haberler");
          }}
        >
          Haberler
        </button>
        <button
          style={{
            backgroundColor: pageType === "duyurular" ? "rgb(209 81 78)" : "",
          }}
          onClick={() => {
            history.push("/bilgi/duyurular");
          }}
        >
          Duyurular
        </button>
        <button
          style={{
            backgroundColor: pageType === "etkinlikler" ? "rgb(209 81 78)" : "",
          }}
          onClick={() => {
            history.push("/bilgi/etkinlikler");
          }}
        >
          Etkinlikler
        </button>
      </div>
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

          let postDate = "";

          if (post.startDate) {
            postDate += day(post.startDate).format("DD MMMM YYYY");
            if (post.endDate) {
              const difference = day(post.endDate).diff(day(post.startDate));
              const duration = day.duration(difference).$d;
              let endDateFormatted = "";
              if (difference) {
                endDateFormatted = `
                ${duration.days ? duration.days + " gün" : ""}
                ${duration.hours ? duration.hours + " saat" : ""}
                ${duration.minutes ? duration.minutes + " dakika" : ""}
                sürecek
                `.trim();
                postDate += " - " + endDateFormatted;
              }
            }
          } else {
            postDate += day(post.publishDate).format("DD MMMM YYYY");
          }

          return (
            <div key={post.id} className="timeline-item">
              <div className="item-photo">
                <Link
                  to={`${
                    pageType || post.postType === "NEWS"
                      ? "haberler"
                      : post.postType === "ANNOUNCEMENT"
                      ? "duyurular"
                      : post.postType === "EVENT"
                      ? "etkinlikler"
                      : undefined
                  }/${post.slug}`}
                >
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
              <div className="item-meta" date-is={postDate}>
                <h1>
                  <Link
                    to={`${
                      pageType || post.postType === "NEWS"
                        ? "haberler"
                        : post.postType === "ANNOUNCEMENT"
                        ? "duyurular"
                        : post.postType === "EVENT"
                        ? "etkinlikler"
                        : undefined
                    }/${post.slug}`}
                  >
                    {post.title}
                  </Link>
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
