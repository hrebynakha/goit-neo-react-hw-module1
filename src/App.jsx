import "./App.css";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";

function App() {
  return (
    <>
      <Container>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </Container>
      <Container>
        <FriendList friends={friends} />
      </Container>
    </>
  );
}

export default App;
