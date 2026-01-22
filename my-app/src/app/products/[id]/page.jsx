import { getSingleProduct } from '@/actins/server/product';
import { FaWhatsapp, FaStar, FaShieldAlt, FaTruck, FaUndo, FaCheckCircle, FaShoppingCart, FaBolt } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import CartButton from '@/components/buttons/CartButton';




export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  // Fallback for missing products
  if (!product || Object.keys(product).length === 0) {
    return {
      title: "Product Not Found | Hero Kidz",
      description: "The product you are looking for is unavailable.",
    };
  }

  // Calculate the actual price for the description
  const discountedPrice = Math.round(product.price - (product.price * product.discount) / 100);

  return {
    title: product.title,
    description: `${product.bangla ? product.bangla + ' - ' : ''}${product.description?.substring(0, 150)}...`,
    
    // OpenGraph (Facebook, WhatsApp, LinkedIn)
    openGraph: {
      title: `${product.title} | Kids Stationary`,
      description: `Price: ৳${discountedPrice}. ${product.description?.substring(0, 100)}`,
      url: `https://kids-stationary.vercel.app/products/${id}`,
      siteName: "Kids Stationary",
      images: [
        {
          url: product.image, // The actual product image
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      type: "article",
    },

    // Twitter (X)
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: `Buy ${product.title} at Kids Stationary for ৳${discountedPrice}`,
      images: [product.image],
    },
  };
}

// Your existing ProductDetails component follows...




















export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product || Object.keys(product).length === 0) {
    notFound();
  }

  const discountedPrice = Math.round(product.price - (product.price * product.discount) / 100);

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Breadcrumbs - Professional Touch */}
      <div className="bg-white border-b border-slate-200 py-3 mb-6">
        <div className="container mx-auto px-4 text-xs text-slate-500">
          Home / Products / <span className="text-slate-800">{product.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Image Gallery (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 p-2 shadow-sm">
                <img
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-auto object-contain aspect-square hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Optional: Secondary Images Placeholder */}
              <div className="flex gap-2 mt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-20 h-20 border rounded-md bg-white p-1 cursor-pointer hover:border-orange-500">
                    <img src={product.image} className="w-full h-full object-cover opacity-60" alt="thumbnail" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Product Info (Span 7) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm h-fit">
            
            {/* Title & Brand */}
            <div className="border-b border-slate-100 pb-4 mb-4">
              <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">Premium Quality</span>
              <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-1 leading-tight">
                {product.title}
              </h1>
              <p className="text-lg text-primary font-medium mt-1">{product.bangla}</p>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center text-yellow-400">
                  <FaStar /> <span className="ml-1 font-bold text-slate-700">{product.ratings || '4.8'}</span>
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <span className="text-slate-500 text-sm underline cursor-pointer">{product.reviews || '120'} Reviews</span>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <span className="text-slate-500 text-sm">{product.sold || '500'}+ Sold</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-900">৳{discountedPrice}</span>
                {product.discount > 0 && (
                  <span className="text-xl text-slate-400 line-through">৳{product.price}</span>
                )}
                <span className="text-green-600 font-bold text-sm">-{product.discount}% OFF</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 italic font-medium">Inclusive of all taxes</p>
            </div>

            {/* CTA Buttons - Professional High-Contrast UI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <CartButton product={product}></CartButton>
              <button className="btn btn-primary btn-lg gap-2 bg-orange-600 border-none hover:bg-orange-700 text-white font-bold">
                <FaBolt className="text-xl" /> Buy Now
              </button>
              <a 
                href={`https://wa.me/YOUR_NUMBER?text=Hi, I want to order: ${product.title}`}
                className="btn btn-outline btn-success btn-lg md:col-span-2 gap-2"
              >
                <FaWhatsapp className="text-2xl" /> Order via WhatsApp
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 py-6 border-y border-slate-100 mb-6">
              {product.info?.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Trust Cards */}
            <div className="grid grid-cols-3 gap-2 py-4">
              <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg text-center border border-slate-100">
                <FaTruck className="text-slate-400 text-xl mb-1" />
                <span className="text-[10px] font-bold uppercase text-slate-600">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg text-center border border-slate-100">
                <FaShieldAlt className="text-slate-400 text-xl mb-1" />
                <span className="text-[10px] font-bold uppercase text-slate-600">Secure Wrap</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg text-center border border-slate-100">
                <FaUndo className="text-slate-400 text-xl mb-1" />
                <span className="text-[10px] font-bold uppercase text-slate-600">7-Day Return</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Full Description & Q&A */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-4">Product Details</h3>
              <div className="prose prose-slate max-w-none text-slate-600">
                 <p className="whitespace-pre-line leading-relaxed italic">{product.description}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Customer Questions</h3>
              <div className="space-y-4">
                {product.qna?.map((item, index) => (
                  <div key={index} className="collapse collapse-plus bg-slate-50 border border-slate-100">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-base font-semibold">Q: {item.question}</div>
                    <div className="collapse-content text-sm text-slate-500">A: {item.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar: Delivery Estimates */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 sticky top-24">
               <h4 className="font-bold text-slate-900 mb-4">Delivery & Services</h4>
               <div className="space-y-4">
                 <div className="flex gap-3">
                   <FaTruck className="text-slate-400 text-xl" />
                   <div>
                     <p className="text-sm font-bold">Standard Delivery</p>
                     <p className="text-xs text-slate-500">Estimated 2-4 working days</p>
                   </div>
                 </div>
                 <div className="flex gap-3">
                   <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center text-[10px] font-bold text-green-500">$</div>
                   <div>
                     <p className="text-sm font-bold">Cash on Delivery</p>
                     <p className="text-xs text-slate-500">Available for this product</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}