import React, { useState } from "react";
import { Tree } from "./Tree";
import { treeData } from "./mock";

export function MyTree() {
  const [expandedArr, setExpandedArr] = useState([]);
  const onItemClick = (key) => {
    const copyExpandedArr = JSON.parse(JSON.stringify(expandedArr));
    const index = copyExpandedArr.findIndex((item) => item === key);
    if (index > -1) {
      for (let i = 0; i < copyExpandedArr.length; i++) {
        if (i > index) {
          copyExpandedArr[i] = copyExpandedArr.splice(i, 1);
        }
      }
      copyExpandedArr.splice(index, 1);
      // 如果点击的是父，父收起之后所有子收起来
    } else {
      copyExpandedArr.push(key);
    }
    setExpandedArr(copyExpandedArr);
  };
  return (
    <div>
      树组件：
      <Tree
      treeData={treeData}
      expandedArr={expandedArr}
      onItemClick={onItemClick}
    />
    </div>
  );
}
