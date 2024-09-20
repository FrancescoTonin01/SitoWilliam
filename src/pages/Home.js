import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">


      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              La vostra soluzione per il trasporto e la logistica
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Offriamo servizi di trasporto e logistica efficienti e affidabili per soddisfare tutte le vostre esigenze aziendali.
            </p>
            <div className="mt-8">
              <a href="/contatti" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Richiedi un preventivo
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-blue-50 rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trasporto su strada</h3>
                <p className="text-gray-600">Servizi di trasporto su strada efficienti e puntuali in tutta Italia ed Europa.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Logistica integrata</h3>
                <p className="text-gray-600">Soluzioni logistiche complete per ottimizzare la vostra catena di approvvigionamento.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Magazzinaggio</h3>
                <p className="text-gray-600">Servizi di stoccaggio sicuri e flessibili per le vostre merci.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;