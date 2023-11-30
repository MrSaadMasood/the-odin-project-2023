import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import SumbittedTaskDiv from "./SubmittedTasks";
import Information from "./InformationForm";

export default function Experience({
  objectToPassKeySetterFunction,
  setObjectOnFormDeletionFunction,
  updateFormNumber,
  experienceObjectPassed,
  startDate,
  endDate,
  startDateSetterFunction,
  endDateSetterFunction,
  valueSetterFunction,
  hideTheSubmittedTaskFromResume,
  showTheSubmittedTaskInResume,
}) {
  // the states set the height of the div, check if the arrow button is clicked

  const [height, setHeight] = useState(6);
  const [arrowClick, setArrowClicked] = useState(false);
  const [addButton, setAddButton] = useState(false);
  const [delCancelButton] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isshowFormDataSelected, setIsShowFormDataSelected] = useState(false);

  const typeofForm = "Experience";

  const buttonRotation = arrowClick
    ? "rotate-180 ease-in duration-300"
    : "rotate-0 ease-in duration-300";

  // funtions that set the height when the arrow is clicked, when the add button is clicked,
  // when the cancel button is clicked, when the delete button is clicked and when the submit button is clicked
  function heightSetter() {
    if (!arrowClick) {
      setHeight(12);
      setArrowClicked(true);
      setAddButton(false);
      setIsFormSubmitted(true);
    } else {
      setHeight(5);
      setArrowClicked(false);
    }
  }
  function showForm() {
    if (!addButton) {
      setHeight(29);
      setAddButton(true);
      setArrowClicked(false);
      setIsFormSubmitted(false);
    }
  }
  function hideForm(e) {
    if (!delCancelButton) {
      e.preventDefault();
      setHeight(10);
      setArrowClicked(true);
      setAddButton(false);
      setIsFormSubmitted(true);
      setIsShowFormDataSelected(false);
      objectToPassKeySetterFunction(null, typeofForm);
    }
  }

  function deleteThisForm(e, objectPassed) {
    if (Object.keys(objectPassed).length === 0) {
      hideForm(e);
    } else {
      setObjectOnFormDeletionFunction(objectPassed, typeofForm);
      hideForm(e);
    }
  }

  // on submission is sets the height and checks if an already existing tasks is being submitted
  // again if yes then it does not increases the keye/ formNumber

  function handleSubmission(e) {
    e.preventDefault();
    setHeight(12);
    setArrowClicked(true);
    setAddButton(false);
    setIsFormSubmitted(true);

    objectToPassKeySetterFunction(null, typeofForm);
    if (!isshowFormDataSelected) {
      updateFormNumber(1, typeofForm);
    }

    e.target.reset();
  }

  // funtion for when the already existing form is clicked
  function showFormWithData(e, index) {
    objectToPassKeySetterFunction(index, typeofForm);
    setAddButton(true);
    setArrowClicked(false);
    setIsFormSubmitted(false);
    setIsShowFormDataSelected(true);
  }

  return (
    <>
      <div
        style={{ height: "auto", transition: "height .2s ease-in" }}
        className="h-auto w-[30rem] bg-yellow-500 rounded-lg p-3 shadow-gray-500 shadow-lg "
      >
        <div className="flex justify-between items-center ease-in duration-500">
          <div className="flex justify-center items-center">
            <FaGraduationCap size={30} />
            <h2 className=" font-bold text-3xl mb-2 ml-2">Experience</h2>
          </div>
          <button onClick={heightSetter} className={buttonRotation}>
            <IoIosArrowDown size={20} />
          </button>
        </div>

        <div className=" h-auto flex flex-col justify-center items-center">
          {arrowClick === true ? (
            <>
              {isFormSubmitted ? (
                <>
                  {Object.keys(experienceObjectPassed).map((object, index) => {
                    return (
                      <>
                        {/* checks if any tasks are submitted if yes then shows the heading of those tasks else nothing with the
                      add button */}
                        <SumbittedTaskDiv
                          formObject={experienceObjectPassed}
                          index={index}
                          showFormWithData={showFormWithData}
                          formType={"Experience"}
                          hideTheSubmittedTaskFromResume={hideTheSubmittedTaskFromResume}
                          showTheSubmittedTaskInResume={showTheSubmittedTaskInResume}
                        />
                      </>
                    );
                  })}
                </>
              ) : (
                ""
              )}
              <button
                className="add_task border-[2px] border-black rounded-full p-2 font-bold mb-3"
                onClick={showForm}
              >
                + Experience
              </button>
            </>
          ) : (
            " "
          )}
        </div>
        <div>
          {/* if add button is clicked it creates a form and explads the div */}
          {addButton === true ? (
            <Information
              hideForm={hideForm}
              deleteThisForm={deleteThisForm}
              handleSubmission={handleSubmission}
              objectPassed={experienceObjectPassed}
              typeOfForm={typeofForm}
              startDate={startDate}
              endDate={endDate}
              startDateSetter={startDateSetterFunction}
              endDateSetter={endDateSetterFunction}
              valueSetterFunction={valueSetterFunction}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
