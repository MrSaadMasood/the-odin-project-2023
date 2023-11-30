import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

// this component is activated when a task is submitted it checks the form type on submission and then 
// displays the first heading of the submitted task along with the add button
// ther is eye button also that is use to hide the particular content on the screen
export default function SumbittedTaskDiv({
  formObject,
  showFormWithData,
  index,
  formType,
  hideTheSubmittedTaskFromResume,
  showTheSubmittedTaskInResume,
}) {

  

  const [eyeButtonClicked, setEyeButtonClicked] = useState(false);
  const objectPropertyBasedOnFormType =
    formType === "Education" ? "School" : "Company Name";
  function eyeClickedFunction() {
    if (eyeButtonClicked === false) {
      setEyeButtonClicked(true);
      hideTheSubmittedTaskFromResume(index, formType)
    } else {
      setEyeButtonClicked(false);
      showTheSubmittedTaskInResume(index, formType)
    }
  }
  return (
    <div
      key={index}
      className="flex justify-between items-center border-b border-black w-[100%] text-sm font-bold mt-3"
    >
      <p className="cursor-pointer" onClick={(e) => showFormWithData(e, index)}>
        {formObject[index][objectPropertyBasedOnFormType]}
      </p>
      <button onClick={eyeClickedFunction}>
        {eyeButtonClicked ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
      </button>
    </div>
  );
}
