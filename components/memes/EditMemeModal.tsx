"use client";

import { useEditMemeModal } from "@/hooks/useEditMemeModal";
import type { Meme } from "@/lib/memes";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";

interface EditMemeModalProps {
  meme: Meme;
  isOpen: boolean;
  onClose: () => void;
  onSave: (meme: Meme) => void;
}

export function EditMemeModal({
  meme,
  isOpen,
  onClose,
  onSave,
}: EditMemeModalProps) {
  const { formValues, errors, handleSubmit, handleChange } = useEditMemeModal({
    meme,
    isOpen,
    onSave,
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        base: "bg-[#1a1325] py-2 text-white h-fit my-auto",
        backdrop: "bg-black/70 backdrop-blur-sm ",
        header: "border-b border-[#2d2241]",
        body: "py-6",
        footer: "border-t border-[#2d2241]",
      }}
    >
      <ModalContent className="outline-0 outline-none">
        <ModalHeader className="text-xl font-bold">Edit Meme</ModalHeader>
        <ModalBody>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#a78bfa] mb-1">
                ID (Read Only)
              </label>
              <Input
                type="text"
                value={meme.id.toString()}
                isDisabled
                className="bg-[#2d2241]  border-[#3b2c56] text-white  "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#a78bfa] mb-1">
                Name
              </label>
              <Input
                type="text"
                value={formValues.name}
                onChange={(e) => handleChange("name", e.target.value)}
                isInvalid={!!errors.name}
                className="bg-[#2d2241]   text-white border-[#3b2c56] "
                classNames={{
                  input: "outline-none ",
                }}
              />
              {errors && <p className="text-[#ff4d4f] mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#a78bfa] mb-1">
                Image URL
              </label>
              <Input
                type="text"
                value={formValues.image}
                onValueChange={(value) => handleChange("image", value)}
                isInvalid={!!errors.image}
                className="bg-[#2d2241]  border-[#3b2c56] text-white "
                classNames={{
                  input: "outline-none ",
                }}
              />
              {errors && <p className="text-[#ff4d4f] mt-1">{errors.image}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#a78bfa] mb-1">
                Likes
              </label>
              <Input
                type="number"
                min={0}
                max={99}
                value={formValues.likes.toString()}
                onValueChange={(value) =>
                  handleChange("likes", Number.parseInt(value) || 0)
                }
                isInvalid={!!errors.likes}
                className="bg-[#2d2241]  border-[#3b2c56] text-white "
                classNames={{
                  input: "outline-none ",
                }}
              />
              {errors && <p className="text-[#ff4d4f] mt-1">{errors.likes}</p>}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="default"
            variant="flat"
            onPress={onClose}
            className="bg-[#3b2c56] text-white hover:bg-[#4c3a6d] cursor-pointer rounded-md"
          >
            Cancel
          </Button>
          <Button
            color="primary"
            onPress={handleSubmit}
            className="bg-[#7c3aed] text-white hover:bg-[#6d28d9] cursor-pointer rounded-md"
          >
            Save changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
