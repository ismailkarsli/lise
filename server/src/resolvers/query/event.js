const events = {
  events(parent, args, { prisma, request }, info) {
    return prisma.query.events(
      {
        orderBy: args.orderBy,
      },
      info
    );
  },

  event(parent, args, { prisma, request }, info) {
    return prisma.query.event(
      {
        where: {
          slug: args.slug,
        },
      },
      info
    );
  },
};

export default events;
