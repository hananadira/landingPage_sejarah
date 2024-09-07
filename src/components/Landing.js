export default function Example() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                PERTEMPURAN SURABAYA
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              Terjadi pada 10 November 1945 di Surabaya, Jawa Timur, pertempuran ini melibatkan 
              ribuan pejuang Indonesia melawan pasukan Sekutu, terutama Inggris dan Belanda. Pertempuran 
              ini dianggap sebagai simbol perlawanan rakyat Indonesia terhadap kolonialisme dan 
              merupakan pertempuran terbesar dan terberat dalam sejarah revolusi Indonesia.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="-mb-40 mt-100 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-68 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src={`${process.env.PUBLIC_URL}/assets/1.jpeg`}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={`${process.env.PUBLIC_URL}/assets/6.jpeg`}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="mb-40 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={`${process.env.PUBLIC_URL}/assets/2.jpeg`}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={`${process.env.PUBLIC_URL}/assets/bendera.jpeg`}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="-mt-80 mb-40 grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={`${process.env.PUBLIC_URL}/assets/4.jpeg`}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={`${process.env.PUBLIC_URL}/assets/5.jpeg`}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="https://www.youtube.com/watch?v=d3Q1Q907yf8"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  More Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }  