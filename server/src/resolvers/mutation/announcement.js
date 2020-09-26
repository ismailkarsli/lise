import getUserData from "./../../utils/getUserData";
import getSlug from "speakingurl";

const announcements = {
  createAnnouncement(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    if (!args.data.publishDate) {
      args.data.publishDate = new Date();
    }

    return prisma.mutation.createAnnouncement(
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

  updateAnnouncement(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    let slug = undefined;

    if (args.data.title) {
      slug = getSlug(args.data.title, {
        lang: "tr",
      });
    }

    return prisma.mutation.updateAnnouncement(
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

  deleteAnnouncement(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    return prisma.mutation.deleteAnnouncement(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },
};

export default announcements;
