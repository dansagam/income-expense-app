
import './App.css';
import LowerIncomeExpenseLower from './components/LowerIncomeExpenseLower';
import TopIncomeExpenseTop from './components/TopIncomeExpenseTop';

function App() {
  return (
    <div className="App">
        <div className="display-topper">
            <TopIncomeExpenseTop />
        </div>
        <LowerIncomeExpenseLower />
    </div>
  );
}

export default App;
