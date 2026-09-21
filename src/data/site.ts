export const locales = [
  { code: 'es', label: 'ES', name: 'Español', available: true },
  { code: 'en', label: 'EN', name: 'English', available: false },
  { code: 'fr', label: 'FR', name: 'Français', available: false },
  { code: 'it', label: 'IT', name: 'Italiano', available: false },
  { code: 'de', label: 'DE', name: 'Deutsch', available: false },
] as const;

export const navigation = [
  { label: 'Productos', href: '/es/productos/' },
  { label: 'Compradores', href: '/es/compradores/' },
  { label: 'Productores', href: '/es/productores/' },
  { label: 'Servicios', href: '/es/servicios/' },
  { label: 'Calidad', href: '/es/calidad/' },
  { label: 'Empresa', href: '/es/empresa/' },
] as const;

export const legalPlaceholders = [
  'Privacidad',
  'Aviso legal',
  'Canal ético',
  'Igualdad',
  'Accesibilidad',
] as const;

export const company = {
  name: 'FRUKLAS S.L.',
  corporateExpression: 'Compromiso Natural',
  motto: 'De la Tierra y el Sol',
  addressLines: ['Mercalicante, Pto. 134/136/138', 'Ctra. Madrid, Km. 4', '03114 Alicante – España'],
  cif: 'B-53939146',
  phone: '+34 966 300 790',
  mobile: '+34 617 710 647',
  phoneHref: 'tel:+34966300790',
  mobileHref: 'tel:+34617710647',
  mapsUrl: 'http://google.com/maps/place//data=!4m2!3m1!1s0xd623670389841e5:0x18c0cabd1ddef4f7?sa=X&ved=1t:8290&ictx=111',
} as const;

export const photoSourceNotes = {
  grapes: 'https://photos.app.goo.gl/qoZo49M2KmypjzuTA',
  artichokes: 'https://photos.app.goo.gl/iZ63W8SV2VM1m9Wq6',
  produce: 'https://photos.app.goo.gl/LJSP2iehJL5yyedq7',
  team: 'https://photos.app.goo.gl/uEeTWqwrdumjEcTe8',
} as const;
