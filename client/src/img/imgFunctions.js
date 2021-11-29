import { SKELETON, SPIDER, ZOMBIE } from '../constants/monsterConstants';
import avatarMonsterZombie from './monsters/avatarZombie.png';
import avatarMonsterSkeleton from './monsters/avatarSkeleton.png';
import avatarMonsterSpider from './monsters/avatarSpider.png';
import avatarItemHelmet from './items/avatarHelmet.png';
import avatarItemArmor from './items/avatarArmor.png';
import avatarItemLegwear from './items/avatarLegwear.png';
import avatarItemBoots from './items/avatarBoots.png';
import avatarItemGloves from './items/avatarGloves.png';
import avatarItemSword from './items/avatarSword.png';
import avatarItemAxe from './items/avatarAxe.png';
import avatarItemWand from './items/avatarWand.png';
import avatarItemShield from './items/avatarShield.png';
import {
  ARMOR, AXE, BOOTS,
  COMMON, GLOVES,
  HELMET,
  LEGENDARY, LEGWEAR,
  RARE, SHIELD, SWORD,
  UNCOMMON, WAND,
} from '../constants/itemConstants';

export const getMonsterAvatar = (monsterType) => {
  switch (monsterType) {
    case ZOMBIE:
      return avatarMonsterZombie;
    case SKELETON:
      return avatarMonsterSkeleton;
    case SPIDER:
      return avatarMonsterSpider;
    default:
      return null;
  }
};

export const getItemAvatar = (subtype) => {
  switch (subtype) {
    case HELMET: return avatarItemHelmet;
    case ARMOR: return avatarItemArmor;
    case LEGWEAR: return avatarItemLegwear;
    case BOOTS: return avatarItemBoots;
    case GLOVES: return avatarItemGloves;
    case SWORD: return avatarItemSword;
    case AXE: return avatarItemAxe;
    case WAND: return avatarItemWand;
    case SHIELD: return avatarItemShield;
    default:
      return null;
  }
};

export const getItemBorderColor = (rarity) => {
  switch (rarity) {
    case COMMON:
      return 'gray';
    case UNCOMMON:
      return 'green';
    case RARE:
      return 'gold';
    case LEGENDARY:
      return 'brown';
    default:
      return 'gray';
  }
};
