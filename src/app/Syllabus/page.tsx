import React from "react";
import Image from "next/image";
import png from "../../../public/bg.jpg";
export default function page() {
  return (
   
    <div  >
      
      <div className="text-5xl font-serif text-center ">
        <h1 className="underline decoration-double  text-opacity-80 my-6 ">
          Course Syllabus
        </h1>
        <p className="text-lg text-justify my-4 px-8  ">
          The first three quarters are shared by all specialities and are
          dedicated to studying Object Oriented Programming and cutting-edge
          Full-Stack Web 2.0 development. It is going to be a fifteen-month-long
          hybrid programm that includes both onsite and online classes and is
          divided into five quarters of 13 weeks each.
        </p>
      </div>
      <div className="text-5xl font-serif text-center ">
        <h1 className="underline decoration-solid my-6">Common In All</h1>
      </div>
    
      <div className="flex flex-wrap justify-center items-center">
        <div className="text-center p-8 m-5 text-4xl   font-serif text-black bg-teal-700 rounded-lg max-w-[400px] min-h-[300px] ">
          <h1 className="underline mb-5">Quarter IV</h1>
          <p className="text-white font-serif text-lg ">
            CS-101: Object-Oriented Programming using TypeScript and Typescript
            for React.
          </p>
        </div>
        <div className="text-center p-8 m-5 text-4xl  font-serif text-black bg-teal-700 rounded-lg max-w-[400px]  min-h-[300px]">
          <h1 className="underline  mb-5">Quarter V</h1>
          <p className="text-white font-serif text-lg ">
            W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js
            13 and Cloud Development Kit (CDK) for Terraform.
          </p>
        </div>
        <div className="text-center p-8 m-5 text-4xl   font-serif text-black bg-teal-700 rounded-lg max-w-[400px] min-h-[300px]">
          <h1 className="underline mb-5">Quarter III</h1>
          <p className="text-white font-serif  text-lg  ">
            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development.
          </p>
        </div>
      </div>
      <div>
        <h1 className="underline text-center  px-8 text-4xl   font-serif text-black my-6 ">
          Specialized Tracks
        </h1>
        <p className="text-black font-serif text-lg mt-3 text-center px-8  ">
          After completing the first two quarters the participants will select
          one or more specializations consisting of two courses each:
        </p>
      </div>
      <div className="mt-10">
        <h1 className=" text-center p-15  text-4xl   font-serif text-black underline decoration-double ">
          1- Web 3.0 (Blockchain) and Metaverse Specialization
        </h1>
        <p className="text-black font-serif text-lg mt-5 text-justify px-8  ">
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap  ">
        <div className="text-center p-10 m-5 text-4xl  font-serif text-black bg-blue-600 rounded-lg mb-2 w-[550px] min-h-[500px]">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-yellow-400"> IV</span>
          </h1>
          <p className="text-black font-serif text-lg mt-3 text-justify font-extrabold ">
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0
            Dapps.Web 3.0, sometimes known as Web 3, is the concept of the next
            generation of the web, in which most users will be connected via a
            decentralized network and have access to their own data. This
            article taught us about the technologies that are anticipated to
            advance and change in the upcoming years.Web 3.0, sometimes known as
            Web 3, is the concept of the next generation of the web.
          </p>
        </div>
        <div className="text-center p-10 m-6 text-4xl  font-serif text-black bg-blue-600 rounded-lg  mb-2 w-[550px] min-h-[500px]">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-red-900"> V</span>
          </h1>
          <p className="text-black font-serif text-lg mt-3 text-justify font-extrabold ">
            MV-361: Developing Planet-Scale and Augmented Metaverse
            Experiences.Web 3.0, sometimes known as Web 3, is the concept of the
            next generation of the web, in which most users will be connected
            via a decentralized network and have access to their own data. This
            article taught us about the technologies that are anticipated to
            advance and change in the upcoming years.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <h1 className=" text-center p-15  text-4xl   font-serif text-black underline decoration-double ">
          {" "}
          2- Artificial Intelligence (AI) and Deep Learning Specialization
        </h1>
        <p className="text-black font-serif text-lg mt-5 text-justify  px-8  ">
          The AI and Deep Learning specialization focuses on building and
          deploying intelligent APIs using OpenAI models and building custom
          Deep Learning Tensorflow models.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap ">
        <div className="text-center p-10 m-5 text-4xl  font-serif text-black bg-gray-600 rounded-lg  mb-2 w-[550px] min-h-[500px]">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-yellow-400"> IV</span>
          </h1>
          <p className="text-black font-serif text-lg mt-3 text-justify font-extrabold ">
            AI-351: Developing Planet-Scale APIs and Python
            Programming.Artificial intelligence (AI) is intelligence—perceiving,
            synthesizing, and inferring information—demonstrated by machines, as
            opposed to intelligence displayed by non-human animals and humans.
            Example tasks in which this is done include speech recognition,
            computer vision, translation between (natural) languages, as well as
            other mappings of inputs
          </p>
        </div>
        <div className="text-center p-10 m-6 text-4xl  font-serif text-black bg-gray-600 rounded-lg  mb-2 w-[550px] min-h-[500px]">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-red-900"> V</span>
          </h1>
          <p className="text-black font-serif text-lg mt-3 text-justify font-extrabold ">
            AI-361: Deep Learning and MLOps (Machine Learning
            Operations).Artificial intelligence (AI) is intelligence—perceiving,
            synthesizing, and inferring information—demonstrated by machines, as
            opposed to intelligence displayed by non-human animals and humans.
            Example tasks in which this is done include speech recognition,
            computer vision, translation between (natural) languages, as well as
            other mappings of inputs
          </p>
        </div>
      </div>{" "}
      <div className="mt-20">
        <h1 className=" text-center p-15  text-4xl   font-serif text-black underline decoration-double ">
          3- Cloud-Native Computing Specialization
        </h1>
        <p className="text-black font-serif text-lg mt-5 text-justify  px-8   ">
          The Cloud-Native Computing Specialization focuses on Containers,
          Kubernetes, and CDK for Kubernetes.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap ">
        <div className="text-center p-10 m-5 text-4xl  font-serif text-black bg-blue-600 rounded-lg  mb-2 w-[550px] min-h-[500px]">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-yellow-400"> IV</span>
          </h1>
          <p className="text-black font-serif text-lg mt-3 text-justify font-extrabold ">
            CN-351: Certified Kubernetes Application Developer (CKAD).Cloud
            computing is the on-demand availability of computer system
            resources, especially data storage and computing power, without
            direct active management by the user. Large clouds often have
            functions distributed over multiple locations, each of which is a
            data center
          </p>
        </div>
        <div className="text-center p-10 m-6 text-4xl  font-serif text-black bg-blue-600 rounded-lg  mb-2 w-[550px] min-h-[500px]">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-red-900"> V</span>
          </h1>
          <p className="text-black font-serif text-lg mt-3 text-justify font-extrabold ">
            CN-361: Developing Multi-Cloud APIs using CDK for Terraform.Cloud
            computing is the on-demand availability of computer system
            resources, especially data storage and computing power, without
            direct active management by the user. Large clouds often have
            functions distributed over multiple locations, each of which is a
            data center
          </p>
        </div>
      </div>{" "}
      <div className="mt-20">
        <h1 className=" text-center p-15  text-4xl   font-serif text-black underline decoration-double ">
          4- Ambient Computing and IoT Specialization
        </h1>
        <p className="text-black font-serif text-lg mt-5 text-justify  px-8  ">
          The Ambient Computing and IoT Specialization focuses on building Smart
          Homes, Offices, Factories, and Cities using Voice computing, Matter,
          and Embedded Devices.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap ">
        <div className="text-center p-10 m-5 text-4xl  font-serif text-black rounded-lg  bg-amber-300  mb-2 w-[550px] min-h-[500px]">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-black"> IV</span>
          </h1>
          <p className="text-black font-serif text-lg mt-3 text-justify font-extrabold ">
            AC-351: Ambient Computing with Voice Assistants and Matter
            Devices.Ambient Computing is a smart combination of software,
            databases, high-speed internet network, smart devices, and human or
            machine users. It works all the time around us through near-field
            communication and far-field communication between sensors,
            actuators, and task-executing machines.
          </p>
        </div>
        <div className="text-center p-10 m-6 text-4xl  font-serif text-black bg-blue-600 rounded-lg mb-2 w-[550px] min-h-[500px] ">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-red-900"> V</span>
          </h1>
          <p className="text-black font-serif text-lg mt-3 text-justify  font-extrabold ">
            C-361: Embedded Programming using C and RustAmbient Computing is a
            smart combination of software, databases, high-speed internet
            network, smart devices, and human or machine users. It works all the
            time around us through near-field communication and far-field
            communication between sensors, actuators, and task-executing
            machines.
          </p>
        </div>
      </div>{" "}
      <div className="mt-20">
        <h1 className=" text-center p-15  text-4xl   font-serif text-black underline decoration-double ">
          5- Genomics and Bioinformatics Specialization
        </h1>
        <p className="text-black font-serif text-lg mt-5 text-justify px-8 ">
          Genomics is the study of the total genetic makeup of individual
          organisms, and how this genetic information is structured, functions,
          and has evolved; bioinformatics encompasses a diverse range of
          analytical methods and tools applied to genomic data. This
          Specialization focus on performing complex bioinformatics analysis
          using the most essential Python libraries and applications
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap ">
        <div className="text-center p-10 m-5 text-4xl  font-serif text-black bg-blue-600 rounded-lg  mb-2 w-[550px] min-h-[500px]">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-yellow-400"> IV</span>
          </h1>
          <p className="text-black font-serif text-lg mt-3 text-justify font-extrabold  ">
            Bio-351: Python for Biologists.Bioinformatics is defined as the
            application of tools of computation and analysis to the capture and
            interpretation of biological data. It is an interdisciplinary field,
            which harnesses computer science, mathematics, physics, and biology
          </p>
        </div>
        <div className="text-center p-10 m-6 text-4xl  font-serif text-black bg-blue-600 rounded-lg  mb-2 w-[550px] min-h-[500px]">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-red-900"> V</span>
          </h1>
          <p className="text-black font-serif text-lg mt-3 text-justify font-extrabold  ">
            Bio-361: Bioinformatics with Python.Bioinformatics is defined as the
            application of tools of computation and analysis to the capture and
            interpretation of biological data. It is an interdisciplinary field,
            which harnesses computer science, mathematics, physics, and biology
          </p>
        </div>
      </div>{" "}
      <div className="mt-20">
        <h1 className=" text-center p-15  text-4xl   font-serif text-black underline decoration-double ">
          6- Network Programmability and Automation Specialization
        </h1>
        <p className="text-black font-serif text-lg mt-5 text-justify  px-8  ">
          More than ever, network engineers are finding it challenging to
          complete their duties entirely manually. Network automation is now
          crucial due to new protocols, technologies, delivery models, and the
          requirement for enterprises to become more adaptable and agile. This
          course teaches network engineers how to automate systems with code
          using a variety of technologies and tools, including Linux, Python,
          APIs, and Git.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap ">
        <div className="text-center p-10 m-5 text-4xl  font-serif text-white bg-neutral-800 rounded-lg  mb-2 w-[550px] min-h-[500px]">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-yellow-400"> IV</span>
          </h1>
          <p className="text-white font-serif text-lg mt-3 text-justify font-extrabold   ">
            NPA-351: CCNA(Cisco Certified Network Ass.) 200-301
            Certification.Network programmability is a set of tools to deploy,
            manage, and troubleshoot a network device. A programmability-enabled
            network is driven by intelligent software that can deal with a
            single node or a group of nodes or even or address the network a
            single unified element. The tool chain uses application programming
            interfaces or APIs, which serve as the interface to the device or
            controller. The tool chain also utilizes software that uses the API
            to gather data or intelligently build configurations.
          </p>
        </div>
        <div className="text-center p-10 m-6 text-4xl  font-serif text-white bg-neutral-900 rounded-lg  mb-2 w-[550px] min-h-[500px]">
          <h1 className="underline decoration-double">
            Quarter<span className="text-8xl text-blue-600"> V</span>
          </h1>
          <p className="text-white font-serif text-lg mt-3 text-justify   font-extrabold   ">
            NPA-361: Network Programmability and Automation.Network
            programmability is a set of tools to deploy, manage, and
            troubleshoot a network device. A programmability-enabled network is
            driven by intelligent software that can deal with a single node or a
            group of nodes or even or address the network a single unified
            element. The tool chain uses application programming interfaces or
            APIs, which serve as the interface to the device or controller. The
            tool chain also utilizes software that uses the API to gather data
            or intelligently build configurations.
          </p>
        </div>
      </div>
    </div>

  );
}
