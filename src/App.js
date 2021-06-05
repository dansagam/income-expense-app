
import './App.css';
import LowerIncomeExpenseLower from './components/LowerIncomeExpenseLower';
import TopIncomeExpenseTop from './components/TopIncomeExpenseTop';
import { GlobalIncomeProvider } from './context/IEGlobalState';

function App() {
  return (
    <div className="App">
        <GlobalIncomeProvider >
            <div className="display-topper">
                <TopIncomeExpenseTop />
            </div>
            <LowerIncomeExpenseLower />

        </GlobalIncomeProvider>
    </div>
  );
}

export default App;
