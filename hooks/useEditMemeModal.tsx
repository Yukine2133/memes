import { Meme } from "@/lib/memes";
import { useState, useEffect } from "react";

interface EditMemeModalProps {
  meme: Meme;
  isOpen: boolean;
  onSave: (meme: Meme) => void;
}
export const useEditMemeModal = ({
  meme,
  isOpen,
  onSave,
}: EditMemeModalProps) => {
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
  }, [isOpen, meme.id]);

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

  return {
    formValues,
    errors,
    handleSubmit,
    handleChange,
  };
};
