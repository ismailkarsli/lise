import userQuery from "./query/user";
import postQuery from "./query/post";
import linkQuery from "./query/link";
import siteSettingsQuery from "./query/siteSettings";
const Query = {
  ...userQuery,
  ...postQuery,
  ...linkQuery,
  ...siteSettingsQuery,
};

export default Query;
