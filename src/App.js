import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blog";
import Form from "./Pages/Form";
import Blogview from "./Pages/Blogview";
import Myprofile from "./Pages/Myprofile";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/form" element={<Form />} />
        <Route path="/blogview" element={<Blogview />} />
        <Route path="/myaccount" element={<Myprofile />} />
      </Routes>
    </>
  );
}

export default App;
