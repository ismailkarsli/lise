import getUserData from "./../../utils/getUserData";

const siteSettings = {
  async updateSiteSettings(parent, args, { prisma, request }, info) {
    const user = getUserData(request, true);

    const currentSettingsId = await prisma.query.siteSettingses({}, `{id}`);

    if (!currentSettingsId[0]) {
      return prisma.mutation.createSiteSettings(
        {
          data: {
            ...args.data,
          },
        },
        info
      );
    }

    return prisma.mutation.updateSiteSettings(
      {
        where: {
          id: currentSettingsId[0].id,
        },
        data: {
          ...args.data,
        },
      },
      info
    );
  },
};

export default siteSettings;
