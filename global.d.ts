interface Sku {
  id: string;
  name: string;
  slug: string;
}

export interface SkuProperty {
  id: string;
  name: string;
  enum: Sku[];
}

interface SizeChartCm {
  fileId: string;
  url: string;
  alt?: string;
}

interface SizeChartInch {
  fileId: string;
  url: string;
  alt?: string;
}

export interface Webflow_API_Product {
  ['ec-product-type']: string;
  name: string;
  description: string;
  category: string[];
  slug: string;
  shippable: boolean;
  ['tax-category']: string;
  _archived: boolean;
  _draft: boolean;
  ['updated-on']: Date;
  ['updated-by']: string;
  ['created-on']: Date;
  ['created-by']: string;
  ['sku-properties']: SkuProperty[];
  ['default-sku']: string;
  ['best-seller']: boolean;
  ['short-description']: string;
  ['size-chart-cm']: SizeChartCm;
  ['size-chart-inch']: SizeChartInch;
  ['published-by']: string;
  ['published-on']: Date;
  featured: boolean;
  _cid: string;
  _id: string;
}

interface SkuValues {
  [key: string]: string;
}

interface Price {
  value: number;
  unit: string;
}

interface MainImage {
  fileId: string;
  url: string;
  alt?: string;
}

interface MoreImage {
  fileId: string;
  url: string;
  alt?: string;
}

interface DownloadFile {
  id: string;
  name: string;
  url: string;
}

export interface Webflow_API_Sku {
  product: string;
  name: string;
  slug: string;
  ['sku-values']: SkuValues;
  price: Price;
  sku: string;
  ['main-image']: MainImage;
  ['more-images']: MoreImage;
  ['download-files']: DownloadFile;
  _archived: boolean;
  _draft: boolean;
  ['updated-on']: Date;
  ['updated-by']: string;
  ['created-on']: Date;
  ['created-by']: string;
  ['published-on']: Date;
  ['published-by']: string;
  _cid: string;
  _id: string;
}

export interface Webflow_API_Product_And_Skus {
  product: Webflow_API_Product;
  skus: Webflow_API_Sku[];
}

export interface Webflow_API_Products {
  items: Webflow_API_Product_And_Skus[];
  count: number;
  limit: number;
  offset: number;
  total: number;
}
