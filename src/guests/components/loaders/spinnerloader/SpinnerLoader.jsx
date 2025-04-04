import { Oval } from 'react-loader-spinner';

const SpinnerLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
    <Oval height={80} width={80} secondaryColor='#FFFFFFFF' strokeWidth="6" color="#010F24FF" ariaLabel="loading" />
  </div>
);

export default SpinnerLoader;