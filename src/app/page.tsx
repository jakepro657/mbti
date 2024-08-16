import Background from "@/components/Background";
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import { carouselImg } from "@/utils/img";
import { randomInt } from "crypto";
import Image from "next/image";


export default function Home() {
  return (
    <div className="page" id="home">
      <Banner />
      {/* 최신 심리테스트 */}
      <div className="slide">
        <h6>❤️최신 심리테스트</h6>
        <div className="slide-container">
          {carouselImg.map((img, i) => (
            <div key={i} className="slide-element">
              <Image src={img} alt={`carousel-${i}`} />
              <p>즐거운 심리테스트 version {i}</p>
              <div className="text-xs font-thin ">👍 {randomInt(100, 1000)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 이번주 인기 테스트 */}
      <div className="slide">
        <h6>😊이번주 인기 테스트</h6>
        <div className="slide-container">
          {carouselImg.map((img, i) => (
            <div key={i} className="slide-element">
              <Image src={img} alt={`carousel-${i}`} />
              <p>즐거운 심리테스트 version {i}</p>
              <div className="text-xs font-thin ">👍 {randomInt(100, 1000)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
