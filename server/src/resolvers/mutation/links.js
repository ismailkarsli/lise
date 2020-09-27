import getUserData from "./../../utils/getUserData";

const links = {
  createLink(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    return prisma.mutation.createLink(
      {
        data: {
          ...args.data,
        },
      },
      info
    );
  },

  updateLink(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    return prisma.mutation.updateLink(
      {
        where: {
          id: args.id,
        },
        data: {
          ...args.data,
        },
      },
      info
    );
  },

  deleteLink(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    return prisma.mutation.deleteLink(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },
};

export default links;
