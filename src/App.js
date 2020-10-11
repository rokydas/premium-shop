import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { products } from './Components/ProductList/ProductList';
import CashMemo from './Components/CashMemo/CashMemo';

export const CashContext = createContext();

function App() {

  const [ clientInfo, setClientInfo ] = useState({
    isCash: false,
    clientName: '',
    clientAge: '',
    clientAddress: ''
  })

  const [ cashMemoInfo, setCashMemoInfo ] = useState(products);

  // const [cashMemoInfo, setCashMemoInfo] = useState({
  //   isCash: false,
  //   clientName: '',
  //   clientAge: '',
  //   clientAddress: '',
  //   product1Name: 'বার্থডে ফয়েল পেপার',
  //   product2Name: 'বেলুন',
  //   product3Name: 'স্প্রে',
  //   product4Name: 'বার্থডে ক্যাপ',
  //   product5Name: 'স্পার্কিলিং ক্যান্ডেল',
  //   product6Name: 'মিউজিক ক্যান্ডেল',
  //   product7Name: 'জরি',
  //   product1Price: 100,
  //   product1Quantity: 0,
  //   product2Price: 5,
  //   product2Quantity: 0,
  //   product3Price: 80,
  //   product3Quantity: 0,
  //   product4Price: 20,
  //   product4Quantity: 0,
  //   product5Price: 50,
  //   product5Quantity: 0,
  //   product6Price: 70,
  //   product6Quantity: 0,
  //   product7Price: 20,
  //   product7Quantity: 0,
  // });

  // console.log(cashMemoInfo, clientInfo);

  // value={{ name: [name, setName], color: [color, setColor] }}

  return (
    <CashContext.Provider value={ {client: [clientInfo, setClientInfo],  cash: [cashMemoInfo, setCashMemoInfo]}}>
      <div className="bangla-font text-center">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <div>
                <Home/>
              </div>
            </Route>
            <PrivateRoute path="/cash-memo">
              <CashMemo/>
            </PrivateRoute>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </div>
    </CashContext.Provider>
  );
}

export default App;
