import { CompressedFile, compressPng } from "./compress";

export type CompressedFileWithUrl = { file: CompressedFile; url: string };

export async function compressFileList(
  list: FileList
): Promise<CompressedFileWithUrl[]> {
  const res = await Promise.allSettled([...list].map(compressPng));
  return res
    .filter((r) => r.status === "fulfilled")
    .map(({ value }) => value)
    .map((file) => ({
      file,
      url: URL.createObjectURL(file.blob),
    }));
}
