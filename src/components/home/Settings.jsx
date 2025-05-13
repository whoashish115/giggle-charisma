"use client"

import Image from "next/image"
import React, { forwardRef, useMemo, useState, useContext, useEffect } from "react"
import { FaChevronDown, FaCheck, FaDownload } from "react-icons/fa"
import { HiCheck, HiChevronUpDown } from "react-icons/hi2"
import {
  handleTextColorChange,
  handleOutlineColorChange,
  handleTextChange,
  handleGenerateMeme,
} from "@/lib/stateHandlers"
import { SettingsContext } from "."
import ColorInput from "./ColorInput"
import { getFontFamilies } from "@/lib/fontFamily"
export function filenameToName(filename) {
  if (!filename) return "";
  const nameWithoutExtension = filename.replace(/\.[^/.]+$/, "");
  const cleaned = nameWithoutExtension.replace(/[-_]+/g, " ");
  const titleCased = cleaned.replace(/\b\w/g, (char) => char.toUpperCase());
  return titleCased.trim();
}
const CompactExtendedSettings = ({ settings, setSettings, index }) => {
  const [openFontFamily, setOpenFontFamily] = useState(false)
  const [selectedFontFamily, setSelectedFontFamily] = useState("")


  useEffect(() => {
    setSelectedFontFamily(settings[index]?.fontFamily || "")
  }, [settings, index])

  const updateSetting = (key, value) => {
    const updated = [...settings]
    updated[index] = { ...updated[index], [key]: value }
    setSettings(updated)
    console.log(updated)
  }

  return (
    <div className="flex flex-col  items-start  gap-2  text-xs text-title mt-1">
    <div className="flex flex-wrap gap-2 items-center text-xs text-title mt-1">
      <div className="relative flex-grow w-[150px]">
        <button
          onClick={() => setOpenFontFamily(!openFontFamily)}
          className="w-full flex justify-between items-center border border-outline rounded px-2 py-1 bg-highlight"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={openFontFamily}
        >
          {selectedFontFamily || "Font family"}
          <HiChevronUpDown className="w-4 h-4 ml-1" />
        </button>
        {openFontFamily && (
          <ul
            className="absolute z-20 mt-1 max-h-32 w-full overflow-y-auto rounded border border-outline bg-highlight  shadow"
            role="listbox"
          >
            {getFontFamilies().map((font) => (
              <li
                key={font}
                className={`cursor-pointer px-2 py-1 flex items-center hover:bg-gray-100  ${
                  font === selectedFontFamily ? "font-semibold bg-gray-200" : ""
                }`}
                onClick={() => {
                  setSelectedFontFamily(font)
                  updateSetting("fontFamily", font)
                  setOpenFontFamily(false)
                }}
                role="option"
                aria-selected={font === selectedFontFamily}
              >
                <HiCheck
                  className={`mr-2 w-4 h-4 ${font === selectedFontFamily ? "opacity-100" : "opacity-0"}`}
                />
                {font}
              </li>
            ))}
          </ul>
        )}
      </div>

      {["isAllCaps", "isBold", "isItalic"].map((key) => (
        <label key={key} className="flex items-center space-x-1 select-none cursor-pointer">
          <input
            type="checkbox"
            checked={settings[index]?.[key] || false}
            onChange={() => updateSetting(key, !settings[index]?.[key])}
            className="accent-blue-500 focus:outline-none focus:ring-0"
          />
          <span className="whitespace-nowrap">
            {key === "isAllCaps" ? "ALL CAPS" : key === "isBold" ? "Bold" : "Italic"}
          </span>
        </label>
      ))}
</div>
    <div className="flex flex-wrap gap-2 items-center text-xs text-title mt-1">

      <label className="flex flex-col gap-2 items-center space-x-1 max-w-[90px]">
        <span>Outline</span>
        <input
          type="number"
          min={0}
          max={5}
          value={settings[index]?.outlineWidth || 0}
          onChange={(e) => updateSetting("outlineWidth", Number(e.target.value))}
          className="w-14 focus:outline-none focus:ring-0 border border-outline rounded px-1 py-0.5 text-xs bg-highlight"
          title="Outline Width (px)"
        />
      </label>

      <label className="flex flex-col gap-2 items-center space-x-1 max-w-[90px]">
        <span>Font Size</span>
        <input
          type="number"
          min={1}
          value={settings[index]?.fontSize || 12}
          onChange={(e) => updateSetting("fontSize", Number(e.target.value))}
          className="w-14 border border-outline rounded px-1 py-0.5 text-xs bg-highlight focus:outline-none focus:ring-0"
          title="Font Size (px)"
        />
      </label>

      <label className="flex flex-col gap-2 items-center space-x-1 max-w-[90px]">
        <span>Align</span>
        <select
          value={settings[index]?.textAlign || "left"}
          onChange={(e) => updateSetting("textAlign", e.target.value)}
          className="border border-outline rounded px-1 py-0.5 text-xs bg-highlight"
          title="Text Align"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 items-center space-x-1 max-w-[100px]">
        <span>Vertical Align</span>
        <select
          value={settings[index]?.verticalAlign || "top"}
          onChange={(e) => updateSetting("verticalAlign", e.target.value)}
          className="border border-outline rounded px-1 py-0.5 text-xs bg-highlight"
          title="Vertical Align"
        >
          <option value="top">Top</option>
          <option value="center">Center</option>
          <option value="bottom">Bottom</option>
        </select>
      </label>
</div>
    <div className="flex flex-wrap gap-2 items-center text-xs text-title mt-1">

      <label className="flex items-center space-x-1 ">
        <span>Opacity</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={settings[index]?.opacity ?? 1}
          onChange={(e) => updateSetting("opacity", parseFloat(e.target.value))}
          className="flex-grow focus:outline-none focus:ring-0"
          title="Opacity"
        />
        <input
          type="number"
          min={0}
          max={1}
          step={0.01}
          value={settings[index]?.opacity ?? 1}
          onChange={(e) => updateSetting("opacity", parseFloat(e.target.value))}
          className="w-16 border border-outline focus:outline-none focus:ring-0 rounded px-1 py-0.5 text-xs bg-highlight"
          title="Opacity"
        />
      </label>
    </div>
    </div>
  )
}


