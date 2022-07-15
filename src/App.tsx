import { useState } from 'react';
import { AmountSelect } from './components/AmountSelect';
import { CarButton } from './components/CarButton';
import { CustomInput } from './components/CustomInput';
import { MainButton } from './components/MainButton';
import { PaymentSelect } from './components/PaymentSelect';
import { RemoveButton } from './components/RemoveButton';

function App() {
  const [amount, setAmount] = useState(0);

  function increment() {
    setAmount((state) => state + 1);
  }

  function decrement() {
    setAmount((state) => state - 1);
  }
  return (
    <>
      <MainButton label="Aperte aqui" />
      <CarButton type="cart" amount={5} />
      <AmountSelect
        amount={amount}
        increment={increment}
        decrement={decrement}
      />
      <RemoveButton />
      <PaymentSelect />
      <CustomInput placeholder="Testando" optional />
    </>
  );
}

export default App;
