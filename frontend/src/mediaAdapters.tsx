import type { CSSProperties } from "react";
import type { User, TaskAttachment } from "./types";
export function Image({
  src,
  alt = "",
  fill,
  unoptimized,
  sizes,
  ...props
}: {
  src: string;
  alt?: string;
  fill?: boolean;
  unoptimized?: boolean;
  sizes?: string;
  className?: string;
  draggable?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <img
      src={src}
      alt={alt}
      {...props}
      style={
        fill
          ? ({
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            } as CSSProperties)
          : undefined
      }
    />
  );
}
export const displayUserName = (u: User) => u.name;
export const getMediaKind = ({
  fileName,
  mimeType,
}: {
  fileName: string;
  mimeType?: string;
}) =>
  mimeType?.startsWith("image/")
    ? "image"
    : mimeType?.startsWith("video/")
      ? "video"
      : /\.(png|jpe?g|gif|webp)$/i.test(fileName)
        ? "image"
        : "file";
async function blob(url?: string | null) {
  if (!url) throw new Error("No media URL");
  const r = await fetch(url, { credentials: "same-origin" });
  if (!r.ok) throw new Error("Media unavailable");
  return r.blob();
}
export const apiClient = {
  downloadTaskAttachmentThumbnail: (
    _id: number,
    a: { id: number; thumbnail_url?: string | null },
  ) => blob(a.thumbnail_url),
  downloadTaskAttachment: async (
    _id: number,
    a: { id: number; download_url: string; file_name: string },
  ) => ({ blob: await blob(a.download_url) }),
};
