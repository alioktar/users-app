import Users from "./User/Users";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <div className="flex flex-col h-full items-center">
      <Header title={"Users App"} />
      <div className="container flex-1">
        <Users />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
