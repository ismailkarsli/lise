import getUserData from "./../../utils/getUserData";

export default {
  updateSiteSettings(parent, args, { prisma, request }, info) {
    const user = getUserData(request);

    const currentSettingsId = prisma.query.siteSettingses({}, `id`);

    if (settings[0]) {
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
