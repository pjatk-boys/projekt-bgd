import { Discipline } from "models/disciplines.d";
import soccerIcon from "../assets/images/disciplines/soccer.png";
import tennisIcon from "../assets/images/disciplines/tennis.png";
import mmaIcon from "../assets/images/disciplines/mma.png";
import defaultIcon from "../assets/images/disciplines/default.png";

export const getDisciplineIcon = (discipline: Discipline): string => {
  switch (discipline) {
    case Discipline["TENNIS"]:
      return tennisIcon;
    case Discipline["SOCCER"]:
      return soccerIcon;
    case Discipline["MMA"]:
      return mmaIcon;
    default:
      return defaultIcon;
  }
};
