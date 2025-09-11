import Image from "../data/allData.js"
function Profile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center m-10" id="about">
      {/* Kolom Teks */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-5">
          Hi, Nama saya Muhammad Adha Alfaridzi
        </h2>
        <p className="text-xl opacity-50 mb-10">
          Saya Mahasiswa Universitas Pamulang semester 5 program studi Teknik Informatika
          yang memiliki ketertarikan pada bidang back-end Development, ketertarikan pada
          bidang ini sudah berlangsung lebih dari 1 tahun.
        </p>
        <div>
          <a
            href="#"
            className="inline-block font-semibold text-white bg-sky-500 rounded-2xl py-3 px-8 hover:opacity-80 transition duration-200 ease-in-out"
          >
            Hubungi saya
          </a>
        </div>
      </div>

      {/* Kolom Gambar */}
      <div className="flex justify-center items-center relative">
        {/* SVG Background */}
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-96 h-96 -z-10"
        >
          <path
            fill="#9EF0F0"
            d="M54.7,-57.8C65.1,-44.4,63.5,-22.2,58.4,-5.1C53.3,12,44.6,24,34.3,32.5C24,41,12,46.1,-3.3,49.4C-18.6,52.7,-37.3,54.3,-49,45.8C-60.8,37.3,-65.7,18.6,-67.4,-1.7C-69.1,-22,-67.6,-44.1,-55.9,-57.5C-44.1,-70.9,-22,-75.7,0.1,-75.8C22.2,-75.9,44.4,-71.2,54.7,-57.8Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Profile Image */}
        <img
          src={Image.MuhammadAdha}
          alt="Muhammad Adha Alfaridzi"
          className="max-w-full h-auto rounded-lg shadow-lg relative z-10"
        />
      </div>
    </div>
  )
}

export default Profile