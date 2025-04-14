import { useState } from "react";
import { type Meme, getMemes, updateMeme } from "@/lib/memes";
import { useDisclosure } from "@heroui/react";
export const useMemeTable = () => {
  const [memes, setMemes] = useState<Meme[]>(getMemes());
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEditClick = (meme: Meme) => {
    setSelectedMeme(meme);
    onOpen();
  };

  const handleSaveMeme = (updatedMeme: Meme) => {
    updateMeme(updatedMeme);
    setMemes(getMemes());
    onClose();

    alert(`"${updatedMeme.name}" has been updated successfully.`);
  };
  return {
    memes,
    selectedMeme,
    isOpen,
    onClose,
    handleEditClick,
    handleSaveMeme,
  };
};
