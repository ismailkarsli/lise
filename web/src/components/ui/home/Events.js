import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
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
  SwiperCore.use([Pagination]);
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
    <React.Fragment>
      {data.posts.length > 0 ? (
        <div className="events container">
          <div className="events-content">
            <h2>Etkinlikler</h2>
            <Swiper
              slidesPerView={1}
              simulateTouch={false}
              pagination={{ el: ".slider-pagination", clickable: true }}
              breakpoints={{
                768: { slidesPerView: "2" },
                1024: {
                  slidesPerView: "3",
                  simulateTouch: "true",
                },
              }}
            >
              {data.posts.slice(0, 3).map((post) => {
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
                }

                return (
                  <SwiperSlide key={post.id}>
                    <div className="event-slide-content">
                      <time
                        className="event-date"
                        dateTime="2020-09-24T07:32:15+03:00"
                      >
                        {post.startDate ? (
                          <React.Fragment>
                            <span className="day">
                              {day(post.startDate).date()}
                            </span>
                            <span className="year-month">
                              {day(post.startDate).format("MMMM YYYY")}
                            </span>
                          </React.Fragment>
                        ) : (
                          <div style={{ height: "28px" }}>
                            Tarih belirtilmemiş
                          </div>
                        )}
                      </time>
                      <Link to={`/bilgi/etkinlikler/${post.slug}`}>
                        <h3>{post.title}</h3>
                      </Link>
                      <div className="event-time">
                        {post.startDate ? (
                          <React.Fragment>
                            {day(post.startDate).format("HH:mm")}
                            {post.endDate && difference !== 0
                              ? " - " + endDateFormatted
                              : ""}
                          </React.Fragment>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="slider-pagination"></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
