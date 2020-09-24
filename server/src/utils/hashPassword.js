import bcrypt from "bcryptjs";

const hashPassword = (password) => {
  if (password < 8) {
    throw new Error("Parola 8 karakterden fazla olmalıdır.");
  }

  return bcrypt.hash(password, 10);
};

export default hashPassword;
