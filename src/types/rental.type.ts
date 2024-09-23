import { TBike } from "./bike.types";
import { TUser } from "./user.type";

export type TRental = {
  bikeId: TBike;
  isPaid: boolean;
  isReturned: boolean;
  returnTime: string;
  startTime: string;
  totalCost: number;
  userId: TUser;
  _id: string;
};