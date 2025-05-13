export const getFontFamilies = () => {
  return [
    "Inter",
    "Impact",
    "Arial",
    "Open Sans",
    "Roboto",
    "Space Mono",
    "Helvetica",
    "Times New Roman",
    "Courier Prime",
    "Verdana",
    "Georgia",
    "Palatino",
    "Garamond",
    "Bookman",
    "Arial Black"
  ]
}
export function getFontFamilyClass(fontFamily) {
  switch (fontFamily.toLowerCase()) {
    case "open sans":
      return "font-open-sans"
    case "helvetica":
      return "font-helvetica"
    case "courier prime":
      return "font-courier-prime"
    case "roboto":
      return "font-roboto"
    case "inter":
      return "font-sans" // You can map inter to default tailwind sans
    case "space mono":
      return "font-mono" // You can use default Tailwind mono
    case "times new roman":
      return "font-times-new-roman"
    case "arial":
      return "font-arial"
    case "impact":
      return "font-impact"
    case "georgia":
      return "font-georgia"
    case "palatino":
      return "font-palatino"
    case "garamond":
      return "font-garamond"
    case "bookman":
      return "font-bookman"
    case "arial black":
      return "font-arial-black"
    default:
      return "font-arial"
  }
}