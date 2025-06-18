const ScheduleCard = ({ title, time, person, icon }) => (
  <div className="bg-blue-50 p-3 rounded-lg flex justify-between items-start text-sm text-gray-700">
    <div>
      <div className="font-semibold">{title}</div>
      {person && <div className="text-xs">{person}</div>}
    </div>
    <div className="text-right text-xs">
      <div>{time}</div>
      <div className="text-lg">{icon}</div>
    </div>
  </div>
);

export default ScheduleCard;
