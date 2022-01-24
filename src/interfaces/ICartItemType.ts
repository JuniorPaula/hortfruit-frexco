import { INutrients } from './INutrients';

export interface ICartItemType {
  name: string;
  id: number;
  family: string;
  genus: string;
  order: string;
  nutritions: INutrients;
  amount: number;
}
