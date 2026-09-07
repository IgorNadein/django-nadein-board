import { Image } from "./mediaAdapters";

const resolveMediaUrl = (src?: string | null) => src || null;

type TaskBoardAvatarProps = {
  name: string;
  src?: string | null;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-10 w-10",
  md: "h-10 w-10",
  lg: "h-16 w-16",
};

function getBoardInitials(name: string): string {
  const letters = Array.from(name.trim()).filter((character) =>
    /[\p{L}\p{N}]/u.test(character),
  );
  return letters.slice(0, 2).join("").toUpperCase() || "Д";
}

export default function TaskBoardAvatar({
  name,
  src,
  size = "sm",
  className = "",
}: TaskBoardAvatarProps) {
  const imageUrl = resolveMediaUrl(src);

  return (
    <span
      className={`app-avatar-fallback flex shrink-0 items-center justify-center overflow-hidden rounded-full ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt=""
          width={64}
          height={64}
          unoptimized
          className="h-full w-full object-cover"
        />
      ) : (
        <span
          className={`${size === "lg" ? "text-lg" : "text-xs"} font-semibold`}
        >
          {getBoardInitials(name)}
        </span>
      )}
    </span>
  );
}
