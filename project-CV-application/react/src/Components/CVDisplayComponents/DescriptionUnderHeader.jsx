// this funtion takes the the different values and the displays then in the div for the resume.
// since the dates are stored as objects inside the objects they are converted to string first
export default function Description({
  startDate,
  endDate,
  location,
  place,
  achievement,
  formtype = "Education",
  description = null,
}) {
  const formattedStartDate = startDate.toLocaleDateString();
  const formattedEndDate = endDate.toLocaleDateString();

  return (
    <div className="flex justify-center items-start mb-5">
      <div className="w-[45rem] flex flex-row items-start"> 
        <div className=" h-auto">
          <div className="leftside items-start w-[10rem] h-auto break-all">
            <p className=" text-sm">
              {formattedStartDate}
              <span>-</span> {formattedEndDate}
            </p>
            <p>{location}</p>
          </div>
        </div>
        <div className=" h-auto ml-7">
          <div className="rightside">
            <p className="font-bold text-[1.1rem]">{place}</p>
            <p>{achievement}</p>
            {description === null ? (
              ""
            ) : (
              <>
                <div className="w-[30rem] h-auto break-all">
                  <p className="">{description}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
