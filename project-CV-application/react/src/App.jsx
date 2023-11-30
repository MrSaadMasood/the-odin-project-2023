import PersonalInformation from "./Components/PersonInfo";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import CVDisplay from "./Components/CVDisplayer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import ClearAndDownload from "./Components/Download";

export default function App() {
  // variable for main div that is present in the CVDIsplayer Component. Used for downloading later
  const resumeDivForDownload = document.querySelector(".resume");

  // personal information
  const [personalInformationObject, setPersonalInformationObject] = useState({
    "Full Name": "Madara Uchiha",
    Email: "madara@konoha.com",
    "Phone Number": "0900-78601",
  });

  // education information
  // educaitonFormObject is the inner object with all the keys and values of inputs initially empty
  // educationFornNumber is the number of the tasks submitted for education
  // totalEducationObject is the main object that has key of educationFormnumber and value as the inner object
  const [educationFormObject, setEducationFormObject] = useState({});
  const [educationFormNumber, setEducationFormNumber] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [totalEducationObject, setTotalEducationObject] = useState({
    0: {
      School: "Ninja Academy",
      Degree: "Hokage-Level",
      "Start Date": new Date(),
      "End Date": new Date(),
      Location: "Hidden Leaf Village",
    },
  });
  // this state is used when a submitted task is clicked. it takes the key of outer object object and then pass that keys inner
  // object so its values are displayed and can be used for editing
  const [subObjectToPassKey, setSubObjectToPass] = useState(null);
  const [hideEducationObject, setHideEducationObject] = useState([]);


  const educationObjectPassed =
    subObjectToPassKey === null
      ? totalEducationObject
      : totalEducationObject[subObjectToPassKey];

  // experience poriton is the same as education portion with the sample states used for same funtion but for difference
  // component
  const [experienceFormObject, setExperienceFormObject] = useState({});
  const [experieceFormNumber, setExperienceFormNumber] = useState(1);
  const [experieceStartDate, setExperienceStartDate] = useState(new Date());
  const [experienceEndDate, setExperienceEndDate] = useState(new Date());
  const [totalExperienceObject, setTotalExperienceObject] = useState({
    0: {
      "Company Name": "Uchiha Clan",
      "Position Title": "Head of the Clan",
      "Start Date": new Date(),
      "End Date": new Date(),
      Location: "Hidden Leaf Village",
      Description: "Strongest Shinobi in the World",
    },
  });

  const [experieceSubObjectToPassKey, setExperienceSubIObjectToPassKey] =
    useState(null);
  const [hideExperienceObject, setHideExperienceObject] = useState([]);


  const experienceObjectPassed =
    experieceSubObjectToPassKey === null
      ? totalExperienceObject
      : totalExperienceObject[experieceSubObjectToPassKey];

  // funtion that takes a submitted task id/key number and deletes than key in the main object and resets the key values in tha main
  // object. it works based on the object passed
  function setObjectOnFormDeletionFunction(ObjectPassed, typeOfForm) {
    if (typeOfForm === "Education") {
      setTotalEducationObject((totalEducationObject) => {
        Object.keys(totalEducationObject).map((key) => {
          if (totalEducationObject[key] === ObjectPassed) {
            delete totalEducationObject[key];
          }
        });

        const newObjectAfterDeleciton = {};
        Object.keys(totalEducationObject).map((key, index) => {
          newObjectAfterDeleciton[index] = totalEducationObject[key];
        });

        setEducationFormNumber(educationFormNumber - 1);
        return {
          ...newObjectAfterDeleciton,
        };
      });
    } else {
      setTotalExperienceObject((totalExperienceObject) => {
        Object.keys(totalExperienceObject).map((key) => {
          if (totalExperienceObject[key] === ObjectPassed) {
            delete totalExperienceObject[key];
          }
        });

        const newObjectAfterDeleciton = {};
        Object.keys(totalExperienceObject).map((key, index) => {
          newObjectAfterDeleciton[index] = totalExperienceObject[key];
        });
        setExperienceFormNumber(experieceFormNumber - 1);
        return {
          ...newObjectAfterDeleciton,
        };
      });
    }
  }

  // start and end date setter functions based on the form type
  function startDateSetterFunction(date, typeOfForm) {
    if (typeOfForm === "Education") {
      setStartDate(date);
    } else {
      setExperienceStartDate(date);
    }
  }
  function endDateSetterFunction(date, typeOfForm) {
    if (typeOfForm === "Education") {
      setEndDate(date);
    } else {
      setExperienceEndDate(date);
    }
  }

  // on form submission it updates the form number used as a key in the main object based on form type
  function updateFormNumber(value, typeOfForm) {
    if (typeOfForm === "Education") {
      setEducationFormNumber(educationFormNumber + value);
    } else {
      setExperienceFormNumber(experieceFormNumber + value);
    }
  }

  // when a submitted form is selected for editing it passed the id of that form that is corresponding to the key in the
  // main form and that inner object is passed and displayed on the screen
  function objectToPassKeySetterFunction(value, typeOfForm) {
    if (typeOfForm === "Education") {
      console.log("the value is now", value);
      setSubObjectToPass(value);
    } else {
      setExperienceSubIObjectToPassKey(value);
    }
  }

  // the function sets the value of the keys inside the object and then copies that inner object in the main object
  // if a submitted task is selected for editing the key is set to that form number and the editing is then
  // copied to that selected object. otherwise is will add the to the main object directly
  function valueSetterFunction(e, typeOfForm) {
    e.preventDefault();
    const textInputValue = e.target.value;

    const keyName = e.target.id;
    // for personal form
    if (typeOfForm === "Personal") {
      setPersonalInformationObject({
        ...personalInformationObject,
        [keyName]: e.target.value,
      });
    }

    // for educaitonal form
    if (typeOfForm === "Education") {
      const dates = {
        "Start Date": startDate,
        "End Date": endDate,
      };
      const objectToEdit =
        subObjectToPassKey === null ? educationFormNumber : subObjectToPassKey;

      setEducationFormObject((educationFormObject) => ({
        ...educationFormObject,
        ...dates,
        [keyName]: textInputValue,
      }));
      setTotalEducationObject((totalEducationObject) => ({
        ...totalEducationObject,
        [objectToEdit]: {
          ...totalEducationObject[objectToEdit],
          ...dates,
          [keyName]: textInputValue,
        },
      }));
    }

    // for experience form
    if (typeOfForm === "Experience") {
      const dates = {
        "Start Date": experieceStartDate,
        "End Date": experienceEndDate,
      };
      const objectToEdit =
        experieceSubObjectToPassKey === null
          ? experieceFormNumber
          : experieceSubObjectToPassKey;

      setExperienceFormObject((experienceFormObject) => ({
        ...experienceFormObject,
        ...dates,
        [keyName]: textInputValue,
      }));
      setTotalExperienceObject((totalExperienceObject) => ({
        ...totalExperienceObject,
        [objectToEdit]: {
          ...totalExperienceObject[objectToEdit],
          ...dates,
          [keyName]: textInputValue,
        },
      }));
    }
  }

  // this function resets the all the value to "".
  function clearResume() {
    setTotalEducationObject({
      0: {
        School: "",
        Degree: "",
        "Start Date": new Date(),
        "End Date": new Date(),
        Location: "",
      },
    });
    setEducationFormNumber(0);
    setTotalExperienceObject({
      0: {
        "Company Name": "",
        "Position Title": "",
        "Start Date": new Date(),
        "End Date": new Date(),
        Location: "",
        Description: "",
      },
    });
    setEducationFormNumber(0);
    setPersonalInformationObject({
      "Full Name": "",
      Email: "",
      "Phone Number": "",
    });
  }
// this funtion handles if the user want to hide an added task and prevent it from showing to the resume.
// the functions creates an array then is passed to the CVDisplayer component. which in the map function
// check if the keys is present in the array. it will then filter out those keys
  function hideTheSubmittedTaskFromResume(index, typeOfForm) {
    const value = index.toString();

    if (typeOfForm === "Education") {
      setHideEducationObject((hideEducationObject) => {
        const updatedArray = [...hideEducationObject, value];
        return [...updatedArray];
      });
    } else {
      setHideExperienceObject((hideExperienceObject)=>{
        const updatedArray = [...hideExperienceObject, value]
        return [...updatedArray]
      });
    }
  }

  // this funtion is the reverse of the above funtion and when invoked will remove an element from the array
  // using the filter method
  // and so the previously hidden tasks are now displayed on the resume
  function showTheSubmittedTaskInResume(index, typeOfForm){
    const value = index.toString();
    if (typeOfForm === "Education"){
      setHideEducationObject((hideEducationObject)=>{
        const arrayAfterItemRemoval = hideEducationObject.filter(item =>{
          if(item !== value){
            return item
          }
        })
        return [...arrayAfterItemRemoval]
      })
    }
    else{
      setHideExperienceObject((hideExperienceObject)=>{
        const arrayAfterItemRemoval = hideExperienceObject.filter(item =>{
          if(item !== value){
            return item
          }
        })
        return [...arrayAfterItemRemoval]
      })
    }
  }

  // this is an async function used to download the resume. It uses a promises.
  // the html2canvas library convers the jsx to image and the the jspdf convers the image to pdf format
  async function downloadResume() {
    try {
      const canvas = await html2canvas(resumeDivForDownload, { scale: 4 });
      const imageUrl = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imageUrl, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("resume.pdf");
    } catch (error) {
      console.error("Error generating resume:", error);
    }
  }

  return (
    <div className="flex bg-gray-100">
      <div className="flex-1 p-12">
        <ClearAndDownload
          clearResume={clearResume}
          downloadFunction={downloadResume}
        />
        <br />
        <PersonalInformation
          personalInformationObject={personalInformationObject}
          valueSetterFunction={valueSetterFunction}
        />
        <br />
        <Education
          educationFormObject={educationObjectPassed}
          startDate={startDate}
          endDate={endDate}
          startDateSetterFunction={startDateSetterFunction}
          endDateSetterFunction={endDateSetterFunction}
          objectToPassKeySetterFunction={objectToPassKeySetterFunction}
          setObjectOnFormDeletionFunction={setObjectOnFormDeletionFunction}
          valueSetterFunction={valueSetterFunction}
          updateFormNumber={updateFormNumber}
          hideTheSubmittedTaskFromResume={hideTheSubmittedTaskFromResume}
          showTheSubmittedTaskInResume={showTheSubmittedTaskInResume}
        />
        <br />
        <Experience
          experienceObjectPassed={experienceObjectPassed}
          startDate={experieceStartDate}
          endDate={experienceEndDate}
          objectToPassKeySetterFunction={objectToPassKeySetterFunction}
          setObjectOnFormDeletionFunction={setObjectOnFormDeletionFunction}
          updateFormNumber={updateFormNumber}
          startDateSetterFunction={startDateSetterFunction}
          endDateSetterFunction={endDateSetterFunction}
          valueSetterFunction={valueSetterFunction}
          hideTheSubmittedTaskFromResume={hideTheSubmittedTaskFromResume}
          showTheSubmittedTaskInResume={showTheSubmittedTaskInResume}
        />
      </div>
      <div className=" flex-grow p-12">
        <CVDisplay
          personalInformaitonObject={personalInformationObject}
          educationObject={totalEducationObject}
          experienceObject={totalExperienceObject}
          hideEducationObject={hideEducationObject}
          hideExperienceObject={hideExperienceObject}
        />
      </div>
    </div>
  );
}
