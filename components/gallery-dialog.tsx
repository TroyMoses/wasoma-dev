"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryDialogProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  title: string;
  trigger?: React.ReactNode;
}

export function GalleryDialog({ images, title, trigger }: GalleryDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            variant="outline"
            size="sm"
            className="cursor-pointer bg-transparent"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Gallery
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{title} Gallery</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={images[currentIndex]?.src || ""}
              alt={images[currentIndex]?.alt || ""}
              fill
              className="object-cover"
            />
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white cursor-pointer"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white cursor-pointer"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  className={cn(
                    "relative w-20 h-16 rounded-md overflow-hidden border-2 transition-colors flex-shrink-0",
                    index === currentIndex
                      ? "border-blue-500"
                      : "border-transparent"
                  )}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="text-center text-sm text-muted-foreground mt-2">
            {currentIndex + 1} of {images.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
