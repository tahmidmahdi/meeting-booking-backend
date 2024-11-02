"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlotTimeInterval = exports.convertMinutesToTime = void 0;
const convertTimeToMinutes = (time) => {
    const [hour, minutes] = time.split(':');
    return Number(hour) * 60 + Number(minutes);
};
const convertMinutesToTime = (minutes) => {
    const hours = Math.floor(minutes / 60)
        .toString()
        .padStart(2, '0');
    const mins = (minutes % 60).toString().padStart(2, '0');
    return `${hours}:${mins}`;
};
exports.convertMinutesToTime = convertMinutesToTime;
const generateSlotTimeInterval = (startTimeInMinutes, totalSlots, room, date) => {
    const slots = [];
    for (let i = 0; i < totalSlots; i++) {
        const slotStartTimeInMinutes = startTimeInMinutes + i * 60;
        const slotEndTimeInMinutes = slotStartTimeInMinutes + 60;
        const slotStartTime = (0, exports.convertMinutesToTime)(slotStartTimeInMinutes);
        const slotEndTime = (0, exports.convertMinutesToTime)(slotEndTimeInMinutes);
        slots.push({
            room,
            date,
            startTime: slotStartTime,
            endTime: slotEndTime,
        });
    }
    return slots;
};
exports.generateSlotTimeInterval = generateSlotTimeInterval;
exports.default = convertTimeToMinutes;
