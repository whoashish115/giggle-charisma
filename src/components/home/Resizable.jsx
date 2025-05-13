"use client"
import React, { useEffect } from "react"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"
import { getFontFamilyClass } from "@/lib/fontFamily"

const ResizableBox = React.forwardRef(({ className, settings }, ref) => {
  const refImageHeight =
    typeof ref === "function" ? 0 : ref?.current?.clientHeight
  const refImageWidth =
    typeof ref === "function" ? 0 : ref?.current?.clientWidth
  const [isDraggable, setIsDraggable] = React.useState(true)
  const boxRef = React.useRef(null)
  const [boxSize, setBoxSize] = React.useState({
    width: boxRef.current?.clientWidth,
    height: boxRef.current?.clientHeight
  })
  const [memeSize, setMemeSize] = React.useState({
    width: refImageWidth,
    height: refImageHeight
  })
  useEffect(() => {
    setMemeSize({
      width: typeof ref !== "function" ? ref?.current?.clientWidth : 0,
      height: typeof ref !== "function" ? ref?.current?.clientHeight : 0
    })
  }, [refImageHeight !== memeSize.height, refImageWidth !== memeSize.width])

  return (
    <motion.div
      ref={boxRef}
      onDoubleClick={() => setIsDraggable(prev => !prev)}
      onResize={() => setIsDraggable(false)}
      drag={isDraggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: memeSize.width - boxSize.width,
        bottom: memeSize.height - boxSize.height
      }}
      onDragEnd={(event, info) => {
        setBoxSize({
          width: boxRef.current?.clientWidth,
          height: boxRef.current?.clientHeight
        })
        setMemeSize({ width: refImageWidth, height: refImageHeight })
      }}
      dragElastic={1}
      dragMomentum={false}
      style={{
        resize: "both",
        color: settings?.color,
        textTransform: settings?.isAllCaps ? "uppercase" : "initial",
        fontWeight: settings?.isBold ? "bold" : "normal",
        fontStyle: settings?.isItalic ? "italic" : "normal",
        fontSize: settings?.fontSize,
        opacity: settings?.opacity,
        textShadow:
          settings?.textDecoration !== "shadow"
            ? "none"
            : `0px 0px ${settings?.outlineWidth}px ${settings?.outlineColor}`,
        WebkitTextStroke:
          settings?.textDecoration !== "outline"
            ? "0px"
            : `${settings?.outlineWidth}px ${settings?.outlineColor}`
      }}
      className={twMerge(
        `absolute top-0 left-0 w-[200px] sm:w-[300px] h-20 z-30 overflow-hidden
              hover:outline hover:outline-black  rounded-lg select-none flex`,
        className,
        `${
          isDraggable ? "active:cursor-grabbing cursor-grab hover:border-primary border-transparent border" : "hover:border-black border border-transparent outline-none cursor-default"
        }`,
        `${getFontFamilyClass(settings?.fontFamily ?? "")}`,
        `${
          settings?.verticalAlign === "top"
            ? "items-start"
            : settings?.verticalAlign === "bottom"
            ? "items-end"
            : "items-center"
        }`,
        `${
          settings?.textAlign === "left"
            ? "justify-start"
            : settings?.textAlign === "right"
            ? "justify-end"
            : "justify-center"
        }`
      )}
    >
      <span>{settings?.text}</span>
    </motion.div>
  )
})

ResizableBox.displayName = "ResizableBox"

export default ResizableBox
