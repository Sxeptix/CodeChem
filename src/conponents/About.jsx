import StarIcon from "@mui/icons-material/Star";
import about from "../assets/aboutus.02f2915b9ae736e9ef8a.png"
const About = () => {
  return (
    <div className="bg-gradient-to-b-r flex justify-evenly items-center lg:h-screen py-20" id="about_section">
      <div className="text-[#dee3ea] flex lg:flex-row flex-col justify-evenly items-center px-5 lg:px-20">
        <div>
          <img src={about} alt="" />
        </div>
        <div className="lg:w-[45%]">
          <h1 className="text-[30px] lg:text-[48px] font-[600] leading-[48px] text-[#dee3ea] py-8">
            About us
            <hr className="border-4 mt-4 rounded-3xl w-[8rem] border-[#5942E9]" />
          </h1>
          <div className="flex gap-3">
            <StarIcon className="text-[#5942e9]" />
            <p className="text-[16px] lg:text-[18px] font-[500] leading-[28px] tracking-[0.9px]">
              We believe that everyone, irrespective of their  branch,
              technical or non-technical background can make it big. CodeChem
              is an initiative built on this thought.
            </p>
          </div>
          <div className="flex gap-3 py-5">
            <StarIcon className="text-[#5942e9]" />
            <p className="text-[16px] lg:text-[18px] font-[500] leading-[28px] tracking-[0.9px]">
              We provide hands-on training, mentorship for FREE and have an
              inclusive club community.
            </p>
          </div>
          <div className="flex gap-3">
            <StarIcon className="text-[#5942e9]" />
            <p className="text-[16px] lg:text-[18px] font-[500] leading-[28px] tracking-[0.9px]">
              Get expert guidance with career, Open Source, and internships,
              jobs around the world.
            </p>
          </div>
          <div className="flex gap-3">
            <StarIcon className="text-[#5942e9]" />
            <p className="text-[16px] lg:text-[18px] font-[500] leading-[28px] tracking-[0.9px]">
              We are also having various events weekly or monthly. Do
              participate in those events to make your skills enhance.
            </p>
          </div>
          <div className=" mt-10">
            <a
              href="https://chat.whatsapp.com/LANhBFWEVlE5a2WOYjz0Nq"
               target="_blank"
              rel="noopener noreferrer"
              
              className="relative bg-[#5942E9] w-max items-center rounded-full py-3 px-7 font-medium transition-all duration-75 focus-visible:before:absolute focus-visible:before:-top-1 focus-visible:before:-left-1 focus-visible:before:-right-1 focus-visible:before:-bottom-1 focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-primary disabled:cursor-not-allowed bg-primary text-content/90 ring-1 ring-primary-hover before:border-primary/30 hover:bg-primary-hover hover:text-content hover:ring-primary active:bg-primary disabled:bg-primary-disable disabled:hover:bg-primary-disable group flex flex-row gap-1"
            >
              <span >Whatsapp</span>
              <svg
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative transition-transform duration-200 motion-reduce:-translate-x-1 group-hover:translate-x-0"
              >
                <path
                  fill="currentColor"
                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                ></path>
                <path
                  stroke="currentColor"
                  d="M1.75 8H11"
                  className="origin-left opacity-0 transition-all duration-200 motion-reduce:-translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
                ></path>
              </svg>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
