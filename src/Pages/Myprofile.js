import Mydata from "../Components/Mydata";
import { useLocation } from "react-router-dom";
import userData from "../Data/owndata.json";
function Myprofile() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const userPost = userData.find((d) => d.id == id);
  return (
    <>
      <div className="my-profile">
        <div className="avatar">
          <Mydata userData={userPost} />
        </div>
      </div>
    </>
  );
}
export default Myprofile;
