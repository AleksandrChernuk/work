import { styled } from "styled-components";
import s from "./FriendList.module.css";
import { clsx } from "clsx";

const FriendList = ({ arr }) => {
  const Span = styled.span`
    color: ${({ isonline }) => (isonline ? "red" : "blue")};
  `;
  //className={clsx(isOnline ? s.red : s.blue)}
  return (
    <>
      {arr && (
        <ul className="friend-list">
          {arr.map(({ id, avatar, name, isOnline }) => (
            <li key={id} className="item">
              <Span isonline={isOnline}>0</Span>
              <img className="avatar" src={avatar} alt="User avatar" width="48" />
              <p className="name">{name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FriendList;

//  "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
//     "id"
