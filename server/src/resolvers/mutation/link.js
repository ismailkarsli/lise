import getUserData from "./../../utils/getUserData";

const link = {
  createLink(parent, args, { prisma, request }, info) {
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

  updateLink(parent, args, { prisma, request }, info) {
    const user = getUserData(request);

    return prisma.mutation.updateLink(
      {
        data: {
          ...args.data,
        },
        where: {
          id: args.id,
        },
      },
      info
    );
  },

  deleteLink(parent, args, { prisma, request }, info) {
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

export default link;
