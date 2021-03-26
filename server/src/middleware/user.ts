import { RequestHandler, Request, Response } from "express";

export const isLoggedIn = (req: Request, res: Response, next: any) => {
    if (req.isAuthenticated() ) {
      next();
    } else {
      res.status(401).send('Not Logged In');
    }
  };
