import { Meme } from "@/lib/memes";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import Link from "next/link";
export const MemeCard = ({ meme }: { meme: Meme }) => {
  return (
    <Card className="bg-[#1a1325]  text-white border-[#2d2241] shadow-lg">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={meme.image || "/placeholder.svg"}
          alt={meme.name}
          className="object-fit w-full h-full"
          removeWrapper
        />
      </div>
      <CardBody className="p-4">
        <h2 className="text-xl font-bold">{meme.name}</h2>
        <p className="text-[#a78bfa] mt-2">Likes: {meme.likes}</p>
      </CardBody>
      <CardFooter className="p-4 pt-0">
        <Link
          href={meme.image}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c4b5fd] hover:text-[#ddd6fe]"
        >
          View Original
        </Link>
      </CardFooter>
    </Card>
  );
};
