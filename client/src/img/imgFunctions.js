import { SKELETON, SPIDER, ZOMBIE } from '../constants/monsterConstants';
import avatarZombie from './avatarZombie.png';
import avatarSkeleton from './avatarSkeleton.png';
import avatarSpider from './avatarSpider.png';

export const setAvatar = (monsterType) => {
  switch (monsterType) {
    case ZOMBIE:
      return avatarZombie;
    case SKELETON:
      return avatarSkeleton;
    case SPIDER:
      return avatarSpider;
    default:
      return null;
  }
};
