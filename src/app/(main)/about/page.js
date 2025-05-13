import React from "react";
import { About as AboutComponent } from "@/components";

export const metadata = {
 title: 'About',
 description: 'About page of the website',
 keywords: 'About, website',} 
 
export default function About() {
  return (
    <AboutComponent />
  );
}