
import { NotificationProvider } from '@web3uikit/core';
import './App.css';
import Voting from './Components/Voting/Voting';

function App() {

  return (

    <NotificationProvider>
      <Voting />
    </NotificationProvider>
  );



}






export default App;
