import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import AppNavBar from './components/AppNavBar';
import LowerIncomeExpenseLower from './components/LowerIncomeExpenseLower';
import TopIncomeExpenseTop from './components/TopIncomeExpenseTop';
import { getExpenseTransactions } from './context/ExpenseReducer';
import { getIncomeTransactions } from './context/IncomeReducer';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIncomeTransactions())
    dispatch(getExpenseTransactions())
  },[dispatch])
  return (
    <div className="App">
      <AppNavBar />
      <div className="display-topper">
          <TopIncomeExpenseTop />
      </div>
      <LowerIncomeExpenseLower />
    </div>
  );
}

export default App;
