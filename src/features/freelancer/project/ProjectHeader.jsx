import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  {
    value: "latest",
    label: "Sort(Latest)",
  },
  {
    value: "earliest",
    label: "Sort(Earliest)",
  },
];

const statusOptions = [
  {
    value: "ALL",
    label: "All",
  },
  {
    value: "OPEN",
    label: "Open",
  },
  {
    value: "CLOSED",
    label: "Closed",
  },
];

function ProjectHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">Project List</h1>
      <div className="flex gap-x-8 items-center">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            { value: "ALL", label: "Category(All)" },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
