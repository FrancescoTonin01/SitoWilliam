import React from 'react';

function ContattoItem({ titolo, email }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{titolo}</h2>
      <a 
        href={`mailto:${email}`} 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        {email}
      </a>
    </div>
  );
}

function Contatti() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Contatti</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-xl mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Per Informazioni, Richiesta di Preventivi, o quant'altro</h2>
          <a href="tel:+390429602660" className="text-gray-700 mb-2 block hover:text-blue-600 transition-colors">
            <span className="font-medium">TEL:</span> +39 (0429) 602660
          </a>
          <p className="text-gray-700">
            <span className="font-medium">FAX:</span> +39 (0429) 602690
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ContattoItem titolo="Informazioni Generali" email="angelorosina@autotrasportirosina.com" />
          <ContattoItem titolo="Informazioni Gestione Viaggi" email="info1@autotrasportirosina.com" />
          <ContattoItem titolo="Informazioni Preventivi" email="info2@autotrasportirosina.com" />
          <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Altre Informazioni</h2>
            <a href="mailto:info3@autotrasportirosina.com" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              info3@autotrasportirosina.com
            </a>
            <a href="mailto:info4@autotrasportirosina.com" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              info4@autotrasportirosina.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contatti;