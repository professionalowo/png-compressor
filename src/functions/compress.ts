import { compress_png } from "wasm";

export type CompressedFile = {
  name: string;
  blob: Blob;
};

export async function compressPng(file: File): Promise<CompressedFile> {
  const buffer = await file.arrayBuffer();
  const data = new Uint8Array(buffer);
  const compressed = await compressPngAsync(data);
  const blob = new Blob([compressed]);
  return {
    name: file.name,
    blob,
  };
}

function compressPngAsync(data: Uint8Array): Promise<Uint8Array> {
  return new Promise<Uint8Array>((res, rej) => {
    try {
      const compressed = compress_png(data);
      res(compressed);
    } catch (exception: unknown) {
      rej(exception);
    }
  });
}
