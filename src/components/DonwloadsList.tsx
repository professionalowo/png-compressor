import { CompressedFileWithUrl } from "../functions/compressFileList";
import { Download } from "./Download";

type DownloadsListProps = {
  files: Array<CompressedFileWithUrl>;
};
export function DownloadsList({ files }: DownloadsListProps) {
  return (
    <ol className="flex flex-col gap-1">
      {files.map((file) => (
        <Download key={file.url} file={file} />
      ))}
    </ol>
  );
}
