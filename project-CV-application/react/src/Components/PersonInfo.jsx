import { Fragment } from "react";
import { Input } from "./Input";
import { Label } from "./Label";

// same for the personal information it loops over the heading and the displays the label and input components
export default function PersonalInformation({
  personalInformationObject,
  valueSetterFunction,
}) {
  const personalInfoHeadings = ["Full Name", "Email", "Phone Number"];
  return (
    <>
      <div>
        <div
          className="personal_info h-auto w-[30rem] bg-yellow-500 rounded-lg 
             p-3 shadow-gray-500 shadow-lg "
        >
          <h2 className=" font-bold text-3xl mb-2">Personal Details</h2>
          <form>
            {personalInfoHeadings.map((heading, index) => {
              return (
                <Fragment key={index}>
                  <div key={index}>
                    <Label text={heading} />
                    <br />
                    <Input
                      id={heading}
                      name={heading}
                      value={personalInformationObject[heading]}
                      valueSetterFunction={valueSetterFunction}
                    />
                  </div>
                </Fragment>
              );
            })}
          </form>
        </div>
      </div>
    </>
  );
}
