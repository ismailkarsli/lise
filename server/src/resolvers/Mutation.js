import userMutation from "./mutation/user";
import postMutation from "./mutation/post";
import photoMutation from "./mutation/photo";
import linkMutation from "./mutation/link";
import siteSettingsMutation from "./mutation/siteSettings";

const Mutation = {
  ...userMutation,
  ...postMutation,
  ...photoMutation,
  ...linkMutation,
  ...siteSettingsMutation,
};

export default Mutation;
