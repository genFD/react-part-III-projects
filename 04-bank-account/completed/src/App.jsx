import AccountOperations from './features/account/AccountOperations'
import BalanceDisplay from './features/account/BalanceDisplay'
import CreateCustomer from './features/customer/CreateCustomer'
import Customer from './features/customer/Customer'

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  )
}

export default App
