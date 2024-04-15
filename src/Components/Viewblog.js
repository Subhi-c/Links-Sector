import Backbutton from "./Backbutton";
function Viewblog({ blogPost }) {
  return (
    <>
      <div className="blog-view">
        <Backbutton />
        <div>
          <h2>
            {blogPost.firstname}
            {blogPost.lastname}
          </h2>
          <p>{blogPost.email}</p>
        </div>
        <div className="blog-about">
          <p>
            {blogPost.About}
            {blogPost.About}
          </p>
        </div>
      </div>
    </>
  );
}

export default Viewblog;
