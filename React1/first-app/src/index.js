import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


/* function formatName(user) {
  return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Katya',
    lastName: 'Kushnir'
  };

  const element = <h1>Hello, {formatName(user)}</h1>;
    
ReactDOM.render(
  element,
  document.getElementById('root')
); */

/*function time() {
  const element = (
    <div>
      <h1>Hello? world!</h1>
      <h2>It is {
        new Date().toLocaleTimeString()
        }
      </h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
setInterval(time, 1000);*/

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
  text: "I like to study React",
  author: {
    name: "HappyKitty",
    avatarUrl: 'https://placekitten.com/96/140'
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
