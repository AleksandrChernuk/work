// import ContactList from "./ContactList/ContactList";
// import Container from "./Container/Container";
import Gallery from "./Gallery/Gallery";
import style from "./App.module.css";
// import Profile from "./Profile/Profile";
// import user from "../data/user.json";
// import data from "../data/data.json";
// import Statistics from "./Statistics/Statistics";
// import friends from "../data/friends.json";
// import FriendList from "./FriendList/FriendList";
// import transactions from "../data/transactions.json";
// import TransactionHistory from "./TransactionHistory/TransactionHistory";
// import Feedback from "./Feedback/Feedback";

function App() {
  return (
    <div className={style.App}>
      {/* <Profile user={user} /> */}
      {/* <Statistics stats={data} /> */}
      {/* <FriendList arr={friends} /> */}
      {/* <TransactionHistory items={transactions} /> */}
      {/* <Feedback /> */}
      {/* {<ContactList />} */}
      <Gallery />
    </div>
  );
}

export default App;
