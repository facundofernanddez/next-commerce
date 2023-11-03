import { urlFor } from "@/lib/sanity";
import { Divide } from "lucide-react";
import Image from "next/image";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={urlFor(image).url()}
              height={200}
              width={200}
              alt="photo"
              className="w-full h-full object-cover object-center cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
