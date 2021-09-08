import React, {useState} from 'react'
import { useDispatch,} from 'react-redux'
import { addExpenseTransaction } from '../context/ExpenseReducer'
import { addIncomeTransaction } from '../context/IncomeReducer'
import { Row, Form, FloatingLabel, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const IncomeExpenseInputPanel = () => {
    const dispatch = useDispatch()
    const   [optValue, setOptValue] = useState('income'),
            [description, setDecription] = useState(''),
            [amount, setAmount] = useState(0)
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            description,
            amount: +amount
        }
        if(optValue === 'income') {
            dispatch(addIncomeTransaction(newTransaction))
        }
        if (optValue === 'expense'){
            dispatch(addExpenseTransaction(newTransaction))
        }
        setDecription('')
        
        setAmount('')
        
    }
    return (

        // <form action="" method="post" onSubmit= {onSubmit}>
        //     <div className="input-container">
        //         <select name="" id="income-expense-option" value={optValue} onChange = {(e)=> setOptValue(e.target.value)}>
        //             <option value="income">Income</option>
        //             <option value="expense">Expense</option>
        //         </select>
        //         <input value={description} onChange={(e) => setDecription(e.target.value)} className="detail-input-text" placeholder="Enter the details" type="text" />
        //         <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="value" type="number" className="input-detail-value" />
        //         <button>submit</button>
        //     </div>
        // </form>
        <Form >
            <Row className="g-3">
                    <FloatingLabel as={Col} sm={2} controlId="incomeExpenseOption" label="operation" className="mb-3">
                        <Form.Select 
                            value={optValue} 
                            onChange = {(e)=> setOptValue(e.target.value)}
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel as={Col} sm={6} controlId="det" className="mb-3" label="enter the details">
                        <Form.Control 
                            type="text" 
                            value={description} 
                            onChange={(e) => setDecription(e.target.value)}
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel as={Col} sm={3} controlId="amounddf" className="mb-3" label="amount">
                        <Form.Control 
                            value={amount} 
                            onChange={(e) => setAmount(e.target.value)} 
                            type="number"
                            required
                        />
                    </FloatingLabel>
                <Button type="submit" onClick={onSubmit} variant="outline-primary"  as={Col} sm={1} style={{borderRadius: '80%'}}>
                    <FontAwesomeIcon icon={faCheckCircle} size="3x" />
                </Button>
            </Row>

        </Form>
    )
}

export default IncomeExpenseInputPanel
