"use client"
import Image from "next/image"
import { forwardRef, useContext } from "react"
import ResizableBox from "./Resizable"
import { SettingsContext } from "."

const MainMeme = forwardRef(({ selectedMeme }, ref) => {
  const boxCount = []
  for (let i = 0; i < selectedMeme?.box_count; i++) {
    boxCount.push(i)
  }

  const context = useContext(SettingsContext)
  return (
    <div className="basis-full  bg-paper p-4 md:p-8 rounded-2xl flex flex-col items-center">
      {selectedMeme && (
        <div ref={ref} className="relative max-w-max">
          <Image
            className={`relative`}
            alt={selectedMeme?.name}
            width={selectedMeme?.width}
            height={selectedMeme?.height}
            src={selectedMeme?.url}
          />
          <div className="absolute top-0 left-0">
            {boxCount.map(box => (
              <ResizableBox
                ref={ref}
                settings={context?.memeSettings?.settings[box]}
                key={box}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
})

MainMeme.displayName = "MainMeme"

export default MainMeme
