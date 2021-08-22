import { useState } from "react";

const TheLayout = () => {
  const [layout, setLayout] = useState("row");
  const toggleLayout = () => {
    const layoutList = ["row", "col", "row-reverse"];
    const i = layoutList.indexOf(layout);
    setLayout(layoutList[(i + 1) % layoutList.length]);
  };
  return (
    <div className="h-screen flex flex-col">
      {/* header */}
      <div className="h-16 border-b-2">
        <button onClick={toggleLayout}>{layout}</button>
      </div>
      <div className={`flex flex-${layout}`}>
        {/* editors */}
        <div className="flex-1">editors</div>
        {/* preview */}
        <div className="flex-1">preview</div>
      </div>
    </div>
  );
};
export default TheLayout;
