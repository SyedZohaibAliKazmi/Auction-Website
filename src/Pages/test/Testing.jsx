import { Input } from "antd";
import { useNavigate } from "react-router-dom";

function Testing() {
  const navigate = useNavigate();

  const handleTesting = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Testing</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil ad hic sint repellat optio ipsa, expedita doloremque, doloribus architecto est ut odio vel totam pariatur ipsam beatae suscipit distinctio!</p>
      <p>
        <strong>Note:</strong> This is a testing page and it redirects you to the home page when you click the button.
      </p>
      <Input placeholder="Enter Test Time"/>

      <button onClick={handleTesting}>Click me</button>
    </div>
  );
}

export default Testing;
