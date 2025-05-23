import user from "./mutation/user";
import post from "./mutation/post";
import photo from "./mutation/photo";
import siteSettings from "./mutation/siteSettings";
import links from "./mutation/links";

const mutations = {
  ...user,
  ...post,
  ...photo,
  ...siteSettings,
  ...links,
};

export default mutations;
