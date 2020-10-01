import user from "./query/user";
import post from "./query/post";
import siteSettings from "./query/siteSettings";
import links from "./query/links";

const queries = {
  ...user,
  ...post,
  ...siteSettings,
  ...links,
};

export default queries;