const MemeSettings = forwardRef(({ memes, selectedMeme, setSelectedMeme, addMeme }, ref) => {
  const context = useContext(SettingsContext);
  const [openOtherMemes, setOpenOtherMemes] = useState(false);
  const [memeValue, setMemeValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useMemo(() => {
    getSettings();
  }, [selectedMeme]);

  function getSettings() {
    const memeSettings = [];
    for (let i = 0; i < selectedMeme?.box_count; i++) {
      memeSettings.push(
        <div
          key={i}
          className="flex flex-col gap-1 sm:gap-2 py-4 px-4 bg-box border rounded-2xl border-outline"
        >
          <input
            placeholder={`Text #${i + 1}`}
            className="border hover:bg-highlight focus:bg-highlight rounded-full focus:outline-none focus:ring-0 px-4 py-2 w-full border-outline text-sm"
            value={context?.memeSettings?.settings[i]?.text ?? ""}
            onChange={(e) => handleTextChange(context, e.target.value, i)}
            type="text"
          />
          <div className="flex items-start pt-2 gap-4">
            <ColorInput
              index={i}
              handler={handleTextColorChange}
              value={context?.memeSettings?.settings[i]?.color}
              tooltipContent="Change text color"
            />
            <ColorInput
              index={i}
              handler={handleOutlineColorChange}
              value={context?.memeSettings?.settings[i]?.outlineColor}
              tooltipContent="Change outline color"
            />
            <CompactExtendedSettings
              index={i}
              settings={context?.memeSettings.settings}
              setSettings={(s) =>
                context?.setMemeSettings((prev) => ({
                  ...prev,
                  settings: s,
                }))
              }
            />
          </div>
        </div>
      );
    }
    return memeSettings;
  }

  const filteredMemes = memes.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

const handleCustomImageUpload = (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const url = URL.createObjectURL(file);

   const img = new window.Image(); 
  img.src = url;

  img.onload = () => {
    const customMeme = {
      id: file.name,
      name: filenameToName(file.name),
      url,
      box_count: 4, 
      width: img.width,
      height: img.height,
    };

    setSelectedMeme(customMeme);
  addMeme(customMeme)
    setMemeValue(filenameToName(file.name));
    setOpenOtherMemes(false);
  };
};
  return (
    <div className="w-full border border-outline rounded-xl shadow-md bg-paper p-4 max-w-4xl mx-auto">
      <div className="relative mb-4">
        <button
          onClick={() => setOpenOtherMemes((prev) => !prev)}
          className="w-full flex justify-between items-center px-4 py-2 border border-outline rounded-md text-sm bg-box"
        >
          {memeValue === "" ? "Select a meme" : memeValue}
          <FaChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </button>

        {openOtherMemes && (
          <div className="absolute z-10 mt-2 w-full max-h-[300px] bg-box border border-outline rounded-md shadow-lg p-2 overflow-y-auto">

             <div className="mb-2">
              <label className="cursor-pointer text-center text-sm text-primary hover:underline block">
                + Upload Custom Meme
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCustomImageUpload}
                  className="hidden"
                />
              </label>
            </div>


            <input
              className="w-full p-2 border border-outline rounded-md text-sm bg-highlight"
              placeholder="Search for a meme"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredMemes.length === 0 ? (
              <div className="text-center text-sm text-paragraph">
                No Memes Found
              </div>
            ) : (
              filteredMemes.map((meme) => (
                <div
                  key={meme.id}
                  className="flex  gap-2 my-2 p-2 cursor-pointer items-center bg-black/5 dark:bg-white/5 dark:hover:bg-white/10  hover:bg-black/10 rounded"
                  onClick={() => {
                    setMemeValue(meme.name === memeValue ? "" : meme.name);
                    setSelectedMeme(meme);
                    setOpenOtherMemes(false);
                  }}
                >
                  <Image
                    src={meme.url}
                    alt={meme.name}
                      width={ 40}
  height={ 40}
                    className="rounded-lg"
                  />
                  <span className="text-sm w-full text-title">{meme.name}</span>
                  <FaCheck
                    className={`h-4 w-4 text-green-500 ${
                      meme.id === selectedMeme?.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {getSettings().map((setting, index) => (
          <React.Fragment key={index}>{setting}</React.Fragment>
        ))}
      </div>

      <div className="mt-4">
        <button
          onClick={() => handleGenerateMeme(ref)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary cursor-pointer font-bold hover:bg-secondary text-black text-sm"
        >
          Download Meme <FaDownload className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
});


MemeSettings.displayName = "MemeSettings"
export default MemeSettings
