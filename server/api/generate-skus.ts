import { useBody } from 'h3';
import slugify from 'slugify';
import { Webflow_API_Product, Webflow_API_Sku } from '../../global';

export default async (req, _) => {
  try {
    const body = await useBody(req);

    const rawData = await fetch(
      `https://api.webflow.com/sites/${body.webflowSiteId}/products`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${body.webflowAPIKey}`,
          'accept-version': '1.0.0'
        },
        redirect: 'follow'
      }
    );

    const allProductsAndSKUs = await rawData.json();

    const items = allProductsAndSKUs?.items as {
      product: Webflow_API_Product;
      skus: Webflow_API_Sku[];
    }[];

    const SKUs: {
      skuId: string;
      productName: string;
      skuName: string;
      SKU: string;
    }[] = [];
    items.forEach((item) => {
      const template = {
        skuId: '',
        productName: item.product.name,
        skuName: '',
        SKU: ''
      };

      const productSlug = slugify(item.product.name, {
        replacement: '-', // replace spaces with replacement character, defaults to `-`
        remove: /[*+~.()'"!:@,]/g, // remove characters that match regex, defaults to `undefined`
        lower: false, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
        locale: 'vi', // language code of the locale to use
        trim: true // trim leading and trailing replacement chars, defaults to `true`
      })
        .toUpperCase()
        .replace(/\B[aeiou]/gi, '');

      const SKU_obj = template;
      item.skus.forEach((sku) => {
        SKU_obj.skuId = sku._id;

        let name = sku.name;

        name = name.replace(item.product.name, '');
        name = name.replace(/ \w+(?: \w+)*:/g, '_');
        name = name.replace(/\B[aeiou]/gi, '');

        const nameSlug = slugify(name, {
          replacement: '-', // replace spaces with replacement character, defaults to `-`
          remove: /[*+~.()'"!:@,]/g, // remove characters that match regex, defaults to `undefined`
          lower: false, // convert to lower case, defaults to `false`
          strict: false, // strip special characters except replacement, defaults to `false`
          locale: 'vi', // language code of the locale to use
          trim: true // trim leading and trailing replacement chars, defaults to `true`
        })
          .toUpperCase()
          .replace(/_-/g, '_');
        (SKU_obj.SKU = `${productSlug}${nameSlug ? `${nameSlug}` : ''}`),
          (SKU_obj.skuName = sku.name);
      });
      SKUs.push(SKU_obj);
    });

    return SKUs;
  } catch (err) {
    return err;
  }
};
