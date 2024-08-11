import { CompressedFileWithUrl } from "../functions/compressFileList";

type DownloadProps = {
  file: CompressedFileWithUrl;
};
export function Download({ file: { url, file } }: DownloadProps) {
  return (
    <li className="bg-blue-500 p-3 rounded-md">
      <a className="hover:text-blue-200" href={url} download={file.name}>
        {`${file.name}-compressed.png`}
      </a>
    </li>
  );
}
