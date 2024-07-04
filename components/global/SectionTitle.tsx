import { Separator } from "@radix-ui/react-dropdown-menu";
import React from "react";

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-4">
        {text}
      </h2>
      <Separator/>
    </div>
  );
}

export default SectionTitle;
