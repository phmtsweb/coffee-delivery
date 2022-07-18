import 'react-toastify/dist/ReactToastify.css';
import { Banner } from './components/Banner';
import { ProductsList } from './components/ProductsList';

export function Home() {
  return (
    <>
      <Banner />
      <ProductsList />
    </>
  );
}
