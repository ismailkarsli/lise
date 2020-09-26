const event = {
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
          id: args.id,
        },
      },
      info
    );
  },
};

export default event;
