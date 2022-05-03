import React from "react";
import { IState as Props } from "./Home";

interface BlockProps {
  block: Props["blocks"];
}

const Blocks: React.FC<BlockProps> = ({ block }) => {
  const heightBl = `${block.height.toString()}px`;
  return (
    <div
      className={`w-4`}
      style={{ height: heightBl, background: block.color }}
    ></div>
  );
};

export default Blocks;
