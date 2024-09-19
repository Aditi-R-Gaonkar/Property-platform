import { IoCloudUploadOutline } from "react-icons/io5";
import Perks from "../Perks";
import axios from "axios";
import { useState } from "react";

export default function AddnewForm() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addPhotos, setAddPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    try {
      const { data: filename } = await axios.post("/upload-by-link", {
        link: photoLink,
      });
      setAddPhotos((prev) => [...prev, filename]);
      setPhotoLink("");
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  }
  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    axios
      .post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        setAddPhotos((prev) => [...prev, ...filenames]);
      })
      .catch((error) => {
        console.error("Error uploading files:", error);
      });
  }
  return (
    <div>
      <form className="mt-4">
        <h2 className="text-xl mt-4">Title</h2>
        <input
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          type="text"
          placeholder="Name for the place to be displayed to users"
        />
        <h2 className="text-xl">Address</h2>
        <input
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
          type="text"
          placeholder="Location"
        />
        <h2 className="text-xl mt-4">Photos</h2>
        <p className="text-sm text-gray-500">
          Add photos here. More == better!!
        </p>
        <div className="flex gap-2">
          <input
            value={photoLink}
            onChange={(ev) => setPhotoLink(ev.target.value)}
            type="text"
            placeholder="Add using links..."
          />
          <button
            type="button"
            onClick={addPhotoByLink}
            className="bg-gray-200 px-4 rounded-2xl"
          >
            Add photo
          </button>
        </div>

        <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {addPhotos.length > 0 &&
            addPhotos.map((link, index) => (
              <div key={index} className="h-32 flex">
                <img
                  className="rounded-2xl w-full object-cover"
                  src={`http://localhost:3000/uploads/${link}`}
                  alt="Uploaded preview"
                />
              </div>
            ))}
          <label
            type="button"
            className="cursor-pointer flex items-center justify-center border bg-transparent rounded-2xl gap-2 p-8 text-gray-600"
          >
            <input
              type="file"
              multiple
              className="hidden"
              onChange={uploadPhoto}
            />
            <IoCloudUploadOutline className="text-xl" />
            Upload
          </label>
        </div>
        <h2 className="text-xl mt-4">Description</h2>
        <p className="text-sm text-gray-500">Description of the place</p>
        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <h2 className="text-xl mt-4">Perks</h2>
        <p className="text-sm text-gray-500">Select the perks</p>
        <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks} />
        </div>
        <button type="submit" className="primary my-4">
          Save
        </button>
      </form>
    </div>
  );
}
