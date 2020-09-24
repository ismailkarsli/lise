import getUserData from "./../../utils/getUserData";
import getSlug from "speakingurl";

const post = {
  createPost(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    return prisma.mutation.createPost(
      {
        data: {
          ...args.data,
          slug: getSlug(args.data.title, { lang: "tr" }),
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      },
      info
    );
  },

  updatePost(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    let slug = undefined;

    if (args.data.title) {
      slug = getSlug(args.data.title, {
        lang: "tr",
      });
    }

    return prisma.mutation.updatePost({
      where: {
        id: args.id,
      },
      data: {
        ...args.data,
        slug,
      },
    });
  },
  deletePost(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    return prisma.mutation.deletePost({
      where: {
        id: args.id,
      },
    });
  },
};

export default post;
