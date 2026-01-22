import { getSingleProduct } from '@/actins/server/product';
import { FaWhatsapp, FaStar, FaShieldAlt, FaTruck, FaUndo, FaCheckCircle } from 'react-icons/fa';
import { notFound } from 'next/navigation';

export default async function ProductDetails({ params }) {
  const { id } =await params;
  const product = await getSingleProduct(id);
  // console.log(product)

  // Guard clause: if product doesn't exist in DB, show 404
  if (!product) {
    notFound();
  }

  const discountedPrice = Math.round(product.price - (product.price * product.discount) / 100);

  return (
    <div className="bg-base-100 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-base-100 p-4 md:p-8 rounded-3xl shadow-sm border border-base-200">
          
          {/* Left: Image Section */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden bg-base-200 border border-base-200 shadow-inner">
              <img
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Features/Info List */}
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h3 className="font-bold text-lg mb-4 text-primary">Key Highlights</h3>
              <ul className="space-y-3">
                {product.info?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold text-base-content mb-2 leading-tight">
                  {product.title}
                </h1>
              </div>
              <h2 className="text-xl text-primary font-semibold mb-4">{product.bangla}</h2>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-yellow-500 bg-yellow-50 px-3 py-1 rounded-full">
                  <FaStar /> <span className="ml-1 font-bold text-black">{product.ratings}</span>
                </div>
                <span className="text-gray-500 text-sm">{product.reviews} Reviews</span>
                <span className="badge badge-success badge-outline font-medium px-3">{product.sold} Sold</span>
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-base-200 p-6 rounded-2xl mb-8 border border-base-300">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-4xl font-black text-primary">৳{discountedPrice}</span>
                {product.discount > 0 && (
                  <span className="text-xl text-gray-400 line-through">৳{product.price}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                 <span className="badge badge-error text-white font-bold p-3">Save {product.discount}%</span>
                 <p className="text-sm text-green-600 font-bold">● Available in Stock</p>
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-8 prose prose-sm max-w-none">
              <h3 className="font-bold text-lg mb-3 border-b pb-2">Product Description</h3>
              <p className="text-base-content/80 leading-relaxed whitespace-pre-line italic">
                {product.description}
              </p>
            </div>

            {/* Main Action: Order via WhatsApp */}
            <div className="mt-auto pt-6 border-t border-base-200">
              <a 
                href={`https://wa.me/YOUR_NUMBER?text=Hi, I want to order: ${product.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-lg w-full gap-3 text-white shadow-lg hover:shadow-success/20 transform transition active:scale-95"
              >
                <FaWhatsapp className="text-2xl" />
                Order via WhatsApp
              </a>
              <p className="text-center text-xs text-gray-500 mt-3">
                Clicking will open WhatsApp to discuss your order.
              </p>
            </div>

            {/* Service Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-base-100 border border-base-200">
                <FaShieldAlt className="text-primary mb-2 text-2xl" />
                <span className="text-[10px] uppercase font-bold tracking-tighter">100% Safe Material</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-base-100 border border-base-200">
                <FaTruck className="text-primary mb-2 text-2xl" />
                <span className="text-[10px] uppercase font-bold tracking-tighter">Inside Dhaka Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-base-100 border border-base-200">
                <FaUndo className="text-primary mb-2 text-2xl" />
                <span className="text-[10px] uppercase font-bold tracking-tighter">7 Days Exchange</span>
              </div>
            </div>
          </div>
        </div>

        {/* Q&A Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
            <p className="text-gray-500">Find answers to common questions about this product</p>
          </div>
          <div className="space-y-4">
            {product.qna?.map((item, index) => (
              <div key={index} className="collapse collapse-plus bg-base-100 border border-base-200 rounded-xl">
                <input type="checkbox" /> 
                <div className="collapse-title text-lg font-semibold text-primary">
                  {item.question}
                </div>
                <div className="collapse-content"> 
                  <p className="text-base-content/80 pt-2 border-t border-base-200">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}