import user from "./query/user";
import post from "./query/post";
import event from "./query/event";
import siteSettings from "./query/siteSettings";
import links from "./query/links";

const queries = {
  ...user,
  ...post,
  ...event,
  ...siteSettings,
  ...links,
};

export default queries;
