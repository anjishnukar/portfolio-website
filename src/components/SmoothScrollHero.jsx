import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import EncryptButton from "./buttons/EncryptButton";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-900">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        {/* <Nav /> */}
        <Hero />
        <Schedule />
      </ReactLenis>
      <Footer />
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-900/0 to-zinc-900" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 4000],
    ["100%", "25%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 4000],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(src/public/anjishnudrawing.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="src\public\anjishnuguitar.jpg"
        alt="anjishnu playing guitar"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="src\public\anjishnuinterview.png"
        alt="anjishnu interviewing someone"
        start={200}
        end={-400}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="src\public\anjishnukeyboard.jpg"
        alt="anjishnu playing keyboard"
        start={-1000}
        end={-1300}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="src\public\anjishnurun.jpg"
        alt="anjishnu running"
        start={-600}
        end={-900}
        className="ml-24 w-5/12"
      />
      
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Fun Stuff
      </motion.h1>
      <ScheduleItem title="my playlists" desc="stuff i listen to while doing almost anything" link="https://open.spotify.com/user/d8j6bn51h5zvw0ltx05devvs4?si=ff11e68d21554920" />
      <ScheduleItem title="my art and photography" desc="a bit of tomfoolery, a bit of recreation" link="https://vsco.co/anjishnukar/gallery" />
      <ScheduleItem title="my reads (essays)" desc="and maybe my writes (at some point)?" link="https://substack.com/@anjishnukar" />
      <ScheduleItem title="my book shelf" desc="books that i have read, been reading and dropped" link="https://www.goodreads.com/user/show/201906375-anjishnu-kar" />
    </section>
  );
};

const ScheduleItem = ({ title, desc, link }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm text-zinc-500">{desc}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <EncryptButton link={link} />
      </div>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="pb-24">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="https://github.com/anjishnukar" target="_blank" className="text-red-300 hover:underline">
          @anjishnukar
        </a> | © 2026
      </p>
    </footer>
  );
};

export default SmoothScrollHero;