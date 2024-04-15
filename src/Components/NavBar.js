import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigateTo = useNavigate();
  function handleNewForm() {
    navigateTo("/form", { replace: true });
  }
  return (
    <>
      <header>
        <div>
          <h1>The Links Sector</h1>
        </div>
        <div>
          <button className="new-blog" onClick={handleNewForm}>
            New Blog
          </button>
          <a>Your Profile</a>
        </div>
      </header>
    </>
  );
}

export default NavBar;
