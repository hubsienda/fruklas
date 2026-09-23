import type { ForeignLang } from './index';

export const salesManagerContact = {
  emailHref: 'mailto:miriam@fruklas.es',
  whatsappHref: 'https://wa.me/34627064289',
} as const;

export const salesManagerCopy: Record<ForeignLang, {
  eyebrow: string;
  title: string;
  body: string;
  emailLabel: string;
  whatsappLabel: string;
}> = {
  en: {
    eyebrow: 'Commercial contact',
    title: 'Contact our Sales Manager',
    body: 'For product availability, commercial enquiries, orders or international purchasing requirements, contact our Sales Manager directly.',
    emailLabel: 'EMAIL SALES MANAGER',
    whatsappLabel: 'WHATSAPP SALES MANAGER',
  },
  fr: {
    eyebrow: 'Contact commercial',
    title: 'Contactez notre Responsable Commerciale',
    body: 'Pour connaître les disponibilités, envoyer une demande commerciale, passer une commande ou discuter de vos besoins d’achat, contactez directement notre Responsable Commerciale.',
    emailLabel: 'CONTACTER PAR E-MAIL',
    whatsappLabel: 'CONTACTER SUR WHATSAPP',
  },
  de: {
    eyebrow: 'Vertriebskontakt',
    title: 'Kontaktieren Sie unsere Vertriebsleiterin',
    body: 'Für Produktverfügbarkeit, kommerzielle Anfragen, Bestellungen oder Ihren Einkaufsbedarf kontaktieren Sie bitte direkt unsere Vertriebsleiterin.',
    emailLabel: 'E-MAIL AN VERTRIEB',
    whatsappLabel: 'WHATSAPP-KONTAKT',
  },
  it: {
    eyebrow: 'Contatto commerciale',
    title: 'Contatta la nostra Responsabile Commerciale',
    body: 'Per disponibilità dei prodotti, richieste commerciali, ordini o esigenze di acquisto, contatta direttamente la nostra Responsabile Commerciale.',
    emailLabel: 'CONTATTA VIA E-MAIL',
    whatsappLabel: 'CONTATTA SU WHATSAPP',
  },
};
