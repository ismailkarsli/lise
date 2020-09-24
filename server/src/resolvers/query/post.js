const post = {
  posts(parent, args, { prisma, request }, info) {
    return prisma.query.posts(
      {
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
          id: args.id,
        },
      },
      info
    );
  },
};

export default post;
