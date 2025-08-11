import React from "react";

interface ContentImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: "full" | "half" | "third" | "quarter";
  className?: string;
}

const ContentImage: React.FC<ContentImageProps> = ({
  src,
  alt,
  caption,
  width = "full",
  className = "",
}) => {
  const widthClasses = {
    full: "w-full !max-w-3xl",
    half: "w-full md:w-1/2 !max-w-xl",
    third: "w-full md:w-1/3 max-w-md",
    quarter: "w-full md:w-1/4 max-w-sm",
  };

  return (
    <div className={`my-6 flex justify-center ${className}`}>
      <div className={`${widthClasses[width]}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-w-full rounded-lg shadow-md"
          loading="lazy"
        />
        {caption && (
          <p className="text-sm text-gray-600 text-center mt-2 italic">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContentImage;
