const features = [
    {
      name: 'Oktober 1945',
      description:
        'Pasukan Inggris mulai mendarat di Surabaya. Awalnya, hubungan antara pihak Indonesia dan Inggris masih relatif baik. Namun, situasi mulai memanas ketika terjadi insiden penembakan terhadap tentara Inggris.',
    },
    {
      name: '30 Oktober 1945',
      description:
        'Brigadir Jenderal Mallaby, komandan pasukan Inggris, tewas dalam sebuah insiden. Kematiannya menjadi pemicu utama pecahnya pertempuran besar-besaran.',
    },
    {
      name: '10 November 1945',
      description:
        'Pasukan Inggris melancarkan serangan besar-besaran ke Surabaya. Serangan ini mendapat perlawanan sengit dari rakyat Surabaya yang dipimpin oleh para pemuda.',
    },
    {
      name: 'Pertempuran Sengit',
      description:
        'Pertempuran berlangsung selama beberapa minggu. Rakyat Surabaya menunjukkan semangat juang yang tinggi, meskipun harus menghadapi persenjataan yang jauh lebih modern milik pasukan Inggris.',
    },
    {
      name: 'Akhir Pertempuran',
      description:
        'Pertempuran berakhir dengan kemenangan pasukan Inggris. Namun, kemenangan ini diperoleh dengan harga yang mahal. Ribuan rakyat Surabaya gugur, dan kota Surabaya mengalami kerusakan yang parah.',
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">KRONOLOGI PERISTIWA</h2>
            {/* <p className="mt-4 text-gray-500">
              Ada beberapa faktor yang menyebabkan terjadi nya peristiwa <b>Pertempuran Surabaya</b> yang dapat kita lihat di bawah ini secara singkat, dimulai
              dari Kedatangan Sekutu ke Surabaya, Insiden Hotel Yamato, Pembunuhan Brigadir Jenderal Mallaby, dan Ultimatum 10 November 1945
            </p> */}
  
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
  