import logo from './logo.svg';
import './App.css';
import { OrderList } from './compo/orderList.tsx';
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store.ts';

function App() {
  return (
    <Provider store={store}><div className="App">
      <OrderList />
    </div></Provider>
  );
}

export default App;
