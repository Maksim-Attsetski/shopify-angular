import { IProduct } from './types';

function generateMockProduct(id: number): IProduct {
  const now = Date.now();
  return {
    id: id.toString(),
    created_at: now - Math.floor(Math.random() * 1000000000),
    updated_at: now,
    name: `Product ${id}`,
    price: parseFloat((Math.random() * 100).toFixed(2)),
    preview: Math.random() > 0.5 ? `https://example.com/product-${id}.jpg` : undefined,
    sale:
      Math.random() > 0.7
        ? {
            discount: Math.floor(Math.random() * 50),
            until: now + Math.floor(Math.random() * 1000000000),
          }
        : undefined,
  };
}

export const mockProducts: IProduct[] = Array.from({ length: 100 }, (_, i) =>
  generateMockProduct(i + 1)
);
