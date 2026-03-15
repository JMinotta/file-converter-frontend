import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate()
  const handleVolver = () => {
    navigate("/")
  }
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <button onClick={handleVolver} className="btn btn-ghost text-xl">File-Converter</button>
    </div>
  );
}

export default NavBar;
