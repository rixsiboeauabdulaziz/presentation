import { Carousel } from "@material-tailwind/react";

export function ImageCarousel() {
  const texts = [
    "Мы предлагаем продукцию высокого уровня, созданную из современного сырья с применением строгих стандартов производства, чтобы обеспечить максимальное качество и комфорт для наших клиентов.",
    "Каждая единица товара проходит многоступенчатую проверку перед тем, как попасть к вам. Устойчивость к износу, долговечность и функциональность — ключевые преимущества нашей продукции, благодаря которым нам доверяют тысячи покупателей по всей стране.",
    "Мы постоянно улучшаем наши технологии, расширяем ассортимент и заботимся о клиентах. Благодаря сочетанию инноваций, стильного дизайна и строгого контроля качества мы обеспечиваем вам лучшее предложение среди современных брендов.",
  ];

  const images = [
    "/Grey minimalist business project presentation .jpg",
    "/photo_2025-05-26_17-08-15.jpg",
    "/photo_2025-05-26_17-08-32.jpg",
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 mt-10">
      <Carousel
        className="relative rounded-xl h-[830px] w-full overflow-hidden transition-all duration-500"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i
                    ? "w-8 bg-gray-800 dark:bg-gray-200"
                    : "w-4 bg-gray-400 dark:bg-gray-500"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {images.map((src, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-cover"
            />

            {/* ---- TEXT BLOCK ---- */}
            <div className="absolute bottom-20 left-6 max-w-md">
              <p className="text-lg font-semibold text-white drop-shadow-md dark:text-gray-100">
                {texts[index]}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
