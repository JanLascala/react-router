import { BrowserRouter, Routes, Route } from "react-router-dom";
//layout import
import DefaultLayout from "./DefaultLayout/DefaultLayout";
//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Posts from "./Pages/Posts";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/posts" Component={Posts} />
            <Route path="/about" Component={About} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
