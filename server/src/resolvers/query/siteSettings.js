const siteSettings = {
  async siteSettings(parent, args, { prisma, request }, info) {
    const settings = await prisma.query.siteSettingses({}, info);
    if (settings[0]) {
      return settings[0];
    }
    return prisma.mutation.createSiteSettings(
      {
        data: {
          name: "Lise",
        },
      },
      info
    );
  },
};

export default siteSettings;
