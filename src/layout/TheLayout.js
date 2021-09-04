import { useEffect, useState } from "react";

const layoutMap = {
  row: "col",
  col: "row",
  "row-reverse": "col",
};
const TheLayout = () => {
  const [layout, setLayout] = useState("row");
  const [subLayout, setSubLayout] = useState(layoutMap[layout]);
  const toggleLayout = () => {
    const layoutList = ["row", "col", "row-reverse"];
    const i = layoutList.indexOf(layout);
    setLayout(layoutList[(i + 1) % layoutList.length]);
  };
  useEffect(() => {
    setSubLayout(layoutMap[layout]);
  }, [layout]);
  return (
    <div className="h-screen flex flex-col">
      {/* header */}
      <div className="h-16 border-b-2">
        <button onClick={toggleLayout}>{layout}</button>
      </div>
      <div className={`flex flex-1 flex-${layout}`}>
        {/* editors */}
        <div className={`flex-1 flex flex-${subLayout}`}>
          <div class="flex-1">editor1</div>
          <div class="flex-1">editor2</div>
          <div class="flex-1">editor3</div>
        </div>
        {/* preview */}
        <div className="flex-1">preview</div>
      </div>
    </div>
  );
};
export default TheLayout;
