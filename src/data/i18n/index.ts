import en from './en';
import fr from './fr';
import it from './it';
import de from './de';
import { photoSourceNotes } from '../site';

export type ForeignLang = 'en' | 'fr' | 'it' | 'de';
export type SiteLang = 'es' | ForeignLang;
export type ForeignPageKey = 'products' | 'buyers' | 'quality' | 'logistics' | 'company';

export interface InternationalLocaleConfig {
  code: ForeignLang;
  name: string;
  ogLocale: string;
  ui: {
    navAria: string;
    mobileNavAria: string;
    languagesAria: string;
    menuLabel: string;
    logoLabel: string;
    enquiryCta: string;
    externalNote: string;
    socialAria: string;
  };
  nav: Record<'home' | ForeignPageKey, string>;
  home: {
    title: string;
    description: string;
    heroTitle: string;
    heroLead: string;
    introEyebrow: string;
    introTitle: string;
    introBody: string;
    productsEyebrow: string;
    productsTitle: string;
    productsBody: string;
    productLabels: { grapes: string; artichokes: string; fruit: string; vegetables: string };
    buyersEyebrow: string;
    buyersTitle: string;
    buyersBody: string;
    docsEyebrow: string;
    docsTitle: string;
    docsBody: string;
    docsCta: string;
    qualityEyebrow: string;
    qualityTitle: string;
    qualityBody: string;
    logisticsEyebrow: string;
    logisticsTitle: string;
    logisticsBody: string;
    companyEyebrow: string;
    companyTitle: string;
    companyBody: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
  };
  products: {
    title: string;
    description: string;
    eyebrow: string;
    h1: string;
    intro: string;
    vinalopo: string;
    grapesEyebrow: string;
    grapesTitle: string;
    grapesBody: string;
    artichokesEyebrow: string;
    artichokesTitle: string;
    artichokesBody: string;
    produceEyebrow: string;
    produceTitle: string;
    produceBody: string;
    galleryCta: string;
    docsEyebrow: string;
    docsTitle: string;
    docsBody: string;
    docsCta: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
  };
  buyers: {
    title: string;
    description: string;
    eyebrow: string;
    h1: string;
    lead: string;
    audience: string;
    fieldEyebrow: string;
    fieldTitle: string;
    fieldBody: string;
    productionEyebrow: string;
    productionTitle: string;
    productionBody: string;
    availabilityEyebrow: string;
    availabilityTitle: string;
    availabilityBody: string;
    docsCta: string;
    qualityEyebrow: string;
    qualityTitle: string;
    qualityBody: string;
    logisticsEyebrow: string;
    logisticsTitle: string;
    logisticsBody: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
  };
  quality: {
    title: string;
    description: string;
    eyebrow: string;
    h1: string;
    lead: string;
    fqsEyebrow: string;
    fqsTitle: string;
    fqsBody: string;
    fqsDisclaimer: string;
    chainEyebrow: string;
    chainTitle: string;
    chainBody: string;
    traceabilityEyebrow: string;
    traceabilityTitle: string;
    traceabilityBody: string;
    controlsEyebrow: string;
    controlsTitle: string;
    controlsBody: string;
    documentationEyebrow: string;
    documentationTitle: string;
    documentationBody: string;
    incidentsEyebrow: string;
    incidentsTitle: string;
    incidentsBody: string;
    growersEyebrow: string;
    growersTitle: string;
    growersBody: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
  };
  logistics: {
    title: string;
    description: string;
    eyebrow: string;
    h1: string;
    lead: string;
    mercalicanteEyebrow: string;
    mercalicanteTitle: string;
    mercalicanteBody: string;
    storageEyebrow: string;
    storageTitle: string;
    storageBody: string;
    pickingEyebrow: string;
    pickingTitle: string;
    pickingBody: string;
    dispatchEyebrow: string;
    dispatchTitle: string;
    dispatchBody: string;
    documentationEyebrow: string;
    documentationTitle: string;
    documentationBody: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
  };
  company: {
    title: string;
    description: string;
    eyebrow: string;
    h1: string;
    lead: string;
    whoEyebrow: string;
    whoTitle: string;
    whoBody: string;
    marketEyebrow: string;
    marketTitle: string;
    marketBody: string;
    alicanteEyebrow: string;
    alicanteTitle: string;
    alicanteBody: string;
    brandsEyebrow: string;
    brandsTitle: string;
    brandsBody: string;
    ksiEyebrow: string;
    ksiTitle: string;
    ksiBody: string;
    ksiProduction: string;
    galleriesEyebrow: string;
    galleriesTitle: string;
    galleriesBody: string;
    grapesGallery: string;
    artichokesGallery: string;
    produceGallery: string;
    teamEyebrow: string;
    teamTitle: string;
    teamBody: string;
    teamCta: string;
    galleryCta: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
  };
}

