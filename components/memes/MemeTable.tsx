"use client";

import { useState } from "react";
import { type Meme, getMemes, updateMeme } from "@/lib/memes";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  useDisclosure,
} from "@heroui/react";
// import { EditMemeModal } from "@/components/edit-meme-modal";

export function MemeTable() {
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

    // Show a notification
    alert(`"${updatedMeme.name}" has been updated successfully.`);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Meme Directory - Table View</h1>
      <div className="rounded-lg overflow-hidden shadow-xl">
        <Table
          aria-label="Meme directory table"
          removeWrapper
          isStriped
          className="bg-[#1a1325] text-white"
          classNames={{
            th: "bg-[#2d2241] text-[#a78bfa] py-3 px-6 text-left text-xs font-medium uppercase tracking-wider",
            td: "px-6 py-4 whitespace-nowrap text-sm",
          }}
        >
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Likes</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {memes.map((meme) => (
              <TableRow key={meme.id} className="hover:bg-[#2d2241]">
                <TableCell className="font-medium">{meme.id}</TableCell>
                <TableCell>{meme.name}</TableCell>
                <TableCell>{meme.likes}</TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    variant="flat"
                    size="sm"
                    onPress={() => handleEditClick(meme)}
                    className="bg-[#7c3aed] transition-colors duration-300 rounded-md py-1 px-3 text-white hover:bg-[#6d28d9]"
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* {selectedMeme && (
        <EditMemeModal
          meme={selectedMeme}
          isOpen={isOpen}
          onClose={onClose}
          onSave={handleSaveMeme}
        />
      )} */}
    </div>
  );
}
