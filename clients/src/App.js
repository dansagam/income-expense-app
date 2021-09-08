import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AppNavBar from './components/AppNavBar';
import LowerIncomeExpenseLower from './components/LowerIncomeExpenseLower';
import TopIncomeExpenseTop from './components/TopIncomeExpenseTop';
import { getExpenseTransactions } from './context/ExpenseReducer';
import { getIncomeTransactions } from './context/IncomeReducer';

function App() {
  const {isLoading } = useSelector(state => state.User)
  const appBody = (
    <>
      <AppNavBar />
      <div className="display-topper">
          <TopIncomeExpenseTop />
      </div>
      <LowerIncomeExpenseLower />
    
    </>

  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIncomeTransactions())
    dispatch(getExpenseTransactions())
  },[dispatch])
  return (
    <div className="App">
      {isLoading === true ? <FontAwesomeIcon icon={faSpinner} size="xxl"/> : appBody}
    </div>
    
  );
}

export default App;
