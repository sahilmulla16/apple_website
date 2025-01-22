
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          
        </div>
      </div>
    </Html>
  );
};

export default Loader;
