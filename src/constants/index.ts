import { ISelectOptionValue } from '../components/core';

const FAVORITE_EMPLOYERS_MAX_COUNT: number = 5;

enum GENDERS_ENUM {
  'MALE' = 'Male',
  'FEMALE' = 'Female'
}
enum IMAGES_ENUM {
  'EMPTY' = 'https://cdn3.iconfinder.com/data/icons/rest/30/add_order-512.png',
  'MALE' = 'https://www.w3schools.com/howto/img_avatar.png',
  'FEMALE' = 'https://www.w3schools.com/howto/img_avatar2.png'
}

const GENDERS: ISelectOptionValue[] = [
  { value: GENDERS_ENUM.MALE, label: GENDERS_ENUM.MALE },
  { value: GENDERS_ENUM.FEMALE, label: GENDERS_ENUM.FEMALE }
];

export { FAVORITE_EMPLOYERS_MAX_COUNT, GENDERS, GENDERS_ENUM, IMAGES_ENUM };
