import bcrypt from "bcryptjs";
import hashPassword from "./../../utils/hashPassword";
import generateToken from "./../../utils/generateToken";
import getUserData from "./../../utils/getUserData";

const user = {
  async createUser(parent, args, { request, prisma }, info) {
    const user = getUserData(request, true);
    args.data.password = await hashPassword(args.data.password);
    return prisma.mutation.createUser(
      {
        data: args.data,
      },
      info
    );
  },

  async updateUser(parent, args, { request, prisma }, info) {
    const user = getUserData(request);

    if (args.data.password) {
      args.data.password = await hashPassword(args.data.password);
    }

    if (args.data.userType && user.userType !== "ADMIN") {
      throw new Error("Yönetici yetkisi gereklidir.");
    }

    return prisma.mutation.updateUser(
      {
        where: {
          id: args.id,
        },
        data: args.data,
      },
      info
    );
  },

  deleteUser(parent, args, { request, prisma }, info) {
    const user = getUserData(request, true);
    return prisma.mutation.deleteUser(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },

  async loginUser(parent, args, { request, prisma }, info) {
    const username = args.data.username;
    const password = args.data.password;

    const user = await prisma.query.user(
      {
        where: {
          username,
        },
      },
      null
    );

    if (!user) {
      throw new Error("Kullanıcı adı veya şifre hatalı");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Kullanıcı adı veya şifre hatalı");
    }

    const token = generateToken(user.id, user.userType);

    return {
      user,
      token,
    };
  },
};

export default user;
