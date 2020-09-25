import getUserData from "./../../utils/getUserData";
import getSlug from "speakingurl";

const news = {
  createNew(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    return prisma.mutation.createNew(
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

  updateNew(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    let slug = undefined;

    if (args.data.title) {
      slug = getSlug(args.data.title, {
        lang: "tr",
      });
    }

    return prisma.mutation.updateNew(
      {
        where: {
          id: args.id,
        },
        data: {
          ...args.data,
          slug,
        },
      },
      info
    );
  },

  deleteNew(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    return prisma.mutation.deleteNew(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },
};

export default news;
