import { z } from "zod";
import Cookies from "js-cookie";

export const memeSchema = z.object({
  id: z.number(),
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be less than 100 characters"),
  image: z.string().url("Must be a valid URL"),
  likes: z.number().int().min(0).max(99),
});

export type Meme = z.infer<typeof memeSchema>;

const defaultMemes: Meme[] = [
  {
    id: 1,
    name: "Distracted Boyfriend",
    image: "https://i.imgur.com/QYuRyK5.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 2,
    name: "Drake Hotline Bling",
    image: "https://i.imgur.com/dCWPL3s.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 3,
    name: "Two Buttons",
    image: "https://i.imgur.com/7hyKWGq.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 4,
    name: "Change My Mind",
    image: "https://i.imgur.com/LkfZiZV.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 5,
    name: "Expanding Brain",
    image: "https://i.imgur.com/xfZrAEP.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 6,
    name: "Woman Yelling at Cat",
    image: "https://i.imgur.com/hNVK2TT.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 7,
    name: "Surprised Pikachu",
    image: "https://i.imgur.com/u4N9QFv.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 8,
    name: "Is This a Pigeon",
    image: "https://i.imgur.com/RZ6ZCjm.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 9,
    name: "Disaster Girl",
    image: "https://i.imgur.com/oQQDSH9.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 10,
    name: "Doge",
    image: "https://i.imgur.com/2jEmGX5.jpg",
    likes: Math.floor(Math.random() * 100),
  },
];

export function getMemes(): Meme[] {
  if (typeof window === "undefined") {
    return defaultMemes;
  }

  const memesFromCookies = Cookies.get("memes");
  if (!memesFromCookies) {
    Cookies.set("memes", JSON.stringify(defaultMemes), { expires: 7 });
    return defaultMemes;
  }

  try {
    return JSON.parse(memesFromCookies);
  } catch (error) {
    console.error("Error parsing memes from cookies:", error);
    return defaultMemes;
  }
}

export function updateMeme(updatedMeme: Meme): void {
  const memes = getMemes();
  const updatedMemes = memes.map((meme) =>
    meme.id === updatedMeme.id ? updatedMeme : meme
  );
  Cookies.set("memes", JSON.stringify(updatedMemes), { expires: 7 });
}
