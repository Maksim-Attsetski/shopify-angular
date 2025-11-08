import { IEntity } from '../base';

export interface IProduct extends IEntity {
  name: string;
  price: number;
  preview?: string;
  sale?: {
    discount: number; // percent
    until: number; // date when sale will end
  };
}
