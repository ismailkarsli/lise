import user from "./mutation/user";
import news from "./mutation/news";
import announcement from "./mutation/announcement";
import event from "./mutation/event";
import photo from "./mutation/photo";
import siteSettings from "./mutation/siteSettings";

const mutations = {
  ...user,
  ...news,
  ...announcement,
  ...event,
  ...photo,
  ...siteSettings,
};

export default mutations;
