"use client"
import { useEffect, useRef, useState } from "react"
import MainMeme from "./Base"
import { createContext } from "react";
import MemeSettings from "./Settings";
import { Container } from "..";

export const SettingsContext = createContext(null)
async function getMemes() {
    const response = await fetch("https://api.imgflip.com/get_memes")
    if (response.status !== 200) throw new Error("Failed to fetch memes")
    return response.json()
}

export default function Home() {
  const [data, setData] = useState({ success: false, data: { memes: [] } })
  const [isMemeLoading, setIsMemeLoading] = useState(true)
  const [selectedMeme, setSelectedMeme] = useState(null)
  const [memeSettings, setMemeSettings] = useState(null)
  const memeRef = useRef(null)
  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await getMemes()
        if (!response.success) throw new Error("Something went wrong")
        setData(() => response)
        setSelectedMeme(
          () =>
            response.data.memes[
              Math.floor(Math.random() * response.data.memes.length)
            ]
        )
        setIsMemeLoading(() => false)
      } catch (error) {
        console.log(error)
        setData({ success: false, data: { memes: [] } })
        setIsMemeLoading(() => false)
      } finally {
        setIsMemeLoading(() => false)
      }
    }
    fetchMemes()
  }, [])
  useEffect(() => {
    setMemeSettings(() => {
      const memeSetting = []
      let memeSettings = {
        id: "",
        settings: []
      }
      for (let i = 0; i < selectedMeme?.box_count; i++) {
        memeSetting.push({
          color: "#ffffff",
          fontSize: 40,
          text: `Text #${i + 1}`,
          fontFamily: "arial",
          textAlign: "left",
          verticalAlign: "top",
          width: 500,
          height: 500,
          textDecoration: "outline",
          outlineColor: "#000000",
          outlineWidth: 1,
          isAllCaps: true,
          isBold: false,
          isItalic: false,
          opacity: 1
        })
      }
      memeSettings.id = selectedMeme?.id
      memeSettings.settings = memeSetting
      return memeSettings
    })
  }, [selectedMeme])
  if (isMemeLoading) return <div className="absolute inset-0 m-auto">Loading</div>
  if (!data.success) return <h1>Something went wrong</h1>
  return (
    <Container>
    <SettingsContext.Provider value={{ memeSettings, setMemeSettings }}>
      <div className="flex flex-col md:flex-row items-start justify-start mx-auto  gap-8">
        <MainMeme ref={memeRef} selectedMeme={selectedMeme} />
        
        <MemeSettings
        ref={memeRef}
        addMeme={(meme)=>{setData({...data, data:{ memes:[meme,...data.data.memes.filter((m)=>m.id !== meme.id)]}})}}
          memes={data.data.memes}
          selectedMeme={selectedMeme}
          setSelectedMeme={setSelectedMeme}
          />
      </div>
          </SettingsContext.Provider>
          </Container>
  )
}
