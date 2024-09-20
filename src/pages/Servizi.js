import React from 'react';

function Servizi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">I Nostri Servizi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Servizi Offerti</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Viaggi Completi</li>
              <li>Groupage</li>
              <li>Distribuzione</li>
              <li>Depositi</li>
              <li>Magazzinaggio e Logistica</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Parco Veicolare</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>9 motrici con sponda idraulica</li>
              <li>2 motrici con rimorchio e sponda idraulica</li>
              <li>11 autoarticolati con n° 18 semirimorchi</li>
              <li>5 furgoni con sponda idraulica</li>
              <li>1 magazzino di 3.000 mq</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Operatività</h2>
            <p className="text-gray-700 mb-4">
              Operiamo in tutto il Nord Italia con carichi completi. La Distribuzione viene effettuata in Trentino, Veneto, Friuli Venezia Giulia, Emilia Romagna e Lombardia.
            </p>
            <p className="text-gray-700">
              Prestiamo molta attenzione alle esigenze del cliente, rispettando con scrupolosità i tempi di consegna offrendo servizi di alta qualità. Le nostre strategie logistiche nascono da attente e ponderate valutazioni delle esigenze del cliente e sono il frutto di una perfetta sinergia con il cliente stesso.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 md:col-span-2 lg:col-span-3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Il Nostro Team</h2>
            <p className="text-gray-700 mb-4">
              Il tutto grazie ad un team affiatato, in grado di valutare tutte le alternative e scegliere la migliore soluzione: quella che porta alla Vostra soddisfazione.
            </p>
            <p className="text-gray-700 mb-4">
              La nostra organizzazione quindi è in grado di recepire e soddisfare le esigenze della clientela con adeguata:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Tempistica</li>
              <li>Professionalità</li>
              <li>Esperienza</li>
              <li>Conoscenza Tecnica e Tecnologia</li>
              <li>Flessibilità</li>
              <li>Qualità ed esperienza</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servizi;