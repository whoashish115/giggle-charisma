import React from "react";
import { SettingsContext } from ".";

export default function ColorInput({ index, handler, value, tooltipContent }) {
  const [color, setColor] = React.useState("#ffffff");
  const context = React.useContext(SettingsContext);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleBlur = () => {
    handler(context, color, index);
  };

  return (
    <div className="flex flex-col items-center  gap-2 p-2 rounded-xl bg-highlight backdrop-blur-md shadow-md">
      <label className="relative group w-12 h-12">
        {/* Hidden input */}
        <input
          type="color"
          value={value || color}
          onChange={handleChange}
          onBlur={handleBlur}
          className="absolute inset-0 opacity-0 cursor-pointer focus:outline-none focus:ring-0"
        />
        {/* Custom styled circle */}
        <div
          className="w-12 h-12 rounded-full transition-all"
          style={{ backgroundColor: value || color }}
        />
      </label>

      {tooltipContent && (
        <div className="text-xs uppercase font-bold text-center text-title rounded-md backdrop-blur-sm">
          {tooltipContent}
        </div>
      )}
    </div>
  );
}
