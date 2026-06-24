import DivOrigami from "./LogoOrigami";
import BlockInTextCard from "./BlockInTextCard";
import { FaArrowCircleDown } from "react-icons/fa";


function Projects() {
    return (
        <div className="flex flex-wrap items-center justify-center">
            
            <div className="flex items-center justify-center px-8 py-24 text-neutral-100">
                <BlockInTextCard
                    tag="/ Projects"
                    text={
                    <>
                        <strong>Projects.</strong> Here are some of the projects I've recently worked on <FaArrowCircleDown className="inline-block animate-bounce" />
                    </>
                    }
                    examples={[
                    "Hardware: Verilog, SystemVerilog, Cadence Virtuoso",
                    "Embedded Systems: Embedded C, Assembly",
                    "Frontend: ReactJS, TailwindCSS, BootstrapCSS, FramerMotion",
                    "Backend: Django, NodeJS, NextJS, MongoDB, ",
                    ]}
                />
            </div>
            <DivOrigami/>
        </div>
    );
};

export default Projects;

