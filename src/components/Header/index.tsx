import { MapPin } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImg src={logoImg} alt="" />
      </Link>

      <ButtonsContainer>
        <LocationContainer>
          <MapPin size={22} />
          <span>Petrolina, PE</span>
        </LocationContainer>
        <CartButton
          amount={totalItems}
          type="cart"
          actionCart={() => navigate('/checkout', { replace: true })}
        />
      </ButtonsContainer>
    </HeaderContainer>
  );
}
