import getUserData from "./../../utils/getUserData";
import getSlug from "speakingurl";

const post = {
  createPost(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    const categoryId = args.category;
    return prisma.mutation.createPost(
      {
        data: {
          ...args.data,
          slug: getSlug(args.data.title),
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

  async updatePost(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    let slug = undefined;

    if (args.data.title) {
      slug = getSlug(args.data.title);
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
  async deletePost(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    return prisma.mutation.deletePost({
      where: {
        id: args.id,
      },
    });
  },
};

export default post;
