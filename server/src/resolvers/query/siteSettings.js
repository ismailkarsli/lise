const siteSettings = {
  siteSettings(parent, args, { prisma, request }, info) {
    return prisma.query.siteSettings({}, info);
  },
};

export default siteSettings;
