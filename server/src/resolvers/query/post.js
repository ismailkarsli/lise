const news = {
  posts(parent, args, { prisma, request }, info) {
    return prisma.query.posts(
      {
        orderBy: args.orderBy,
        skip: args.skip,
        first: args.first,
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

  slides(parent, args, { prisma, request }, info) {
    return prisma.query.posts(
      {
        orderBy: "publishDate_DESC",
        where: {
          inSlide: true,
        },
        first: 8,
      },
      info
    );
  },
};

export default news;
