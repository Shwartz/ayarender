const BASE_URL = 'https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA';

export type Variant = '320w' | '640w' | '768w' | '1024w' | '1280w' | '1920w';

export const imageUrl = (imageId: string, variant: Variant): string => `${BASE_URL}/${imageId}/${variant}`;

export const imageSrcset = (imageId: string, variants: Variant[]): string =>
  variants.map((v) => `${imageUrl(imageId, v)} ${v}`).join(', ');
