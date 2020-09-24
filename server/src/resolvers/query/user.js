const user = {
  users(parent, args, { prisma, request }, info) {
    return prisma.query.users({}, info);
  },

  user(parent, args, { prisma, request }, info) {
    return prisma.query.user(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },
};

export default user;
