// return the jsx input varaible based on the condition if the input field is required or not and also
// triggers funtions when the input value is changed

export function Input({
  isRequired = true,
  value,
  valueSetterFunction,
  id,
  name,
  typeofForm = "Personal",
}) {

  return isRequired ? (
    <input
      type="text"
      className="rounded bg-gray-300 p-1 w-[28rem] mt-1 mb-2"
      required
      id={id}
      name={name}
      value={value}
      title={typeofForm}
      onChange={(e) => valueSetterFunction(e, typeofForm)}
    />
  ) : (
    <input
      type="text"
      className="rounded bg-gray-300 p-1 w-[28rem] mt-1"
      id={id}
      name={name}
      value={value}
      title={typeofForm}
      onChange={(e) => valueSetterFunction(e, typeofForm)}
    />
  );
}
