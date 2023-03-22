import { useState } from "react";

type TodosFilterProps = {};

export const TodosFilter: React.FC<TodosFilterProps> = ({}) => {
  const [filterQuery, setFilterQuery] = useState<string>("");
    
  return (
    <div>
      <label>For filter type here</label>
      <input
        value={filterQuery}
        onChange={(e) => {
          setFilterQuery(e.target.value.toLowerCase());
        }}
      />
      <button
        onClick={() => {
          setFilterQuery("");
        }}
      >
        Clear
      </button>
    </div>
  );
};
