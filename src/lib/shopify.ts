const SHOPIFY_DOMAIN = "recova-7175.myshopify.com";
const STOREFRONT_ACCESS_TOKEN = "496bc61c93d9e47732f6ba7d2a99a105";
const API_VERSION = "2025-01";

const PRODUCT_ID_MAP: Record<string, string> = {
  "neckrelieve-pulse": "gid://shopify/Product/9320760049922",
};

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

async function storefrontFetch(query: string, variables?: Record<string, unknown>) {
  const response = await fetch(
    `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }
  );
  return response.json();
}

async function getVariantId(productGid: string): Promise<string> {
  const query = `
    query getProduct($id: ID!) {
      product(id: $id) {
        variants(first: 1) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  `;

  const data = await storefrontFetch(query, { id: productGid });
  const variantId = data.data?.product?.variants?.edges?.[0]?.node?.id;

  if (!variantId) {
    throw new Error("Could not find product variant");
  }

  return variantId;
}

export async function createCheckout(items: CartItem[]): Promise<string> {
  const lines = await Promise.all(
    items.map(async (item) => {
      const productGid = PRODUCT_ID_MAP[item.id];
      if (!productGid) return null;
      const variantId = await getVariantId(productGid);
      return {
        merchandiseId: variantId,
        quantity: item.quantity,
      };
    })
  );

  const validLines = lines.filter(Boolean);

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

  const data = await storefrontFetch(mutation, {
    input: { lines: validLines },
  });

  if (data.data?.cartCreate?.userErrors?.length > 0) {
    throw new Error(data.data.cartCreate.userErrors[0].message);
  }

  return data.data.cartCreate.cart.checkoutUrl;
}
