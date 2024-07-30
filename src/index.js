import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButtonBind from './chapter_08/ConfirmButtonBind';
import ConfirmButtonClassFieldsSyntax from './chapter_08/ConfirmButtonClassFieldsSyntax';
import ConfirmButtonFunction from './chapter_08/ConfirmButtonFunction';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import Test from './chapter_15/test';

const root = ReactDOM.createRoot(document.getElementById('root'));
// [ chapter_03 ]
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Library />
//   </React.StrictMode>
// );

// [ chapter_04 ] 현재 시간 실시간 표시
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000)

// [ chapter_05 ]
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// );

// [ chapter_06 ]
// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>
// );

// [ chapter_07 ]
// root.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>
// );

// [ chapter_08 ]
// root.render(
//   <React.StrictMode>
//     바인드 방법
//     <ConfirmButtonBind /> 
//     <hr />
//     Class field syntax 방법
//     <ConfirmButtonClassFieldsSyntax />
//     <hr /> 
//     함수 컴포넌트 방법
//     <ConfirmButtonFunction /> 
//   </React.StrictMode>
// );

// [ chapter_09 ]
// root.render(
//   <React.StrictMode>
//     <LandingPage /> 
//   </React.StrictMode>
// );

// [ chapter_10 ]
// root.render(
//   <React.StrictMode>
//     <AttendanceBook /> 
//   </React.StrictMode>
// );

// [ chapter_11 ]
// root.render(
//   <React.StrictMode>
//     <SignUp /> 
//   </React.StrictMode>
// );

// [ chapter_12 ]
// root.render(
//   <React.StrictMode>
//     <Calculator /> 
//   </React.StrictMode>
// );

// [ chapter_13 ]
// root.render(
//   <React.StrictMode>
//     <ProfileCard /> 
//   </React.StrictMode>
// );

// [ chapter_14 ]
root.render(
  <React.StrictMode>
    <DarkOrLight /> 
  </React.StrictMode>
);

// [ chapter_15 ]
// root.render(
//   <React.StrictMode>
//     <Test /> 
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
