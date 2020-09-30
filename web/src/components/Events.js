import React from "react";
import { GET_EVENTS } from "../gql/events/query";
import day from "dayjs";
import duration from "dayjs/plugin/duration";
import "dayjs/locale/tr";
import { BsCalendar } from "react-icons/bs";
import { useQuery } from "@apollo/client";

const Events = () => {
  day.locale("tr");
  day.extend(duration);
  const { data, loading, error } = useQuery(GET_EVENTS);

  if (loading) {
    return <div>Yükleniyor</div>;
  } else if (error) {
    return <div>Hata</div>;
  }

  return (
    <div className="event container main-container">
      <h2 className="page-title">Etkinlikler</h2>
      <div className="event-list">
        {data.events.map((event) => {
          let postContent = event.content
            .replaceAll(
              "---SERVER-HOST---",
              process.env.REACT_APP_GRAPHQL_SERVER
            )
            .replaceAll(/<[^>]*>/g, "")
            .slice(0, 320);

          const startDate = day(event.startDate);
          const endDate = day(event.endDate);

          const duration = day.duration(endDate.diff(startDate)).$d;
          console.log(duration);

          const endDateFormatted = `
                ${duration.days ? duration.days + " gn" : ""}
                ${duration.hours ? duration.hours + " sa" : ""}
                ${duration.minutes ? duration.minutes + " dk" : ""}
                `;
          return (
            <div key={event.id} className="list-item">
              <div className="item-photo">
                <img
                  src={
                    event.photo
                      ? `${process.env.REACT_APP_GRAPHQL_SERVER}images/320/256/${event.photo}`
                      : "/images/placeholder-1.png"
                  }
                  alt={event.title}
                />
              </div>
              <div className="item-meta">
                <h3 className="meta-title">{event.title}</h3>
                <div className="meta-date">
                  {event.startDate && (
                    <time
                      className="start-date"
                      dateTime={day(event.startDate).format("DD MMM YYYY")}
                    >
                      <BsCalendar />{" "}
                      {day(event.startDate).format("DD MMM YYYY")}
                    </time>
                  )}

                  {endDateFormatted && "- " + endDateFormatted}
                </div>
                <div className="meta-description">{postContent}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
