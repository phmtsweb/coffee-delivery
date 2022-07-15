import { MapPin } from 'phosphor-react';
import logoImg from '../../assets/logo-coffee.svg';
import { useCart } from '../../hooks/useCart';
import { CartButton } from '../CartButton';
import {
  ButtonsContainer,
  HeaderContainer,
  LocationContainer,
  LogoImg
} from './styles';

export function Header() {
  const { totalItems } = useCart();
  return (
    <HeaderContainer>
      <LogoImg src={logoImg} alt="" />
      <ButtonsContainer>
        <LocationContainer>
          <MapPin size={22} />
          <span>Petrolina, PE</span>
        </LocationContainer>
        <CartButton
          amount={totalItems}
          type="cart"
          actionCart={() => alert('click!')}
        />
      </ButtonsContainer>
    </HeaderContainer>
  );
}
