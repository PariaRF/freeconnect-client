import { FiChevronDown } from "react-icons/fi";

function Select({ value, onChange, options }) {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={onChange}
        className="appearance-none text-xs bg-secondary-0 py-3 px-4 pr-8 text-field--input w-full"
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <FiChevronDown
        size={16}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary-500 pointer-events-none"
      />
    </div>
  );
}

export default Select;
