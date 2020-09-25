import getUserData from "./../../utils/getUserData";
import getSlug from "speakingurl";

const event = {
  createEvent(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    return prisma.mutation.createEvent(
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

  updateEvent(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    let slug = undefined;

    if (args.data.title) {
      slug = getSlug(args.data.title, {
        lang: "tr",
      });
    }

    return prisma.mutation.updateEvent(
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

  deleteEvent(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    return prisma.mutation.deleteEvent(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },
};

export default event;
