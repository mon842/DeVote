
import { NotificationProvider } from '@web3uikit/core';
import './App.css';
import Voting from './components/Voting/Voting';

function App() {

  return (

    <NotificationProvider>
      <Voting />
    </NotificationProvider>
  );



}






export default App;
