
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import uzTranslaton from "../locales/uz/uzTranslaton.json"
import ruTranslaton from "../locales/ru/ruTranslaton.json"


i18n
    .use(initReactI18next)
    .init({

        resources: {
            ru: {
                translation: ruTranslaton
            },
            uz: {
                translation: uzTranslaton
            }
        },
        lng: "ru",
        fallbackLng: "ru",

        interpolation: {
            escapeValue: false
        }
    });