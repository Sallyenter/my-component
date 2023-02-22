import React, { useState } from "react";
import { menuList } from "./mock";
import { Menu } from "./Menu";

function Cascader() {
  const [activePath, setActivePath] = useState([]);
  const changeActivePath = (dep, id, list) => {
    const copyactivePath = JSON.parse(JSON.stringify(activePath));
    copyactivePath[dep] = id;
    for (let i = 0; i < copyactivePath.length; i++) {
      if (i > dep) {
        copyactivePath[i] = null;
      }
    }
    setActivePath(copyactivePath);
  };
  return (
      <div className="cascader item">
        级联选择:
        <div>
          <Menu
            list={menuList}
            dep={0}
            changeActivePath={changeActivePath}
            activePath={activePath}
          ></Menu>
        </div>
      </div>
  );
}

export default Cascader;
