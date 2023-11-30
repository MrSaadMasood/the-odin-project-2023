import { Input } from "./Input";
import { Label } from "./Label";
import Button from "./SimpleButton";

import { FaTrash } from "react-icons/fa6";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// based on the type of form that is being activated / invoked it loops over the heading of the form and returns
// labels with heading names and inputs
// if a submitted object is clicked it then loops over the headings and and displays the values of the 
// submitted object for editing else the inputs are empty
// also it deletes any already submitted form and also is responsible for displaying the date input methods
export default function Information({
  hideForm,
  deleteThisForm,
  handleSubmission,
  objectPassed,
  typeOfForm,
  startDate,
  endDate,
  startDateSetter,
  endDateSetter,
  valueSetterFunction,
}) {
  const trashIcon = <FaTrash size={13} />;

  const educationFormHeadings = [
    "School",
    "Degree",
    "Start Date",
    "End Date",
    "Location",
  ];

  const experienceFormHeadings = [
    "Company Name",
    "Position Title",
    "Start Date",
    "End Date",
    "Location",
    "Description",
  ];

  const formType =
    typeOfForm === "Education" ? educationFormHeadings : experienceFormHeadings;

  return (
    <>
      <form className="mt-4" onSubmit={(e) => handleSubmission(e)}>
        {formType.map((heading, index) => {
          const valueToPass =
            Object.keys(objectPassed).length === 0 ? "" : objectPassed[heading];

          return (
            <>
              <div key={index}>
                <Label text={heading} />
                <br />
                {index === 2 ? (
                  <DatePicker
                    showIcon
                    className="rounded bg-gray-300 p-1 w-[28rem] mt-1"
                    selected={startDate}
                    onChange={(date) => startDateSetter(date, typeOfForm)}
                  />
                ) : index === 3 ? (
                  <DatePicker
                    showIcon
                    className=" rounded bg-gray-300 p-1 w-[28rem] mt-1"
                    selected={endDate}
                    onChange={(date) => endDateSetter(date, typeOfForm)}
                  />
                ) : (
                  <Input
                    isRequired={false}
                    value={valueToPass}
                    typeofForm={typeOfForm}
                    id={heading}
                    name={heading}
                    valueSetterFunction={valueSetterFunction}
                  />
                )}
              </div>
            </>
          );
        })}
        <div className="flex justify-between items-center mt-7">
          <div>
            <Button
              text={<>{trashIcon} Delete</>}
              onClickFunction={(e) => deleteThisForm(e, objectPassed)}
            />
          </div>
          <div className="flex justify-center items-center">
            <Button text={"Cancel"} onClickFunction={e => handleSubmission(e)} />
            <Button text={"Submit"} />
          </div>
        </div>
      </form>
    </>
  );
}
