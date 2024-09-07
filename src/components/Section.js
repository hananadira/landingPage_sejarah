const features = [
    {
      name: 'Kedatangan Sekutu ke Surabaya',
      description:
        'Setelah kekalahan Jepang dalam Perang Dunia II, Indonesia memproklamasikan kemerdekaannya pada 17 Agustus 1945. Namun, Belanda yang ingin mengembalikan kekuasaan kolonialnya meminta bantuan Sekutu (terutama Inggris) untuk menduduki kembali Indonesia. Pada Oktober 1945, pasukan Sekutu di bawah komando Brigadir Jenderal A.W.S. Mallaby mendarat di Surabaya untuk melucuti senjata tentara Jepang dan membebaskan para tawanan perang.',
    },
    {
      name: 'Insiden Hotel Yamato (19 September 1945)',
      description:
        'Sekelompok warga Surabaya menurunkan bendera Belanda (Merah-Putih-Biru) yang dikibarkan oleh orang-orang Belanda di hotel tersebut, lalu merobek bagian biru dari bendera tersebut sehingga hanya menyisakan warna Merah Putih, lambang Indonesia. Insiden ini memicu bentrokan antara pemuda Indonesia dengan pihak Belanda.',
    },
    {
      name: 'Pembunuhan Brigadir Jenderal Mallaby (30 Oktober 1945)',
      description:
        'Situasi semakin tegang setelah terbunuhnya Brigadir Jenderal Mallaby, seorang perwira tinggi Inggris yang sedang bertugas di Surabaya. Mallaby tewas ketika mobil yang ditumpanginya dikepung dan terkena ledakan granat. Insiden ini menyebabkan Inggris memberikan ultimatum kepada para pejuang Surabaya untuk menyerah dan meletakkan senjata.',
    },
    {
      name: 'Ultimatum 10 November 1945',
      description:
        'Ultimatum yang diberikan Inggris meminta agar semua senjata yang dimiliki oleh para pejuang Indonesia diserahkan paling lambat pada tanggal 10 November 1945, pukul 06.00 pagi. Namun, ultimatum ini ditolak mentah-mentah oleh rakyat Surabaya.',
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          {/* Section gambar dipindahkan ke kiri */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              src={`${process.env.PUBLIC_URL}/assets/content1.jpeg`}
              className="mt-14 rounded-lg bg-gray-100"
            />
            <img
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              src={`${process.env.PUBLIC_URL}/assets/content2.jpeg`}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Side of walnut card tray with card groove and recessed card area."
              src={`${process.env.PUBLIC_URL}/assets/content3.jpeg`}
              className="-mt-12 rounded-lg bg-gray-100"
            />
            <img
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              src={`${process.env.PUBLIC_URL}/assets/content4.jpeg`}
              className="rounded-lg bg-gray-100"
            />
          </div>
  
          {/* Section teks berada di kanan */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">LATAR BELAKANG</h2>
            <p className="mt-4 text-gray-500">
              Ada beberapa faktor yang menyebabkan terjadi nya peristiwa <b>Pertempuran Surabaya</b> yang dapat kita lihat di bawah ini secara singkat, dimulai
              dari Kedatangan Sekutu ke Surabaya, Insiden Hotel Yamato, Pembunuhan Brigadir Jenderal Mallaby, dan Ultimatum 10 November 1945
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  