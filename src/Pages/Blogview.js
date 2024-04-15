import { useLocation } from "react-router-dom";
import data from "../Data/data.json";
import Viewblog from "../Components/Viewblog";
function Blogview() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const blogPost = data.find((d) => d.id == id);
  return (
    <>
      <Viewblog blogPost={blogPost} />
    </>
  );
}
export default Blogview;
