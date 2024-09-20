import React from 'react';

function ChiSiamo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Benvenuti in Rosina Logistica</h1>
        <p className="text-xl text-gray-700 text-center mb-8">
          La vostra soluzione per il trasporto e la logistica.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chi Siamo</h2>
          <p className="text-gray-700 mb-4">
            Rosina Logistica è un'azienda a conduzione familiare con oltre 50 anni di esperienza nel settore del trasporto e della logistica. Fondata dai fratelli Rosina, l'azienda è cresciuta costantemente grazie alla dedizione e alla passione della famiglia per offrire servizi di alta qualità ai propri clienti.
          </p>
          <p className="text-gray-700 mb-4">
            La nostra missione è fornire soluzioni di trasporto e logistica efficienti e affidabili, mantenendo sempre un approccio personalizzato e attento alle esigenze specifiche di ogni cliente. Grazie alla nostra esperienza e alla nostra flotta moderna, siamo in grado di gestire qualsiasi tipo di trasporto, garantendo puntualità e sicurezza.
          </p>
          <p className="text-gray-700 mb-4">
            La nostra squadra è composta da professionisti altamente qualificati che lavorano insieme per assicurare che ogni spedizione venga gestita con la massima cura e attenzione. Siamo orgogliosi delle nostre radici familiari e crediamo che questo ci permetta di offrire un servizio unico e di alta qualità.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ci Troviamo Qui</h2>
          <p className="text-gray-700 mb-4">
            Autotrasporti Rosina (S.N.C.), Via Peagnola, 18, 35042 Este PD
          </p>
          <div className="w-full h-64">
            <iframe
              title="Rosina Logistica Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.6814324207567!2d11.625520576596127!3d45.219632449723115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f1dc72fc580cb%3A0x9e1d5376dc3f7923!2sAutotrasporti%20Rosina%20(S.N.C.)!5e1!3m2!1sit!2sit!4v1726862383908!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
             width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChiSiamo;