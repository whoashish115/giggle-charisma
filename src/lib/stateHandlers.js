import { toPng } from "html-to-image"

export function handleTextChange(context, text, index) {
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev?.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            text
          }
        }
        return setting
      })
    }
  })
}

export function handleTextColorChange(context, color, index) {
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev?.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            color
          }
        }
        return setting
      })
    }
  })
}

export function handleOutlineColorChange(context, color, index) {
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev?.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            outlineColor: color
          }
        }
        return setting
      })
    }
  })
}
export function handleChangeFontFamily(
  currentFont,
  selectedFontFamily,
  context,
  index,
  setOpenFontFamily,
  setSelectedFontFamily
) {
  setSelectedFontFamily(() =>
    currentFont === selectedFontFamily ? "arial" : currentFont
  )
  console.log("currentFont", currentFont)
  console.log("selectedFontFamily", selectedFontFamily)
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev?.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            fontFamily:
              currentFont === selectedFontFamily ? "arial" : currentFont
          }
        }
        return setting
      })
    }
  })
  setOpenFontFamily(false)
}

export function handleAllCapsed(context, index) {
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev?.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            isAllCaps: !setting.isAllCaps
          }
        }
        return setting
      })
    }
  })
}

export function handleBolded(context, index) {
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev?.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            isBold: !setting.isBold
          }
        }
        return setting
      })
    }
  })
}

export function handleItalicized(context, index) {
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev?.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            isItalic: !setting.isItalic
          }
        }
        return setting
      })
    }
  })
}

export function handleFontSizeChange(context, fontSize, index) {
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev?.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            fontSize
          }
        }
        return setting
      })
    }
  })
}

export function handleTextDecoration(context, textDecoration, index) {
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev?.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            textDecoration
          }
        }
        return setting
      })
    }
  })
}

export function handleOutlineWidthChange(context, outlineWidth, index) {
  if (outlineWidth < 0 || outlineWidth > 100) return
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            outlineWidth
          }
        }
        return setting
      })
    }
  })
}

export function handleTextAlignChange(context, textAlign, index) {
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            textAlign
          }
        }
        return setting
      })
    }
  })
}

export function handleVerticalAlignChange(context, verticalAlign, index) {
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            verticalAlign
          }
        }
        return setting
      })
    }
  })
}

export function handleOpacityChange(context, opacity, index) {
  if (opacity < 0 || opacity > 100) return
  context?.setMemeSettings(prev => {
    return {
      ...prev,
      settings: prev.settings.map((setting, i) => {
        if (i === index) {
          return {
            ...setting,
            opacity
          }
        }
        return setting
      })
    }
  })
}
export function handleGenerateMeme(memeRef) {
  // toPng(memeRef?.current!).then((dataUrl) => {
  //     const link = document.createElement("a")
  //     link.download = "meme.png"
  //     link.href = dataUrl
  //     link.click()
  // })
  console.log(memeRef)
  if (typeof memeRef === "function") return
  toPng(memeRef?.current).then(dataUrl => {
    const link = document.createElement("a")
    link.download = "meme.png"
    link.href = dataUrl
    link.click()
  })
}
