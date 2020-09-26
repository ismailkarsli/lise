const announcement = {
  announcements(parent, args, { prisma, request }, info) {
    return prisma.query.announcements({ orderBy: args.orderBy }, info);
  },

  announcement(parent, args, { prisma, request }, info) {
    return prisma.query.announcement(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },
};

export default announcement;
