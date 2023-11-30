import Description from "./CVDisplayComponents/DescriptionUnderHeader";
import Header from "./CVDisplayComponents/Header";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Fragment } from "react";


// this component takes the main objects of personal, educational and experience forms and if they have more than one keys,
// it displayes the information on the screen. as the values in the input are changing so are the objects updated and at the same
// time the information is passed to this component and displayed
export default function CVDisplay({
  personalInformaitonObject,
  educationObject,
  experienceObject,
  hideEducationObject,
  hideExperienceObject,
}) {
  return (
    <div className="resume flex-grow bg-gray-200 p-7 h-auto shadow-lg shadow-gray-400">
      <div className=" h-[9rem] bg-yellow-400 flex flex-col justify-center items-center">
        <p className="font-bold text-4xl">
          {personalInformaitonObject["Full Name"]}
        </p>
        <div className="flex justify-center items-center font-semibold mt-2">
          <div>{<>
                <div className="flex justify-center items-center">
                  <MdEmail size={20}/>{personalInformaitonObject["Email"]}
                </div>
              </>}
          </div>
          <div className="ml-4">{<>
                <div className="flex justify-center items-center">
                  <FaPhoneAlt size={20} />{personalInformaitonObject["Phone Number"]}
                </div>
              </>}
          </div>
    
        </div>
      </div>
      {Object.keys(educationObject).length > 0 ? (
        <>
          <div>
            <Header text={"Education"} />
          </div>
          <div>
            {Object.keys(educationObject).length === 0
              ? ""
              : Object.keys(educationObject).map((heading, index) => {
                  if(hideEducationObject.includes(heading)){
                    return null
                  }
                  else{
                    const startingDate = educationObject[heading]["Start Date"];
                    const endingDate = educationObject[heading]["End Date"];
                    const place = educationObject[heading]["School"] || "";
                    const achievement = educationObject[heading]["Degree"] || "";
                    const location = educationObject[heading]["Location"] || "";
                    return (
                      <Fragment key={index}>
                        <div key={index}>
                          <div>
                            <Description
                              startDate={startingDate}
                              endDate={endingDate}
                              place={place}
                              achievement={achievement}
                              location={location}
                            />
                          </div>
                        </div>
                      </Fragment>
                    );
                    }
                  
                })}
          </div>
        </>
      ) : (
        ""
      )}
      {Object.keys(experienceObject).length > 0 ? (
        <>
          <div>
            <Header text={"Experience"} />
          </div>
          <div>
            {Object.keys(experienceObject).length === 0
              ? ""
              : Object.keys(experienceObject).map((heading, index) => {
                  if (hideExperienceObject.includes(heading)){
                    return null
                  }
                  else{
                    const startingDate = experienceObject[heading]["Start Date"];
                  const endingDate = experienceObject[heading]["End Date"];
                  const place = experienceObject[heading]["Company Name"] || "";
                  const achievement =
                    experienceObject[heading]["Position Title"] || "";
                  const location = experienceObject[heading]["Location"] || "";
                  const description =
                    experienceObject[heading]["Description"] || "";
                  return (
                    <Fragment key={index}>
                      <div key={index}>
                        <div>
                          <Description
                            startDate={startingDate}
                            endDate={endingDate}
                            place={place}
                            achievement={achievement}
                            location={location}
                            formtype="Experience"
                            description={description}
                          />
                        </div>
                      </div>
                    </Fragment>
                  );
                  }
                })}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
