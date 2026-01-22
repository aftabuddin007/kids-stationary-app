import Link from 'next/link';
import { FaHome, FaSearch, FaArrowLeft, FaQuestionCircle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-xl w-full text-center">
        
        {/* Animated Icon/Illustration Area */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-blue-200 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-full shadow-xl border border-slate-100 animate-bounce">
              <FaQuestionCircle className="text-orange-500 text-6xl" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl font-bold text-orange-400 mb-4">
          Oops! Page Not Found
        </h2>
        

        {/* Professional CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/" 
            className="btn btn-primary btn-lg px-8 gap-2 bg-orange-900 border-none hover:bg-orange-600 text-white w-full sm:w-auto"
          >
            <FaHome /> Go to Homepage
          </Link>
          
          
        </div>

        
      </div>
    </div>
  );
}