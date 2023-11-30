import Button from "./SimpleButton";
import { FaTrash } from "react-icons/fa6";

//  this compoents contains buttons for clearing the inputs and donwloading the resume
export default function ClearAndDownload({ clearResume, downloadFunction }) {
  return (
    <>
      <div
        style={{ height: "auto" }}
        className="h-auto w-[30rem] bg-yellow-500 rounded-lg p-3 shadow-gray-500 shadow-lg "
      >
        <div className="flex justify-evenly items-center">
          <div className="flex justify-center">
            <Button
              text={
                <>
                  <FaTrash />
                  Clear Resume
                </>
              }
              width="12rem"
              onClickFunction={clearResume}
            />
          </div>
          <Button
            text={"Download"}
            width="12rem"
            onClickFunction={downloadFunction}
          />
        </div>
      </div>
    </>
  );
}
