
export default function Loading() {
  return (
    <>
      <div className="loading absolute top-[50%] left-[50%] ">
        <div className=" animate-spin">
          <img src="../assets/brain.png" alt="" width={"100px"} />
        </div>
      </div>
    </>
  );
}
