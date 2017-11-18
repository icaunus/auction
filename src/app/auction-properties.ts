import {Auctioneer} from './auctioneer';
import {Item} from './item';

export interface AuctionProperties {  
  id:number;
  theme:string;
  totalInitValue:number;
  auctioneer:Auctioneer;
  opensAt:Date;
  closesAt:Date;
}
