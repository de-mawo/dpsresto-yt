'use client'

import React, { ChangeEvent, useCallback, useState } from "react";

import { AiOutlineCloudUpload } from "react-icons/ai";

type Props ={
  handleCallBack: (file: File) => void;
  id?: string;
}

const UploadImg = ({handleCallBack, id}:Props) => {
  const [data, setData] = useState<{image: string | null}>({image: null});
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false); 

  const onChangePicture = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.currentTarget.files && event.currentTarget.files[0]
      if (file) {
        if (file.size / 1024 / 1024 > 3) {
        //   toast.error('File size too big (max 3MB)')
        } else {
          handleCallBack(file)
          setFile(file)
          const reader = new FileReader()
          reader.onload = (e) => {
            setData((prev) => ({ ...prev, image: e.target?.result as string }))
          }
          reader.readAsDataURL(file)
        }
      }
    },
    [handleCallBack]
  )

//   const [saving, setSaving] = useState(false)

//   const saveDisabled = useMemo(() => {
//     return !data.image || saving
//   }, [data.image, saving])

  return (
    <div>
      <div className="space-y-1 mb-4">
        <h2 className="text-xl font-semibold">Upload a new file</h2>
        <p className="text-sm text-gray-500">Accepted formats: .png, .jpg</p>
      </div>
      <label
        htmlFor={id}
        className="group relative mt-2 flex h-56 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50"
      >
        <div
          className="absolute z-[5] h-full w-full rounded-md"
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(true);
          }}
          onDragEnter={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);

            const file = e.dataTransfer.files && e.dataTransfer.files[0];
            if (file) {
              if (file.size / 1024 / 1024 > 50) {
                // toast.error("File size too big (max 50MB)");
              } else {
                setFile(file);
                const reader = new FileReader();
                reader.onload = (e) => {
                  setData((prev) => ({
                    ...prev,
                    image: e.target?.result as string,
                  }));
                };
                reader.readAsDataURL(file);
              }
            }
          }}
        />
        <div
          className={`${
            dragActive ? "border-2 border-black" : ""
          } absolute z-[3] flex h-full w-full flex-col items-center justify-center rounded-md px-10 transition-all ${
            data.image
              ? "bg-white/80 opacity-0 hover:opacity-100 hover:backdrop-blur-md"
              : "bg-white opacity-100 hover:bg-gray-50"
          }`}
        >
          <AiOutlineCloudUpload
            className={`${
              dragActive ? "scale-110" : "scale-100"
            } h-7 w-7 text-gray-500 transition-all duration-75 group-hover:scale-110 group-active:scale-95`}
          />

          <p className="mt-2 text-center text-sm text-gray-500">
            Drag and drop or click to upload.
          </p>
          <p className="mt-2 text-center text-sm text-gray-500">
            Max file size: 50MB
          </p>
          <span className="sr-only">Photo upload</span>
        </div>
        {data.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={data.image}
            alt="Preview"
            className="h-full w-full rounded-md object-cover"
          />
        )}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          id={id}
          name="image"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={onChangePicture}
        />
      </div>
    </div>
  );
};

export default UploadImg;