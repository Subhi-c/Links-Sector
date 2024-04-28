import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigateTo = useNavigate();
  function handleNewForm() {
    navigateTo("/form", { replace: true });
  }
  function handleProfile() {
    navigateTo(`/myaccount?id=${1}`, { replace: true });
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
          <a onClick={handleProfile}>Your Profile</a>
        </div>
      </header>
    </>
  );
}

export default NavBar;
