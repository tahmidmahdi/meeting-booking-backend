import {Schema} from 'mongoose';

const convertTimeToMinutes = (time: string) => {
  const [hour, minutes] = time.split(':');
  return Number(hour) * 60 + Number(minutes);
};

export const convertMinutesToTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0');
  const mins = (minutes % 60).toString().padStart(2, '0');
  return `${hours}:${mins}`;
};

export const generateSlotTimeInterval = (
  startTimeInMinutes: number,
  totalSlots: number,
  room: Schema.Types.ObjectId,
  date: Date
) => {
  const slots = [];
  for (let i = 0; i < totalSlots; i++) {
    const slotStartTimeInMinutes = startTimeInMinutes + i * 60;
    const slotEndTimeInMinutes = slotStartTimeInMinutes + 60;
    const slotStartTime = convertMinutesToTime(slotStartTimeInMinutes);
    const slotEndTime = convertMinutesToTime(slotEndTimeInMinutes);
    slots.push({
      room,
      date,
      startTime: slotStartTime,
      endTime: slotEndTime,
    });
  }
  return slots;
};

export default convertTimeToMinutes;
