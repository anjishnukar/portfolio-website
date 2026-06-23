import { useMotionValue, motion, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="bg-zinc-900 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-5xl text-heading font-black">Personal Projects</p>
        <Link
          heading="RISC-V RV32I Processor"
          subheading="Designed and simulated a 5-stage pipelined RISC-V RV32I processor in Verilog with full data forwarding, hazard detection, and branch flushing. Verified against 5 test programs using a self-checking testbench; achieved CPI of 1.08 on arithmetic-heavy workloads. Stack used: Icarus Verilog for simulation, GTKWave for waveform viewing, and Visual Studio Code with Verilog extensions for development."
          stack="Verilog, Icarus Verilog, GTKWave"
          imgSrc="src\public\riscv.png"
          href="https://github.com/anjishnukar/RISCV-RV32I-Processor"
        />
        <Link
          heading="Bare-metal RTOS in C"
          subheading="Implemented a preemptive bare-metal RTOS from scratch in C and ARM Thumb-2 assembly for Cortex-M3, including cooperative/preemptive scheduler, context switching via PendSV, counting semaphores with blocked task queues, and stack overflow detection. Verified using QEMU emulation and GDB remote debugging"
          imgSrc="/imgs/random/6.jpg"
          href="https://github.com/anjishnukar/RTOS-Cortex-M"
        />
        <Link
          heading="Shell in C"
          subheading="Implemented a simple command-line shell in C"
          stack="C, POSIX Sockets"
          imgSrc="/imgs/random/4.jpg"
          href="https://github.com/anjishnukar/baremetal-shell"
        />
        <p className="mt-9 text-5xl text-heading font-black">Internship Projects</p>
        <Link
          heading="Wipro Technologies Embedded Systems Internship Summer'26"
          subheading=""
          stack=""
          imgSrc="src\public\wipro.png"
          href="#"
        />
        <Link
          heading="Siemens (Altair Engineering) Data Science Internship Summer'25"
          subheading="Developed an AI-powered system for automated detection and classification of PCB defects by integrating the YOLOv8n deep learning model within RapidMiner Studio. Utilized Python scripting in RapidMiner to streamline data preprocessing, model training, and batch predictions within a user-friendly environment. The system’s performance was validated using key metrics including precision, recall, F1 score, and mAP, achieving high reliability for real-time inspection and significantly improving the speed and accuracy of PCB quality control processes."
          stack="YOLOv8, PyTorch, Altair Rapidminer Studio"
          imgSrc="src\public\altair.png"
          href="#"
        />
        <p className="mt-9 text-5xl text-heading font-black">Club Projects</p>
        <Link
          heading="EDC Auditions Page"
          subheading="Designed and deployed a full-stack web application using React, Tailwind CSS, and Django to automate and streamline the club’s annual recruitment pipeline. Implemented fluid, dynamic user interfaces with Framer Motion to elevate user engagement and simplify a multi-step registration form for 200+ applicants. Centralized applicant data management on the backend, eliminating manual tracking and drastically reducing administrative overhead for the core team."
          stack="React, TailwindCSS, Framer Motion, Node.js"
          imgSrc="src\public\auditions.png"
          href="https://github.com/anjishnukar/Auditions-Page"
        />
        <Link
          heading="NIT Durgapur's Official E-Summit Website"
          subheading="Engineered and deployed the official full-stack website for the second-largest entrepreneurial festival in East India, successfully supporting 2,000+ active participants. Designed and coded an interactive, gamified QR Hunt web application, implementing real-time progress tracking and secure backend validation for live festival attendees."
          stack = "GSAP, BootstrapCSS, Django"
          imgSrc="src\public\esummit.png"
          href="https://github.com/anjishnukar/ESUMMIT-25"
        />
        <Link
          heading="Consultancy Collaboration with a Local Startup"
          subheading="Collaborated with an early-stage startup Viniyog One to conduct comprehensive market research and develop actionable go-to-market (GTM) strategies helping identify target customer segments, competitive positioning and growth opportunities"
          stack = "AARRR Framework, Market Research, GTM Strategy, Financial Modelling"
          imgSrc="src\public\vini.jpg"
          href="https://www.linkedin.com/posts/consultancy-wing-edc-nit-durgapur_edc-consulting-startups-activity-7443607585074798592-pQcy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExS7NgB395bsC3kv1bTlnFQRx7rn9jAnjQ"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, stack, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-3xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-3xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading} <br /> <strong>Stack Used:</strong> {stack}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};

export default HoverImageLinks;