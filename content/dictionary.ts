import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export interface Dictionary {
  [key: string]: string | Array<Object> | Object;
}

export const dictionary: Dictionary = {
  tr: {
    global: {
      test: {
        hello: 'Selam',
      },
    },
    nav: {
      links: [
        { name: 'Projeler', href: '#projects' },
        { name: 'İletişim', href: '#contact' },
      ],
    },
    hero: {
      heading: {
        top: 'Kaliteli İçerik',
        bottom: 'Modern Tasarım',
      },
      description: `Inspire Digital ile hem web tasarımı hem de içerik hizmetine tek kaynaktan ulaşabilirsiniz. Son teknoloji araçlarla geliştirdiğimiz ürünlerimiz ve uzman ekiplerle oluşturduğumuz içerikler sayesinde hayalinizdeki gibi bir web sitesine kolayca sahip olmak mümkün!`,
      projectsButton: {
        label: 'Projelerimiz',
        href: '#projects',
      },
      contactButton: {
        label: 'Bize Ulaşın',
        href: '#contact',
      },
    },
    projects: {
      heading: 'Projelerimiz',
      contentManager: {
        heading: 'İçerik',
        items: [
          {
            link: 'https://www.guncelozturk.com/',
            name: 'Op. Dr. Güncel Öztürk',
          },
          {
            link: 'https://drgoksel.com/',
            name: 'Op. Dr. Abdülkadir Göksel',
          },
          {
            link: 'http://www.ahmetgunay.com/',
            name: 'DR. AHMET GÜNAY',
          },
          { link: 'https://www.hairneva.com/', name: 'Hairneva' },
          {
            link: 'http://www.cagatayruhi.com/',
            name: 'OP. DR. ÇAĞATAY RUHİ',
          },
        ],
      },
      developer: {
        heading: 'Yazılım',
        items: [
          {
            link: 'https://real-estate-roan-nine.vercel.app/',
            name: 'Inspire Emlak',
          },
          {
            link: 'https://doktorwebsite-demo-next.vercel.app/',
            name: 'Demo Doktor Sitesi',
          },
        ],
      },
    },
    contact: {
      heading: `İLETİŞİM`,
      socialMedia: {
        emailCopied: 'Email Kopyalandi!',
        copyEmail: 'Emaili kopyala',
      },
      form: {
        name: {
          label: 'Isim',
          placeholder: 'Isminiz',
        },
        email: {
          label: 'Email',
          placeholder: 'Emailiniz',
        },
        message: {
          label: 'Mesaj',
          placeholder: 'Mesajiniz',
        },
        submit: {
          label: 'Mesaj Gonder',
        },
        modal: {
          header: 'Sistem',
          messageOnSuccess: 'Mesajınız başarıyla gönderildi!',
        },
      },
    },
    footer: {
      copyright: `InspireDigital © 2021 - 2022 / Developed by Kerem Duran`,
    },
  },
  en: {
    global: {
      test: {
        hello: 'Hello',
      },
    },
    nav: {
      links: [
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    hero: {
      heading: {
        top: 'Quality Content',
        bottom: 'Modern Design',
      },
      description: `With Inspire Digital, you can access both web design and content services in one place. Thanks to our products developed with state-of-the-art tools and the content created with expert teams, it is possible to have a website like your dreams easily!`,
      projectsButton: {
        label: 'Our Projects',
        href: '#projects',
      },
      contactButton: {
        label: 'Contact Us',
        href: '#contact',
      },
    },
    projects: {
      heading: 'Our Projects',
      contentManager: {
        heading: 'Content',
        items: [
          {
            link: 'https://www.guncelozturk.com/',
            name: 'Surgeon Guncel Ozturk',
          },
          {
            link: 'https://drgoksel.com/',
            name: 'Surgeon Abdulkadir Goksel',
          },
          {
            link: 'http://www.ahmetgunay.com/',
            name: 'DR. AHMET GÜNAY',
          },
          { link: 'https://www.hairneva.com/', name: 'Hairneva' },
          {
            link: 'http://www.cagatayruhi.com/',
            name: 'Surgeon Cagatay Ruhi',
          },
        ],
      },
      developer: {
        heading: 'Software',
        items: [
          {
            link: 'https://real-estate-roan-nine.vercel.app/',
            name: 'Inspire Real Estate',
          },
          {
            link: 'https://doktorwebsite-demo-next.vercel.app/',
            name: 'Demo Doctor Website',
          },
        ],
      },
    },
    contact: {
      heading: `Contact Us`,
      socialMedia: {
        emailCopied: 'Email copied!',
        copyEmail: 'Copy Email',
      },
      form: {
        name: {
          label: 'Name',
          placeholder: 'Your name',
        },
        email: {
          label: 'Email',
          placeholder: 'Your email',
        },
        message: {
          label: 'Message',
          placeholder: 'Your Message',
        },
        submit: {
          label: 'Send Message',
        },
        modal: {
          header: 'System',
          messageOnSuccess: 'Your message has been sent successfully!',
        },
      },
    },
    footer: {
      copyright: `InspireDigital © 2021 - 2022 / Developed by Kerem Duran`,
    },
  },
};
