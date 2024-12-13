import React from "react";
import "./styles/InfoFilter.css";

function InfoFilter({
  regions = [],
  types = [],
  onRegionChange,
  onTypeChange,
}) {
  return (
    <div className="InfoFilter">
      <div className="filter-line">
        <div className="select-box">
          {/* 지역 필터 옵션 */}
          <select onChange={(e) => onRegionChange(e.target.value)}>
            {regions.map((region, index) => (
              <option key={index} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>

          {/* 축종 필터 옵션 */}
          <select onChange={(e) => onTypeChange(e.target.value)}>
            {types.map((type, index) => (
              <option key={index} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InfoFilter;
