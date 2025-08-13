import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./assets/Home"
import NotFound from "./assets/NotFound"


function App() {
 

  return (
    <>
          <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
