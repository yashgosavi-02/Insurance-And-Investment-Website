const zod = require("zod");

const UserValidation = zod.object({
  First_Name: zod.string.nonempty(),
  Middle_Name: zod.string(),
  Last_Name: zod.string(),
  Username: zod.string.email(),
  Password: zod.string.min(8),
});

const UserLoginValidation = zod.object({
  Username: zod.string.email(),
  Password: zod.string.min(8),
});

const AdminValidation = zod.object({
  Username: zod.string.email(),
  Password: zod.string.min(8),
});

module.exports({
  UserValidation,
  AdminValidation,
});
