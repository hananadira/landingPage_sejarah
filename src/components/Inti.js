import React from 'react';

const stats = [
  {
    name: 'Datang ke Indonesia dengan alasan untuk melucuti senjata tentara Jepang dan membebaskan tawanan perang. Namun, kehadiran mereka seringkali diinterpretasikan sebagai upaya untuk kembali menjajah Indonesia.',
    value: 'Kedatangan Pasukan Sekutu',
  },
  {
    name: 'Terjadi miskomunikasi dan kesalahpahaman antara pihak Indonesia dan Sekutu, yang memicu ketegangan dan akhirnya meletus menjadi pertempuran.',
    value: 'Miskomunikasi dan Ketegangan',
  },
  {
    name: 'Rakyat Surabaya, yang telah merasakan euforia kemerdekaan, tidak ingin wilayahnya dikuasai kembali oleh kekuatan asing. Mereka siap berkorban untuk mempertahankan kemerdekaan.',
    value: 'Semangat Nasionalisme',
  },
];

export default function SimpleAttractiveLayout() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Latar Belakang</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Pertempuran Surabaya adalah salah satu peristiwa paling penting dalam sejarah perjuangan kemerdekaan
            Indonesia. Pertempuran ini terjadi pada tahun 1945, tepat setelah Proklamasi Kemerdekaan Indonesia.
            Surabaya, kota terbesar kedua di Indonesia saat itu, menjadi pusat perlawanan sengit antara pasukan
            Indonesia dan pasukan Sekutu (terutama Inggris).
          </p>
        </div>

        <div className="bg-white py-12 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Penyebab Utama Pertempuran</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 w-80 shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="flex mb-4">
                  <div className="bg-blue-900 text-white p-4 rounded-full shadow-lg mr-4">
                    <span className="text-3xl font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{stat.value}</h4>
                    <p className="text-gray-600">{stat.name}</p>
                  </div>
                </div>
              </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
