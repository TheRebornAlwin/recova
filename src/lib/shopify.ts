const SHOPIFY_DOMAIN = "your-store.myshopify.com";
const STOREFRONT_ACCESS_TOKEN = "your-token-here";
const API_VERSION = "2026-01";

const VARIANT_MAP: Record<string, string> = {
  "neckrelieve-pulse": "gid://shopify/ProductVariant/XXXXXXXXXX",
};

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export async function createCheckout(items: CartItem[]): Promise<string> {
  const lines = items
    .map((item) => {
      const variantId = VARIANT_MAP[item.id];
      if (!variantId) return null;
      return {
        merchandiseId: variantId,
        quantity: item.quantity,
      };
    })
    .filter(Boolean);

  const mutation = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const response = await fetch(
    `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          input: { lines },
        },
      }),
    }
  );

  const data = await response.json();

  if (data.data?.cartCreate?.userErrors?.length > 0) {
    throw new Error(data.data.cartCreate.userErrors[0].message);
  }

  return data.data.cartCreate.cart.checkoutUrl;
}
