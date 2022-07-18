import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { AddressInfo } from './components/AddressInfo';
import { CheckoutResume } from './components/CheckoutResume';
import { PaymentWay } from './components/PaymentWay';
import { CheckoutContainer, CheckoutInfo, CheckoutInfoTitle } from './styles';

const addressFormValidationSchema = zod.object({
  cep: zod
    .string({
      required_error: 'Digite um CEP válido',
      invalid_type_error: 'Digite um CEP válido'
    })
    .length(8, 'Digite um CEP válido'),
  logradouro: zod
    .string({
      required_error: 'Digite um logradouro',
      invalid_type_error: 'Digite um logradouro válido'
    })
    .min(1, 'O campo logradouro é obrigatório.'),
  numero: zod
    .string({
      required_error: 'Digite um número',
      invalid_type_error: 'Digite um número válido'
    })
    .min(1, 'O campo número é obrigatório.'),
  complemento: zod.string().optional(),
  bairro: zod
    .string({
      required_error: 'Digite um bairro',
      invalid_type_error: 'Digite um bairro válido'
    })
    .min(1, 'O campo bairro é obrigatório.'),
  cidade: zod
    .string({
      required_error: 'Digite uma cidade',
      invalid_type_error: 'Digite uma cidade válida'
    })
    .min(1, 'O campo cidade é obrigatório.'),
  uf: zod
    .string({
      required_error: 'Digite a sigla de um estado',
      invalid_type_error: 'Digite a sigla de um estado válida'
    })
    .min(1, 'O campo estado é obrigatório.'),
  paymentType: zod.enum(['cc', 'cd', 'di'], {
    errorMap(issue, _ctx) {
      return { message: 'Escolha a forma de pagamento' };
    }
  })
});

type AddressFormData = zod.infer<typeof addressFormValidationSchema>;

export function Checkout() {
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema)
  });
  return (
    <CheckoutContainer>
      <FormProvider {...addressForm}>
        <CheckoutInfo>
          <CheckoutInfoTitle>Complete seu pedido</CheckoutInfoTitle>
          <AddressInfo />
          <PaymentWay />
        </CheckoutInfo>
        <CheckoutResume />
      </FormProvider>
    </CheckoutContainer>
  );
}
