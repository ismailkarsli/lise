import jwt from "jsonwebtoken";

const getUserData = (request, requireAdmin = false) => {
  const header = request.request
    ? request.request.headers.authorization
    : request.connection.context.Authorization;

  if (header) {
    const token = header.replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (requireAdmin) {
      if (decoded.userType !== "ADMIN") {
        throw new Error("Yönetici yetkisi gereklidir");
      }
    }

    return { id: decoded.id, userType: decoded.userType };
  }

  throw new Error("Yetkiniz yeterli değil.");
};

export default getUserData;
