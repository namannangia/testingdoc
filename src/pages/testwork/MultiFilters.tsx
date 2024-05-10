import React, { useEffect, useState } from "react";
import { items } from "./items";
import { items1 } from "./items1";

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState(items1);

  let filters = ["Women", "Men"];

  const handleFilterButtonClick = (selectedCategory: any) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items1.filter((item1) => item1.gender === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items1]);
    }
  };

  return (
    <div>
      <div className="buttons-container">
        {filters.map((gender, idx) => (
          <button
            style={{ padding: 10, borderColor: "#ccc", borderWidth: 1 }}
            onClick={() => handleFilterButtonClick(gender)}
            className={`button ${selectedFilters?.includes(gender) ? "active" : ""}`}
            key={`filters-${idx}`}
          >
            {gender}
          </button>
        ))}
      </div>

      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p className="category">{item.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
