import TextDiv from "./TextDiv";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row  mt-11 mb-4">
      <div
        className="w-full p-4 
         md:border-r-2 
        hover:border-b-8 transition-all border-black "
        id="set"
      ></div>
      <div
        className="w-full p-4 
         md:border-r-2 
        hover:border-b-8 transition-all border-black "
      >
        <h1 class="text-2xl mb-5">About Us...</h1>
        <TextDiv textNum={150}>
          Developers in the field of humanoid robotics will now have access to a
          suite of new tools and services from NVIDIA, as announced at the
          SIGGRAPH 2024 conference. Thesem include NVIDIA NIM Microservices for
          robotics simulation in Isaac Lab and Isaac Sim, the OSMO Robot Cloud
          Compute Orchestration Service, Teleoperated Data Capture Workflow, and
          several other offerings. Jensen Huang, founder and CEO of NVIDIA,
          spoke at the conference, highlighting the company's commitment to
          advancing humanoid robotics. "The next wave of AI is robotics and one
          of the most exciting developments is humanoid robots," said Huang.
          "We're advancing the entire NVIDIA robotics stack, opening access for
          worldwide humanoid developers and companies to use the platforms,
          acceleration libraries and AI models best suited for their needs."
          NVIDIA NIM microservices include pre-built containers powered by
          NVIDIA inference software, designed to reduce deployment times
          significantly. Two new AI microservices, MimicGen and Robocasa, are
          set to enhance simulation workflows for generative physical AI in
          NVIDIA Isaac Sim. MimicGen generates synthetic motion data from
          spatial computing devices like Apple Vision Pro. Robocasa creates
          robot tasks and simulation-ready environments in OpenUSD, a framework
          for 3D world development and collaboration. In addition to NIM, NVIDIA
          has introduced OSMO, a cloud-native managed service. OSMO aims to
          simplify and accelerate the training and simulation workflows for
          robots, cutting development cycle times from months to under a
        </TextDiv>
      </div>
    </div>
  );
}
