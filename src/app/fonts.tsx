import { Inter as FontSans } from "next/font/google";
import { Inconsolata as FontMono } from "next/font/google";
import { Playfair_Display as FontSerif } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
})