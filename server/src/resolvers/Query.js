import user from "./query/user";
import news from "./query/news";
import announcement from "./query/announcement";
import event from "./query/event";
import siteSettings from "./query/siteSettings";
import links from "./query/links";

const queries = {
  ...user,
  ...news,
  ...announcement,
  ...event,
  ...siteSettings,
  ...links,
};

export default queries;
