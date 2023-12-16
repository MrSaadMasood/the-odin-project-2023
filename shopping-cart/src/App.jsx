import { Outlet } from "react-router-dom"

// given an outlet as the main page changes based on the option user selects
function App() {

  return (
   <>
   <Outlet />
   </>
  )
}

export default App
