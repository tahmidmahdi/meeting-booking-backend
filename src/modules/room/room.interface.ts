export interface IRoom {
  name: string;
  roomNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: Array<string>;
  isDeleted?: boolean;
}
