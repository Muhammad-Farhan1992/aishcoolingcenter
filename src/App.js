import React from "react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };
  return (
    <div className="font-sans text-gray-800">

      {/* TOP MENU */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LANGUAGE SWITCH */}
          <div className="flex gap-2">
            <button onClick={() => changeLang("en")} className="px-3 py-1 border rounded">
              {t("lan_english")}
            </button>

            <button onClick={() => changeLang("ar")} className="px-3 py-1 border rounded">
              {t("lan_arabic")}
            </button>
          </div>

          <nav className="space-x-6 hidden md:block">
            <a href="#home" className="px-3">{t("top_menu_home")}</a>
            <a href="#services" className="px-3">{t("top_menu_services")}</a>
            <a href="#location" className="px-3">{t("top_menu_location")}</a>
            <a href="#contact" className="px-3">{t("top_menu_contact")}</a>
          </nav>
        </div>
      </header>

      {/* HOME SECTION */}
      <section id="home" className="bg-blue-600 text-white py-24 text-center mt-16">
        <h1 className="text-4xl font-bold mb-4">{t("home_title")}</h1>
        <p className="mb-6 whitespace-pre-line">{t("home_desc")}</p>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">{t("services_title")}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-10">{t("services_concealed")}</h3>
            <p className="mb-6 whitespace-pre-line">{t("concealed_description")}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-10">{t("services_split")}</h3>
            <p className="mb-6 whitespace-pre-line">{t("split_description")}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-10">{t("services_window")}</h3>
            <p className="mb-6 whitespace-pre-line">{t("window_description")}</p>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="location" className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">{t("location_title")}</h2>
        <p className="mb-6 whitespace-pre-line">{t("location_description")}</p>

        <div className="w-full h-[400px] mb-6">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3628.4422802373906!2d46.61980857536184!3d24.57392807811743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM0JzI2LjEiTiA0NsKwMzcnMjAuNiJF!5e0!3m2!1sen!2s!4v1777724972573!5m2!1sen!2s"
            width="100%"
            height="100%"
          ></iframe>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://www.google.com/maps?q=24.5739281,46.6223835"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            {t("location_open_map")}
          </a>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=24.5739281,46.6223835"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white px-5 py-2 rounded"
          >
            {t("location_directions")}
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="bg-blue-600 text-white py-16 px-6 md:px-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          {t("contact_title")}
        </h2>

        <p className="mb-4">
          {t("contact_subtitle")}
        </p>

        <p className="text-lg font-semibold">
          {t("contact_phone")}
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© {new Date().getFullYear()} Aish Refrigeration and Air Conditioning. All rights reserved.</p>
      </footer>

    </div>
  );
}