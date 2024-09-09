import React, { useState } from 'react';
import Model from './Model'; // Import modal dari Model.js

const callouts = [
  {
    name: 'Bung Tomo (Sutomo)',
    description: 'Pemimpin perjuangan, orator',
    imageSrc: 'assets/bung-tomo.jpeg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    tokoh: 'Bung Tomo lahir di Surabaya, Jawa Timur, pada 3 Oktober 1920. Ia dikenal sebagai pemimpin perjuangan rakyat Indonesia melawan penjajah Belanda dalam Pertempuran Surabaya pada 10 November 1945. Dengan semangat nasionalisme yang tinggi, orasi-orasi Bung Tomo berhasil membangkitkan semangat juang para pemuda untuk mempertahankan kemerdekaan Indonesia. Bung Tomo meninggal dunia pada 7 Oktober 1981 di Mecca, Arab Saudi, dan dimakamkan di Surabaya. Ia diangkat sebagai Pahlawan Nasional Indonesia pada tahun 2008.',
  },  
  {
    name: 'Jenderal Sudirman',
    description: 'Panglima Besar Tentara Nasional Indonesia',
    imageSrc: 'assets/Jendral-Sudirman.jpeg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    tokoh: 'Jenderal Sudirman (1916-1950) adalah Panglima Besar TNI pertama dan pahlawan nasional Indonesia. Ia memimpin Pertempuran Ambarawa melawan Belanda dan dikenal karena strategi gerilyanya selama Agresi Militer Belanda II. Meski sakit parah, Sudirman tetap memimpin pasukannya dengan penuh semangat. Ia wafat pada 29 Januari 1950 dan dikenang sebagai simbol perjuangan dan kepemimpinan bangsa.'
  },
  {
    name: 'Kolonel Sungkono',
    description: 'Komandan Militer Surabaya',
    imageSrc: 'assets/Kolonel-Sungkono.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    tokoh: 'Kolonel Sungkono (1916-1996) adalah pahlawan nasional yang memimpin pasukan TKR di Jawa Timur selama Revolusi Kemerdekaan Indonesia. Ia berperan penting dalam Pertempuran Surabaya pada 10 November 1945 dan dikenal karena keberanian serta strateginya. Setelah kemerdekaan, ia turut memperkuat TNI dan dikenang sebagai pejuang gigih untuk kemerdekaan Indonesia.'
  },
  {
    name: 'Brigadir Jenderal Mallaby',
    description: ' Komandan Pasukan Inggris (AFNEI) di Surabaya',
    imageSrc: 'assets/Brigadir-Jenderal-Mallaby.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    tokoh: 'Brigadir Jenderal A.W.S. Mallaby (1899-1945) adalah seorang perwira tinggi Inggris yang memimpin pasukan Sekutu di Surabaya setelah Perang Dunia II. Tugasnya adalah melucuti senjata tentara Jepang dan menjaga keamanan, namun ketegangan dengan pejuang Indonesia meningkat. Mallaby tewas dalam insiden pada 30 Oktober 1945, yang memicu Pertempuran Surabaya pada 10 November 1945. Kematian Mallaby menjadi salah satu pemicu eskalasi konflik antara pasukan Sekutu dan pejuang Indonesia.',
  },
  {
    name: 'Residen Sudirman',
    description: 'Residen Surabaya',
    imageSrc: 'assets/Residen-Sudirman.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    tokoh: 'Residen Sudirman (1888-1949) adalah seorang pemimpin daerah di Bojonegoro yang berperan penting dalam perjuangan kemerdekaan Indonesia. Sebagai Residen Bojonegoro, ia mendukung pergerakan kemerdekaan dan berusaha menjaga stabilitas di wilayahnya selama masa revolusi. Sudirman tewas dalam serangan Belanda pada 20 Desember 1949 dan dikenang sebagai tokoh yang berdedikasi dalam memperjuangkan kemerdekaan Indonesia.'
  },
  {
    name: 'Mayor Daan Mogot',
    description: 'Pejabat militer Indonesia',
    imageSrc: 'assets/Mayor-Daan-Mogot.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    tokoh: 'Mayor Daan Mogot (1928-1946) adalah seorang perwira TNI muda dan pahlawan nasional Indonesia. Ia menjadi direktur pertama Akademi Militer Tangerang. Mogot gugur dalam Insiden Lengkong pada 25 Januari 1946 saat memimpin pasukannya melucuti senjata Jepang. Ia dikenang sebagai simbol keberanian dan pengorbanan dalam perjuangan kemerdekaan Indonesia.'
  },
  {
    name: 'W.R. Supratman',
    description: 'Composer, musisi',
    imageSrc: 'assets/W.R.-Supratman.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    tokoh: 'W.R. Supratman (1903-1938) adalah seorang komponis dan penulis lagu terkenal Indonesia. Ia dikenal sebagai pencipta lagu kebangsaan "Indonesia Raya," yang pertama kali diperdengarkan pada 28 Oktober 1928. Supratman berperan penting dalam memotivasi semangat nasionalisme dan perjuangan kemerdekaan Indonesia. Ia meninggal pada 17 Agustus 1938 dan dikenang sebagai pahlawan musik dan simbol perjuangan bangsa.'
  },
];

export default function Example() {
  const [open, setOpen] = useState(false); // State untuk modal
  const [selectedPost, setSelectedPost] = useState(null); // State untuk data yang dipilih

  const handleOpenModal = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedPost(null);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Para tokoh Pertempuran Surabaya</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative mb-8" // Menambahkan margin bottom di sini
                onClick={() => handleOpenModal(callout)} // Buka modal saat diklik
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <span className="absolute inset-0" />
                  {callout.name}
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <Model post={selectedPost} open={open} onClose={handleCloseModal} />
      )}
    </div>
  );
}
