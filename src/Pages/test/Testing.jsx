import { useNavigate } from "react-router-dom";

function Testing() {
  const navigate = useNavigate();

  const handleTesting = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Testing</h1>

      <button onClick={handleTesting}>Click me</button>
    </div>
  );
}

export default Testing;
