import { useRef, useState } from "preact/hooks";
import { DownloadsList } from "./DonwloadsList";
import {
  CompressedFileWithUrl,
  compressFileList,
} from "../functions/compressFileList";

export function CompressForm() {
  const [compressedFilesWithUrl, setCompressedFilesWithUrl] = useState<
    Array<CompressedFileWithUrl>
  >([]);
  const ref = useRef<HTMLInputElement>(null);
  async function onClick() {
    const { current } = ref;

    if (!current) throw new Error("File input can't be null");
    if (current.files) {
      const append = await compressFileList(current.files);
      setCompressedFilesWithUrl((prev) => [...prev, ...append]);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <input ref={ref} type="file" accept="image/png" multiple />
      <button
        onClick={onClick}
        className="bg-blue-700 p-2 hover:bg-blue-800 rounded-md"
      >
        Compress
      </button>
      <DownloadsList files={compressedFilesWithUrl} />
    </div>
  );
}
