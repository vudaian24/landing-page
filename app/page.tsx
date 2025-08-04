import Image from "next/image";

const url_gpa_cpa = "https://seee-grade.streamlit.app/";
const url_seee_grade = "https://seee-grade.streamlit.app/";

export default function Home() {
  return (
    <div className="relative z-10">
      <div
        id="home"
        className="relative bg-cover bg-bottom bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/images/banner-bg.svg')" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-center max-w-3xl pt-20">
              <h3 className="text-white text-2xl md:text-4xl font-light animate-fadeInUp delay-200 uppercase">
                Dự đoán
              </h3>
              <h2 className="text-white text-2xl md:text-5xl font-bold mt-4 animate-fadeInUp delay-500 uppercase">
                kết quả học tập sinh viên
              </h2>
              <p className="text-white mt-6 text-base md:text-lg animate-fadeInUp delay-800">
                Chọn chức năng bạn muốn sử dụng
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-1 md:grid-cols-2 text-base md:text-lg animate-fadeInUp delay-[1100ms]">
                <a
                  href={url_gpa_cpa}
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Dự đoán GPA kỳ tiếp theo và CPA tốt nghiệp
                </a>
                <a
                  href={url_seee_grade}
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Dự đoán điểm số môn học
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <div className="text-center animate-fadeIn delay-[1400ms] w-full max-w-4xl px-4">
              <Image
                src="/images/header-hero.png"
                alt="hero"
                width={1300}
                height={800}
                className="mx-auto h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Particle layer */}
        <div
          id="particles-1"
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      </div>
    </div>
  );
}
