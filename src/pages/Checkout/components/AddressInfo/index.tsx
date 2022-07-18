import { MagnifyingGlass, MapPinLine, Spinner } from 'phosphor-react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { CustomInput } from '../../../../components/CustomInput';
import { MainButton } from '../../../../components/MainButton';
import { useToast } from '../../../../hooks/useToast';
import {
  AddressContainer,
  AddressDescription,
  AddressForm,
  AddressGenericInputContainer,
  AddressTextContainer,
  SearchButtonContainer
} from './styles';

interface AddressResponse {
  cep: string;
  logradouro: string;
  localidade: string;
  uf: string;
  bairro: string;
}

export function AddressInfo() {
  const { register, watch, trigger } = useFormContext();
  const cep: string = watch('cep');
  // eslint-disable-next-line no-unused-vars
  const [logradouro, setLogradouro] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [uf, setUf] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  async function searchCEP() {
    setIsLoading(true);
    const validate = await trigger('cep', { shouldFocus: true });
    if (validate) {
      try {
        const result = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        const response = (await result.json()) as AddressResponse;
        setLogradouro(response.logradouro);
        setCidade(response.localidade);
        setBairro(response.bairro);
        setUf(response.uf);
      } catch (e: any) {
        toast(e.message);
      }
    }
    setIsLoading(false);
  }
  return (
    <AddressContainer>
      <AddressDescription>
        <MapPinLine size={22} />
        <AddressTextContainer>
          <span>Endereço de entrega</span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </AddressTextContainer>
      </AddressDescription>
      <AddressForm>
        <div>
          <AddressGenericInputContainer flexProps="0 0 35%">
            <CustomInput
              placeholder="CEP"
              {...register('cep')}
              inputName="cep"
            />
          </AddressGenericInputContainer>
          <SearchButtonContainer>
            <MainButton
              type="button"
              label={
                !isLoading ? (
                  <MagnifyingGlass size={22} />
                ) : (
                  <Spinner size={22}>
                    <animate
                      attributeName="opacity"
                      values="0.8;1;0.8"
                      dur="4s"
                      repeatCount="indefinite"
                    ></animate>
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      dur="3s"
                      from="0 0 0"
                      to="360 0 0"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </Spinner>
                )
              }
              onClick={async () => searchCEP()}
            />
          </SearchButtonContainer>
        </div>
        <div>
          <AddressGenericInputContainer flexProps="1">
            <CustomInput
              placeholder="Logradouro"
              {...register('logradouro')}
              inputName="logradouro"
              defaultValue={logradouro}
              isDisabled={logradouro === ''}
              labelFakeName={logradouro === '' ? 'Logradouro' : logradouro}
              wasFulfilled={logradouro !== ''}
            />
          </AddressGenericInputContainer>
        </div>
        <div>
          <AddressGenericInputContainer flexProps="0 0 35%">
            <CustomInput
              placeholder="Número"
              {...register('numero')}
              inputName="numero"
            />
          </AddressGenericInputContainer>
          <AddressGenericInputContainer flexProps="1">
            <CustomInput
              optional
              placeholder="Complemento"
              {...register('complemento')}
              inputName="complemento"
            />
          </AddressGenericInputContainer>
        </div>
        <div>
          <AddressGenericInputContainer flexProps="0 0 35%">
            <CustomInput
              placeholder="Bairro"
              {...register('bairro')}
              inputName="bairro"
              defaultValue={bairro}
              isDisabled={bairro === ''}
              labelFakeName={bairro === '' ? 'Bairro' : bairro}
              wasFulfilled={bairro !== ''}
            />
          </AddressGenericInputContainer>
          <AddressGenericInputContainer flexProps="0 0 49%">
            <CustomInput
              placeholder="Cidade"
              {...register('cidade')}
              inputName="cidade"
              defaultValue={cidade}
              isDisabled={cidade === ''}
              labelFakeName={cidade === '' ? 'Cidade' : cidade}
              wasFulfilled={cidade !== ''}
            />
          </AddressGenericInputContainer>
          <AddressGenericInputContainer flexProps="1">
            <CustomInput
              placeholder="UF"
              {...register('uf')}
              inputName="uf"
              defaultValue={uf}
              isDisabled={uf === ''}
              labelFakeName={uf === '' ? 'UF' : uf}
              wasFulfilled={uf !== ''}
            />
          </AddressGenericInputContainer>
        </div>
      </AddressForm>
    </AddressContainer>
  );
}
