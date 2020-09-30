const news = {
  posts(parent, args, { prisma, request }, info) {
    return prisma.query.posts(
      {
        orderBy: args.orderBy,
        where: {
          postType: args.postType,
        },
      },
      info
    );
  },

  post(parent, args, { prisma, request }, info) {
    return prisma.query.post(
      {
        where: {
          slug: args.slug,
        },
      },
      info
    );
  },
};

export default news;
