import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';
import {
  BannerContainer,
  BannerImage,
  InfoContainer,
  ListContainer,
  ListContainerItem,
  MainTextContainer
} from './styles';

import coffeeImg from '../../../../assets/coffee.png';

export function Banner() {
  const theme = useTheme();
  return (
    <BannerContainer>
      <InfoContainer>
        <MainTextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </MainTextContainer>
        <ListContainer>
          <div>
            <ListContainerItem colorHexCode={theme['primary-dark']}>
              <span>
                <ShoppingCart size={16} />
              </span>
              <span>Compra simples e rápida</span>
            </ListContainerItem>
            <ListContainerItem colorHexCode={theme.primary}>
              <span>
                <Clock size={16} />
              </span>
              <span>Entrega rápida e rasterada</span>
            </ListContainerItem>
          </div>
          <div>
            <ListContainerItem colorHexCode={theme['base-text']}>
              <span>
                <Package size={16} />
              </span>
              <span>Embalagem mantém o café intacto</span>
            </ListContainerItem>
            <ListContainerItem colorHexCode={theme.secondary}>
              <span>
                <Coffee size={16} />
              </span>
              <span>O café chega fresquinho até você</span>
            </ListContainerItem>
          </div>
        </ListContainer>
      </InfoContainer>
      <BannerImage src={coffeeImg} alt="Copo de café com grão ao redor" />
    </BannerContainer>
  );
}
