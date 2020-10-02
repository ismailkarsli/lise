const news = {
  posts(parent, args, { prisma, request }, info) {
    let whereQuery;
    if (args.where) {
      try {
        whereQuery = JSON.parse(args.where);
      } catch (error) {
        throw new Error("Geçersiz istek.");
      }
    }

    return prisma.query.posts(
      {
        where: whereQuery,
        orderBy: args.orderBy,
        skip: args.skip,
        first: args.first,
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
          AND: [{ inSlide: true }, { publishDate_lte: new Date() }],
        },
        first: 8,
      },
      info
    );
  },
};

export default news;
