const news = {
  news(parent, args, { prisma, request }, info) {
    return prisma.query.news(
      {
        orderBy: args.orderBy,
      },
      info
    );
  },

  new(parent, args, { prisma, request }, info) {
    return prisma.query.new(
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
