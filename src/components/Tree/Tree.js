import React from "react";
export function Tree({ treeData, expandedArr, onItemClick }) {
  return (
    <div>
      <div className="tree">
        {treeData.map((item) => {
          return (
            <ul key={item.key}>
              <li style={{ margin: "0 0 0 50px" }}>
                {
                  <span
                    onClick={() => {
                      onItemClick(item.key);
                    }}
                  >
                    {!item.children || expandedArr.includes(item.key)
                      ? "-"
                      : "+"}
                  </span>
                }
                <span>{item.title}</span>
                {item.children && expandedArr.includes(item.key)
                  ? Tree({ treeData: item.children, expandedArr, onItemClick })
                  : ""}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
