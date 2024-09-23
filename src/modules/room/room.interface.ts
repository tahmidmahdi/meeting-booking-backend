export interface IRoom {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: Array<string>;
  isDeleted?: boolean;
}
