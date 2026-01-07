import { connectDB } from '@/lib/db';
import { Product, IProduct } from '@/lib/models/Product';

// Fetching data directly on the server
async function getProducts() {
  await connectDB();
  // Convert MongoDB documents to plain JSON objects
  const data = await Product.find({}).lean();
  return data as unknown as (IProduct & { _id: string })[];
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="bg-gray-100 h-48 mb-4 rounded flex items-center justify-center text-gray-400">
              {/* Placeholder for Product Image */}


              [Image of a product card layout]

            </div>

            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>

              {/* The Stock Logic */}
              {product.stock < 5 && (
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded border border-red-200">
                  LOW STOCK: {product.stock}
                </span>
              )}
            </div>

            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}