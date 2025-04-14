"use client";

import { useState, useEffect } from "react";
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
  const [formValues, setFormValues] = useState({
    name: meme.name,
    image: meme.image,
    likes: meme.likes,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setFormValues({
        name: meme.name,
        image: meme.image,
        likes: meme.likes,
      });
      setErrors({});
    }
  }, [isOpen, meme]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate name
    if (!formValues.name) {
      newErrors.name = "Name is required";
    } else if (formValues.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (formValues.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    // Validate image URL
    if (!formValues.image) {
      newErrors.image = "Image URL is required";
    } else {
      try {
        new URL(formValues.image);
      } catch (e) {
        newErrors.image = "Must be a valid URL";
      }
    }

    // Validate likes
    if (formValues.likes < 0 || formValues.likes > 99) {
      newErrors.likes = "Likes must be between 0 and 99";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSave({
        ...formValues,
        id: meme.id, // Keep the original ID
      });
    }
  };

  const handleChange = (name: string, value: string | number) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        base: "bg-[#1a1325] text-white h-fit my-auto",
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
                className="bg-[#2d2241] py-2 h-[40px] border-[#3b2c56] text-white "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#a78bfa] mb-1">
                Name
              </label>
              <Input
                type="text"
                value={formValues.name}
                onValueChange={(value) => handleChange("name", value)}
                isInvalid={!!errors.name}
                errorMessage={errors.name}
                className="bg-[#2d2241] py-2 h-[40px] border-[#3b2c56] text-white outline-none focus:outline-none"
              />
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
                errorMessage={errors.image}
                className="bg-[#2d2241] py-2 h-[40px] border-[#3b2c56] text-white outline-none focus:outline-none"
              />
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
                errorMessage={errors.likes}
                className="bg-[#2d2241] py-2 h-[40px] border-[#3b2c56] text-white outline-none focus:outline-none"
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="default"
            variant="flat"
            onPress={onClose}
            className="bg-[#3b2c56] text-white hover:bg-[#4c3a6d]"
          >
            Cancel
          </Button>
          <Button
            color="primary"
            onPress={handleSubmit}
            className="bg-[#7c3aed] text-white hover:bg-[#6d28d9]"
          >
            Save changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
