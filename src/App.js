import React,{useEffect} from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { logout, selectUser ,login} from './features/appSlice';
import {useSelector,useDispatch} from "react-redux"
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { auth } from './firebase';
function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
   auth.onAuthStateChanged((authUser) =>{
     if (authUser){
       dispatch(login({
        username:authUser.displayName,
        profilePic:authUser.photoURL,
        id:authUser.uid,
        }))
   } else {
     dispatch(logout());
   }
   })
  }, [])
  return (
    <div className="app">
<Router>
 {!user ?
 (<Login/>):(
   <>
   <img className="app__logo" src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg" alt="" />
  <div className="app__body">
       <div className="app_bodyBackground">

        <Switch>
        <Route exact path="/chats/View">
            <ChatView />
          </Route>
        <Route exact path="/chats">
            <Chats />
          </Route>
        <Route exact path="/preview">
            <Preview />
          </Route>
        
          <Route exact path="/">
            <WebcamCapture />
          </Route>
        </Switch>
      </div>
      </div>
      </>
 )}
    
    </Router>


    </div>
  );
}

export default App;
