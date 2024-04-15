import { useNavigate } from "react-router-dom";
function Backbutton() {
  const navigateTo = useNavigate();
  function handleBack() {
    navigateTo("/blog", { replace: true });
  }
  return (
    <button className="back-button" onClick={handleBack}>
      Back
    </button>
  );
}

export default Backbutton;
