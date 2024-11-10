"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CookiePopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleTogglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <button
        onClick={handleTogglePopup}
        className={`bg-white p-4 poppins-f h-[50px] rounded-t-xl fixed right-10 z-[9998] -bottom-[35px] cmplz-manage-consent ${
          isPopupVisible ? "hidden" : "hidden md:flex"
        }`}
      >
        Manage Consent
      </button>

      {/* CookiePopup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black/70 z-50">
          <div className="fixed bottom-0 md:bottom-3 right-0 md:right-3 bg-white py-[15px] px-5 z-[9999] rounded-t-xl md:rounded-b-xl max-w-full md:max-w-[526px] w-full">
            <div className="flex items-center justify-between gap-1">
              <h2></h2>
              <h2 className="text-base md:text-lg text-[#222] poppins-f">Cookie-Zustimmung verwalten</h2>
              <Image
                src="/assets/close.svg"
                alt="close icon"
                width={20}
                height={20}
                className="cursor-pointer w-5 h-5"
                onClick={handleTogglePopup}
              />
            </div>

            <p className="my-7 text-xs text-[#222] poppins-f">
              Wir verwenden Technologien wie Cookies, um Geräteinformationen zu
              speichern und/oder darauf zuzugreifen. Wir tun dies, um das
              Browsing-Erlebnis zu verbessern und um (nicht) personalisierte
              Werbung anzuzeigen. Wenn du nicht zustimmst oder die Zustimmung
              widerrufst, kann dies bestimmte Merkmale und Funktionen
              beeinträchtigen. Mit dem Klick auf &quot;Akzeptieren&quot;, bestätigst du
              deine Volljährigkeit.
            </p>

            <div className="flex gap-3 flex-col md:flex-row">
              <button className="p-[10px] text-center bg-[#1e73be] text-white rounded-md poppins-f text-sm w-full">
                Akzeptieren
              </button>
              <button className="p-[10px] text-center bg-[#f9f9f9] text-[#222] rounded-md poppins-f text-sm w-full">
                Ablehnen
              </button>
              <button className="p-[10px] text-center bg-[#f9f9f9] text-[#222] rounded-md poppins-f text-sm w-full md:whitespace-nowrap">
                Einstellungen ansehen
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 mt-4">
              <Link href="#" className="text-[#1E73BE] underline text-sm poppins-f">
                Cookie-Richtlinie
              </Link>
              <Link href="#" className="text-[#1E73BE] underline text-sm poppins-f">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookiePopup;
