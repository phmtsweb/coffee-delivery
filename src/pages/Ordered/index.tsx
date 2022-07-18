import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { getOrderById } from '../../services/api';
import {
  OrderedContainer,
  OrderImage,
  OrderInfoBoardContainer,
  OrderInfoBoardItem,
  OrderInfoContainer,
  OrderInfoTextContainer
} from './styles';

import motoboy from '../../assets/motoboy.png';

const mapPaymentType = {
  cc: 'Cartão de Crédito',
  cd: 'Cartão de Débito',
  di: 'Dinheiro'
};

export function Ordered() {
  const { id } = useParams();
  const theme = useTheme();
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const navigate = useNavigate();
  const idNumber = id ? +id : 0;
  useEffect(() => {
    (async function () {
      const order = await getOrderById(idNumber);
      if (!order) {
        return navigate('/', { replace: true });
      }
      const addressLine1 =
        `${order.address.logradouro}, ${order.address.numero}` +
        `${order.address.complemento ? `,${order.address.complemento}` : ''}`;
      const addressLine2 = `${order.address.bairro} - ${order.address.cidade}, ${order.address.uf}`;
      const type = order.paymentType as string;
      const paymentTypeMapped = mapPaymentType[type];
      setAddress1(addressLine1);
      setAddress2(addressLine2);
      setPaymentType(paymentTypeMapped);
    })();
  }, [idNumber, navigate]);
  return (
    <OrderedContainer>
      <OrderInfoContainer>
        <OrderInfoTextContainer>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </OrderInfoTextContainer>
        <OrderInfoBoardContainer>
          <OrderInfoBoardItem bgColor={theme.secondary}>
            <span>
              <MapPin size={16} />
            </span>
            <span>
              <span>
                Entrega em <strong>{address1}</strong>
              </span>
              <span>{address2}</span>
            </span>
          </OrderInfoBoardItem>
          <OrderInfoBoardItem bgColor={theme.primary}>
            <span>
              <Clock size={16} />
            </span>
            <span>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </span>
          </OrderInfoBoardItem>
          <OrderInfoBoardItem bgColor={theme.primary}>
            <span>
              <CurrencyDollar size={16} />
            </span>
            <span>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{paymentType}</strong>
              </span>
            </span>
          </OrderInfoBoardItem>
        </OrderInfoBoardContainer>
      </OrderInfoContainer>
      <OrderImage src={motoboy} alt="Entregador na sua motocicleta" />
    </OrderedContainer>
  );
}
