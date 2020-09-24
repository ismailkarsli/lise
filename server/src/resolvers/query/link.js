const link = {
  links(parent, args, { prisma, request }, info) {
    return prisma.query.links({}, info);
  },

  link(parent, args, { prisma, request }, info) {
    return prisma.query.link(
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
