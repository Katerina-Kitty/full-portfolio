import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


//Компоненты и пропсы

/*function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function MoreName() {
  return (
    <div>
    <Welcome name="Katya" />
    <Welcome name="Tanya" />
    <Welcome name="Masha" />
    </div>
  );
}

ReactDOM.render(
  <MoreName />,
  document.getElementById('root')
); */

//PROJECT!

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "UserKitty",
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <Comment date = {comment.date} text = {comment.text} author = {comment.author} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
