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
    name: "Imagine if ninja had a low taper fade",
    image:
      "https://i1.sndcdn.com/artworks-mab0d6ZtmkGuPfVo-M7Q3JA-t500x500.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 2,
    name: "Bombardiro Crocodilo",
    image:
      "https://i.kym-cdn.com/entries/icons/mobile/000/053/420/Bombardiro_crocodilo_cover.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 3,
    name: "Tralalero Tralala",
    image:
      "https://i.kym-cdn.com/entries/icons/mobile/000/053/192/tralalero_tral.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 4,
    name: "I Just Want to Be Part of Your Symphony",
    image:
      "https://www.bu.edu/files/2024/12/Screenshot-2024-12-13-at-11.50.38%E2%80%AFAM.png",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 5,
    name: "The Military Man",
    image:
      "https://www.bu.edu/files/2024/12/Screenshot-2024-12-13-at-12.04.58%E2%80%AFPM.png",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 6,
    name: "Pepe the King Prawn",
    image:
      "https://www.bu.edu/files/2024/12/Screenshot-2024-12-13-at-12.12.06%E2%80%AFPM.png",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 7,
    name: "Chill guy",
    image:
      "https://www.bu.edu/files/2024/12/Screenshot-2024-12-13-at-12.32.43%E2%80%AFPM.png",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 8,
    name: "Lebron James Sunshine or “Le-sunshine”",
    image:
      "https://www.bu.edu/files/2024/12/Screenshot-2024-12-13-at-12.42.40%E2%80%AFPM.png",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 9,
    name: "Two steps ahead",
    image:
      "https://www.bu.edu/files/2024/12/Screenshot-2024-12-13-at-1.08.43%E2%80%AFPM-1-600x573.png",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 10,
    name: "What's up, brother",
    image:
      "https://www.bu.edu/files/2024/12/Screenshot-2024-12-13-at-12.53.48%E2%80%AFPM.png",
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
