// ./@types/express/index.ts

import IUser from "./src/models/User/IUserDocument";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
