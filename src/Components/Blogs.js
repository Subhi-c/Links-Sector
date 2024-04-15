import data from "../Data/data.json";
import { useNavigate } from "react-router-dom";
function Blogs() {
  const navigateTo = useNavigate();
  function handleView(id) {
    navigateTo(`/blogview?id=${id}`, { replace: true });
  }
  return (
    <>
      <div id="blog">
        {data.map((d) => (
          <div
            className="blog-card"
            key={d.id}
            onClick={() => handleView(d.id)}
          >
            <h2>
              {d.firstname} {d.lastname}
            </h2>
            <small>{d.email}</small>
            <small>{d.Job}</small>
            <div>
              <p>{d.About}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;
