// Definimos el tipo de dato
interface Product {
  id: number;
  name: string;
}

async function getProducts() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const res = await fetch(`${backendUrl}/products`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error cargando productos:", error);
    return [];
  }
}
export default async function Page() {
  const products: Product[] = await getProducts();

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">
        Panel de Productos
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-500 text-sm mt-2">ID: {product.id}</p>
            </div>
          ))


          
        ) : (
          <p className="col-span-3 text-center text-gray-500">No se encontraron productos o el backend está desconectado.</p>
        )}
      </div>
    </main>
  );
}