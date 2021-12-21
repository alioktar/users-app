import { Navigate } from "react-router-dom";

function Home() {
  return (
    <div className="container flex-1">
      <Navigate to="/users" />
    </div>
  );
}

export default Home;
