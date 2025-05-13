import React from "react";
import { Contact as ContactComponent } from "@/components";

export const metadata = {
 title: 'Contact',
 description: 'Contact page of the website',
 keywords: 'Contact, website',} 
 
export default function Contact() {
  return (
    <ContactComponent />
  );
}