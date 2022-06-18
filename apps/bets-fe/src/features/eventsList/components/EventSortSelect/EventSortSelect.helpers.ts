import { OrderByModel } from "models/orderBy.d";

export const getOrderByLabel = (orderBy: OrderByModel) =>
  ({
    [OrderByModel.DATE_DESC]: "Dates descending",
    [OrderByModel.DATE_INC]: "Dates ascending",
    [OrderByModel.SCORE_DESC]: "Score descending",
    [OrderByModel.SCORE_INC]: "Score ascending",
  }[orderBy]);