export const foreignLanguages: ForeignLang[] = ['en', 'fr', 'it', 'de'];

export const internationalConfigs: Record<ForeignLang, InternationalLocaleConfig> = { en, fr, it, de };

export const foreignRoutes: Record<ForeignLang, Record<'home' | ForeignPageKey, string>> = {
  en: { home: '/en/', products: '/en/products/', buyers: '/en/buyers/', quality: '/en/quality/', logistics: '/en/logistics/', company: '/en/company/' },
  fr: { home: '/fr/', products: '/fr/produits/', buyers: '/fr/acheteurs/', quality: '/fr/qualite/', logistics: '/fr/logistique/', company: '/fr/entreprise/' },
  it: { home: '/it/', products: '/it/prodotti/', buyers: '/it/acquirenti/', quality: '/it/qualita/', logistics: '/it/logistica/', company: '/it/azienda/' },
  de: { home: '/de/', products: '/de/produkte/', buyers: '/de/einkaeufer/', quality: '/de/qualitaet/', logistics: '/de/logistik/', company: '/de/unternehmen/' },
};

export const commercialForms: Record<ForeignLang, string> = {
  en: 'https://forms.gle/fcWQZxXzqeQoXk478',
  fr: 'https://forms.gle/yfviDnb9Uoi1Uhpt9',
  it: 'https://forms.gle/BheXQMdzzZassWnk9',
  de: 'https://forms.gle/UQt53Y61V8A3F1YU6',
};

export const sharedInternationalResources = {
  galleries: {
    grapes: photoSourceNotes.grapes,
    artichokes: photoSourceNotes.artichokes,
    produce: photoSourceNotes.produce,
    team: photoSourceNotes.team,
  },
  productDocumentation: 'https://drive.google.com/drive/folders/160SEbs-NB2fPw3UkCKfSwtMUWp361T5s?usp=drive_link',
} as const;

export const equivalentRoutes = {
  home: { es: '/es/', en: foreignRoutes.en.home, fr: foreignRoutes.fr.home, it: foreignRoutes.it.home, de: foreignRoutes.de.home },
  products: { es: '/es/productos/', en: foreignRoutes.en.products, fr: foreignRoutes.fr.products, it: foreignRoutes.it.products, de: foreignRoutes.de.products },
  buyers: { es: '/es/compradores/', en: foreignRoutes.en.buyers, fr: foreignRoutes.fr.buyers, it: foreignRoutes.it.buyers, de: foreignRoutes.de.buyers },
  quality: { es: '/es/calidad/', en: foreignRoutes.en.quality, fr: foreignRoutes.fr.quality, it: foreignRoutes.it.quality, de: foreignRoutes.de.quality },
  logistics: { es: '/es/logistica/', en: foreignRoutes.en.logistics, fr: foreignRoutes.fr.logistics, it: foreignRoutes.it.logistics, de: foreignRoutes.de.logistics },
  company: { es: '/es/empresa/', en: foreignRoutes.en.company, fr: foreignRoutes.fr.company, it: foreignRoutes.it.company, de: foreignRoutes.de.company },
} as const;

export function isForeignLang(lang: string): lang is ForeignLang {
  return foreignLanguages.includes(lang as ForeignLang);
}

export function getInternationalConfig(lang: string) {
  return isForeignLang(lang) ? internationalConfigs[lang] : null;
}

export function getForeignNavigation(lang: ForeignLang) {
  const config = internationalConfigs[lang];
  const routes = foreignRoutes[lang];
  return [
    { label: config.nav.home, href: routes.home },
    { label: config.nav.products, href: routes.products },
    { label: config.nav.buyers, href: routes.buyers },
    { label: config.nav.quality, href: routes.quality },
    { label: config.nav.logistics, href: routes.logistics },
    { label: config.nav.company, href: routes.company },
  ];
}

export function getPageKeyFromSlug(lang: ForeignLang, slug: string): ForeignPageKey | null {
  const routes = foreignRoutes[lang];
  const normalized = `/${lang}/${slug}/`;
  for (const key of ['products', 'buyers', 'quality', 'logistics', 'company'] as ForeignPageKey[]) {
    if (routes[key] === normalized) return key;
  }
  return null;
}

export function getAlternatesForPath(pathname: string) {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  for (const routes of Object.values(equivalentRoutes)) {
    if (Object.values(routes).includes(normalized as never)) {
      return Object.entries(routes).map(([lang, path]) => ({ lang, href: `https://fruklas.com${path}` }));
    }
  }
  return [];
}

export const ogLocales: Record<SiteLang, string> = {
  es: 'es_ES',
  en: 'en_GB',
  fr: 'fr_FR',
  it: 'it_IT',
  de: 'de_DE',
};
