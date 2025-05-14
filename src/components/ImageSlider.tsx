import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
];

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
  pauseOnHover: false,
  fade: true,
};

export default function ImageSlider() {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className="relative h-64 sm:h-80">
            <Image
              src={src}
              alt={`Corporate office ${idx + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            {idx === 0 && (
              <div className="absolute bottom-6 left-0 w-full flex justify-center">
                <div className="bg-black/60 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg backdrop-blur-sm">
                  Welcome to Your Professional Workspace
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
} 