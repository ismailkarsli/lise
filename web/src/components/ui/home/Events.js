import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import day from "dayjs";
import duration from "dayjs/plugin/duration";
import "dayjs/locale/tr";
import Loading from "../Loading";
import Error from "../Error";
import { GET_POSTS } from "../../../gql/posts/query";
import "./../../../styles/swiper-bundle.min.css";
import { useQuery } from "@apollo/client";

export default () => {
  day.locale("tr");
  day.extend(duration);
  const [date] = React.useState(day());
  const { data, loading, error } = useQuery(GET_POSTS, {
    variables: {
      orderBy: "publishDate_DESC",
      first: 4,
      where: JSON.stringify({
        AND: [{ postType: "EVENT" }, { publishDate_lte: date }],
      }),
    },
  });

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  return (
    <div className="events container">
      <div className="events-content">
        <h2>Etkinlikler</h2>
        <Swiper
          slidesPerView={1}
          simulateTouch={false}
          breakpoints={{
            768: { slidesPerView: "2" },
            1024: { slidesPerView: "3", simulateTouch: "true" },
          }}
        >
          {data.posts.slice(0, 3).map((post) => {
            const duration = day.duration(
              day(post.endDate).diff(day(post.startDate))
            ).$d;

            const endDateFormatted = `
                ${duration.days ? duration.days + " gn" : ""}
                ${duration.hours ? duration.hours + " sa" : ""}
                ${duration.minutes ? duration.minutes + " dk" : ""}
                `;

            return (
              <SwiperSlide key={post.id}>
                <div className="event-slide-content">
                  <time
                    className="event-date"
                    dateTime="2020-09-24T07:32:15+03:00"
                  >
                    <span className="day">{day(post.startDate).date()}</span>
                    <span className="year-month">
                      {day(post.startDate).format("MMMM YYYY")}
                    </span>
                  </time>
                  <Link to="/">
                    <h3>{post.title}</h3>
                  </Link>
                  <div className="event-time">
                    {day(post.startDate).format("HH:mm")} -{" "}
                    {endDateFormatted.trim()}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
