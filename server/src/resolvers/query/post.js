const post = {
  posts(parent, args, { prisma, request }, info) {
    let postType = {};
    if (args.postType) {
      postType.where = {
        postType: args.postType,
      };
    }
    return prisma.query.posts(
      {
        postType,
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
