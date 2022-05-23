import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

// we use this instead of locale files when we want a single HTML file bundle
const resources7 = { // copied from locale files
  en: {
    translation: {
      home_word: "Home",
      lessons: "Lessons",
      p1: "This is Page 1",

      widePlankHighStyle: "Wide Plank, High Style",
      achieveTheLuxuriousLook:
        "Achieve the luxurious look of wide plank, natural wood flooring with more durability and less upkeep than the real thing. Our Planx Collection offers the wood look you’ve been looking for.",
      learnMore: "Learn More",

      woodTonesAndWarmVibes: "Wood Tones and Warm Vibes",
      thePlanxCollectionEffortlesslyCaptures:
        "The Planx Collection effortlessly captures the look of real wood, both in color and scale. Made of porcelain in impressive 12”x72” formats, Planx offers an organic palette enhanced by its soft, matte finish and deep color body that scoffs at potential scuffs. And with a unique wood grain on every piece, there are no duplicate patterns on your floor.",
      frost: "Frost",

      shopThisLook: "Shop this look",

      earthFirstFlooring: "Earth-First Flooring",
      thePlanxCollectionIsGreenGuard:
        "The Planx Collection is GreenGuard Certified and manufactured in a zero-emissions facility under strict guidelines, utilizing recycled content, natural materials and chemical-free processes.",
      gallery: "Gallery",
      wantToSeeMoreWoodLookTile: "Want to see more wood look tile?",
    },
  },

  ka: {
    translation: {
      home_word: "სახლი",
      lessons: "გაკვეთილები",
      p1: "ეს არის გვერდი 1",

      widePlankHighStyle: "განიერი ფიცარი, მაღალი სტილი",

      achieveTheLuxuriousLook:
        "შექმენით განიერი ფიცრის საუცხოო გარემო, ბუნებრივი ხის ვიზუალის მქონე იატაკით რომელიც უფრო გამძე და ნაკლებად მოსავლელია ვიდრე ნამდვილი ხის იატაკი. ჩვენი Planx კოლექცია გთავაზობთ ისეთი ხის ვიზუალს როგორსაც თქვენ ეძებთ.",
      learnMore: "გაიგეთ მეტი",

      woodTonesAndWarmVibes: "ხის ტონები და თბილი განწყობა",
      thePlanxCollectionEffortlesslyCaptures:
        "Planx კოლექცია მარტივად გვაძლევს ნამდვილი ხის ვიზუალს, როგორც ფერით ასევე მასშტაბით. დამზადებულია ფაიფურით 12”x72” ფორმატში. Planx-ი გთავაზობთ ორგანურ ფიცარს, გაუმჯობესებული გლუვი და მკვეთრი ფერის ზედაპირით რომელიც ადვილად არ იკაწრება. და ყოველ ფიცარზე უნიკალური მარცვლოვანი ვიზუალით თქვენს იატაკზე არ იქნება ორი ერთნაირი ფრაგმენტი.",
      frost: "Frost",
    },
  },

  ru: {
    translation: {
      home_word: "Домой",
      lessons: "Уроки",
      p1: "Это страница 1",
    },
  },
};

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: resources7, // if we don't want json files and we want as js objects
    react: {
      useSuspense: false,
    },
    // check primary langugae here to set initial value
    // change value based on user changing primary langugea settings
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    load: "all",

    // backend: {
    //   loadPath: (par, par2) => {
    //     // check the domain
    //     // const host = window.location.host;
    //     // return ('/static/app' + '/static/app/static/locales/{{lng}}/{{ns}}.json');
    //     // return ('https://api.jsonbin.io/b/628b6613402a5b3802098977');
    //     // console.log(par, par2);

    //     if (par[0] === "en") {
    //       return "https://jsonkeeper.com/b/PYZP";
    //     } else if (par[0] === "ka") {
    //       return "https://jsonkeeper.com/b/D5AC";
    //     }

    //     return "https://jsonkeeper.com/b/PYZP";
    //   },
    // },
  });

interface ILanguageItem {
  id: number;
  code: string;
  localName: string; // "English", "Georgian", "Russian" ...
  countryCode: string; // ISO 3166-1 alpha-2
}

export const languageList: ILanguageItem[] = [
  {
    id: 0,
    code: "en",
    localName: "English",
    countryCode: "gb",
  },
  {
    id: 1,
    code: "ru",
    localName: "Русский",
    countryCode: "ru",
  },
  {
    id: 2,
    code: "ka",
    localName: "ქართული",
    countryCode: "ge",
  },
];

export const changeAppLanguage = (languageCode: string) => {
  const inputLang = languageCode;
  const foundLangObject = languageList.find((x) => x.code === inputLang);
  if (foundLangObject) {
    i18n.changeLanguage(foundLangObject.code);
  } else {
    i18n.changeLanguage("en");
  }
};

setTimeout(() => {
  const currLang = i18n.resolvedLanguage;
  changeAppLanguage(currLang); // slider buttons not woking without this workaround, I don't know why
}, 500);

export default i18n;
