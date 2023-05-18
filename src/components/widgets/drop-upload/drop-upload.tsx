import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";

type DropProps = {
  multiple?: boolean;
  disabled?: boolean;
  onDrop: (files: File[]) => void;
  preview?: boolean;
};

export const DropUpload = (props: DropProps) => {
  const { multiple = true, disabled = false, onDrop, preview = false } = props;
  const [previews, setPreviews] = useState<
    {
      name: string;
      preview: string;
    }[]
  >([]);

  const onFileDrop = (files: File[]) => {
    onDrop(files);
    if (preview) {
      setPreviews(
        files.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    }
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => previews.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <Dropzone multiple={multiple} disabled={disabled} onDrop={onFileDrop}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="border-2 border-solid border-primary rounded-xl p-8 my-4"
          >
            <input {...getInputProps()} />
            <p className="font-bold text-primaryDark">
              Drag 'n' drop some files here, or click to select files
            </p>
          </div>
        )}
      </Dropzone>
      {preview &&
        previews.map((file) => (
          <div className="py-8" key={file.name}>
            <img
              className="w-52 aspect-square object-cover"
              src={file.preview}
            />
          </div>
        ))}
    </>
  );
};
