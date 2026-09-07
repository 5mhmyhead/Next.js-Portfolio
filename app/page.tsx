import Image from 'next/image'
import heroImg1 from '../public/hero-image-main.png';
import heroImg2 from '../public/hero-image-small-two.png';
import heroImg3 from '../public/hero-image-small-one.png';

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <h1 className="hero-title">
          <span className="hero-sans">Hello, I&apos;m </span>
          <span className="hero-serif">Dwyane. </span>
        </h1>
        <h2 className="heading">
          <span className="heading-serif">Visual Artist / </span>
          <span className="heading-sans">Software Engineer</span>
          <span className="heading-serif"> / Graphics Designer</span>
        </h2>

        <div className="hero-images">
          <div className="hero-images-1">
            <Image
              src={heroImg1}
              alt="hero image"
              placeholder="blur"
            />
          </div>
          <div className="hero-images-2">
            <Image
              src={heroImg2}
              alt="hero image"
              placeholder="blur"
            />
          </div>
          <div className="hero-images-3">
            <Image
              src={heroImg3}
              alt="hero image"
              placeholder="blur"
            />
          </div>
          <div className="hero-images-4"></div>
          <div className="hero-images-5"></div>
        </div>

        <div className="hero-text">
          <h3>Welcome to my website.</h3>
          <p>
            I’m currently a 20 y.o. college student learning the wonderfully
            volatile life of a software engineer.
          </p>
          <p>
            Aspiring to become a professional in the sphere of computer
            technology, I’m hoping to earn a sizeable enough living to laze
            around all day without regret.
          </p>
          <p className="text-light">I hope you enjoy your time here.</p>
        </div>
      </section>
    </main>
  );
}
