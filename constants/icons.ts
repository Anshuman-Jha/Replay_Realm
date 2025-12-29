import arrow from "@/assets/icons/arrow.png";
import home from "@/assets/icons/home.png";
import logo from "@/assets/icons/logo.png";
import person from "@/assets/icons/person.png";
import play from "@/assets/icons/play.png";
import save from "@/assets/icons/save.png";
import search from "@/assets/icons/search.png";
import star from "@/assets/icons/star.png";
import { ImageSourcePropType } from 'react-native';

export type IconTypes = {
  home: ImageSourcePropType;
  search: ImageSourcePropType;
  person: ImageSourcePropType;
  logo: ImageSourcePropType;
  save: ImageSourcePropType;
  star: ImageSourcePropType;
  play: ImageSourcePropType;
  arrow: ImageSourcePropType;
};

export const icons: IconTypes = {
 home:home,
  search:search,
  person:person,
  logo:logo,
  save:save,
  star:star,
  play:play,
  arrow:arrow,
};