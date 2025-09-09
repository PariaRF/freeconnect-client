import DatePicker from "react-multi-date-picker";

function DatePickerField({ label, date, setDate }) {
  return (
    <div className="mb-2 block text-secondary-700">
      <label htmlFor="" className="block">
        {label}
      </label>
      <DatePicker
        containerClassName="w-full"
        inputClass="text-field--input"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
      />
    </div>
  );
}

export default DatePickerField;
