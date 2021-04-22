import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';


 const firebaseConfig = {
    apiKey: "AIzaSyC-N6_99efHfSrL-ytctXz35wFbgZMOtjM",
    authDomain: "mrdonalds-89069.firebaseapp.com",
    databaseURL: "https://mrdonalds-89069-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mrdonalds-89069",
    storageBucket: "mrdonalds-89069.appspot.com",
    messagingSenderId: "366937085848",
    appId: "1:366937085848:web:3f3bc7fd6d9c9cbb547ded"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem);

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order 
        {...orders} 
        {...openItem} 
        {...auth}
        firebaseDatabase={firebase.database}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
