import Blogs from "../Components/Blogs";
import NavBar from "../Components/NavBar";
import OwnData from "../Components/OwnData";
function Blog() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="content">
          <Blogs />
          <OwnData />
        </div>
      </div>
    </>
  );
}

export default Blog;
