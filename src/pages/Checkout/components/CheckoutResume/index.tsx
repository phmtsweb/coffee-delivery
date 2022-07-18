import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CardCheckout } from '../../../../components/CardCheckout';
import { MainButton } from '../../../../components/MainButton';
import { ResumeCheckout } from '../../../../components/ResumeCheckout';
import { useCart } from '../../../../hooks/useCart';
import { createOrder } from '../../../../services/api';
import {
  CheckoutProductsResume,
  CheckoutResumeContainer,
  CheckoutResumeInfo,
  CheckoutTitle
} from './styles';

interface AddressFormData {
  cep: string;
  logradouro: string;
  cidade: string;
  paymentType: 'cc' | 'cd' | 'di';
  numero: string;
  complemento: string | undefined;
  bairro: string;
  uf: string;
}

export function CheckoutResume() {
  const { handleSubmit } = useFormContext<AddressFormData>();
  const { products, total, cleanCart } = useCart();
  const navigate = useNavigate();
  async function onSubmit(data: AddressFormData) {
    const {
      cep,
      logradouro,
      cidade,
      paymentType,
      numero,
      complemento,
      uf,
      bairro
    } = data;
    const order = {
      address: {
        cep,
        logradouro,
        cidade,
        numero,
        complemento,
        uf,
        bairro
      },
      products,
      total,
      delivery: 3.5,
      paymentType
    };

    const id = await createOrder(order);
    cleanCart();
    navigate(`/ordered/${id}`);
  }
  return (
    <CheckoutResumeContainer>
      <CheckoutTitle>Cafés selecionados</CheckoutTitle>
      <CheckoutResumeInfo>
        <CheckoutProductsResume>
          {products.map((product) => (
            <CardCheckout
              key={product.id}
              urlImage={product.urlImage}
              amount={product.amount}
              price={product.price}
              title={product.title}
              productId={product.id}
            />
          ))}
        </CheckoutProductsResume>
        <ResumeCheckout />
        <MainButton label="CONFIRMAR PEDIDO" onClick={handleSubmit(onSubmit)} />
      </CheckoutResumeInfo>
    </CheckoutResumeContainer>
  );
}
