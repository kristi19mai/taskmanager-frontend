import { useRef } from "react";
import { IoAttach } from "react-icons/io5";

const FileInput = ({ handleChangeFile, fileTitle }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <input
        type="file"
        name="file"
        id="file"
        ref={fileInputRef}
        className="hidden-file-input"
        accept=".pdf"
        onChange={handleChangeFile}
        aria-hidden="true"
      />
      <button
        type="button"
        className="icon-btn custom-file-btn"
        onClick={handleButtonClick}
      >
        <IoAttach />
        <span> Datei hinzufügen</span>
      </button>
    </>
  );
};
export default FileInput;
