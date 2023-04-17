import React from "react";
import Image from "next/image";
import png from "../../../public/logo2.webp";
import png2 from "../../../public/mte.png";
import png3 from "../../../public/block.jpg";
import png4 from "../../../public/ts2.png";
import png5 from "../../../public/Js.png";
import png6 from "../../../public/next.png";
import png7 from "../../../public/Ai2.png";
import png8 from "../../../public/cloud.jpg";
import png9 from "../../../public/Am2.png";
import png10 from "../../../public/DNA.jpg";
import png11 from "../../../public/Bio.png";
import png12 from "../../../public/IOT.png";
import png13 from "../../../public/Network.jpg";
import png14 from "../../../public/Automation.jpg";
import png15 from "../../../public/bc1.webp";
import png16 from "../../../public/md1.webp";
export default function page() {
  return (
    <div className="justify-center text-black ">
      <div className="justify-center p-8 sm:p-32">
        <h1 className="underline decoration-double text-justify font-serif text-4xl  text-black  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Web 1.0 and{" "}
          <span className="text-black text-6xl font-extrabold hover:overline">
            Web 2.0
          </span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice ">
          Web 1.0 and Web 2.0 refer to eras in the history of the World Wide Web
          as it evolved through various technologies and formats. Web 1.0 refers
          roughly to the period from 1989 to 2004, where most sites consisted of
          static pages, and the vast majority of users were consumers, not
          producers of content. Web 2.0 is based around the idea of the web as
          platform , and centers on user-created content uploaded to forums,
          social media and networking services, blogs, and wikis, among other
          services. Web 2.0 is generally considered to have begun around 2004
          and continues to the current day.
        </p>
        <div>
          <Image src={png16} alt="um"></Image>
        </div>
        <button className="text-black bg-blue-400 font-bold font-serif mt-10 rounded-full p-6 mb-4">
          Learn More
        </button>
      </div>  

        <div className="justify-center px-8 sm:px-32 bg-neutral-900 mt-15 flex flex-col sm:flex-row items-center">
        <div className="basis-1/2">
        <h1 className="underline decoration-double text-justify font-serif text-6xl  text-white  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Web <span className="text-blue-800 text-6xl hover:overline">3.0</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice text-white">
          Web3 is distinct from Tim Berners-Lee 1999 concept for a Semantic Web.
          In 2006, Berners-Lee described the Semantic Web as a component of Web
          3.0, which is different from the meaning of Web3 in blockchain
          contexts. The term Web3 was coined by Polkadot founder and Ethereum
          co-founder Gavin Wood in 2014, referring to a decentralized online
          ecosystem based on blockchain. In 2021, the idea of Web3 gained
          popularity. Particular interest spiked toward the end of 2021, largely
          due to interest from cryptocurrency enthusiasts and investments from
          high-profile technologists and companies.Executives from venture
          capital firm Andreessen Horowitz traveled to Washington, D.C., in
          October 2021 to lobby for the idea as a potential solution to
          questions about regulation of the web, with which policymakers have
          been grappling.
        </p>
        </div>
        <div className="basis-1/2 mt-16 ml-5">
          <Image src={png} alt="Web 3.0"></Image>
        </div>

       
      </div>
      <div className="justify-center px-8 sm:px-32 bg-yellow-600 mt-15 flex flex-col sm:flex-row items-center">
      <div className="basis-1/2">
        <h1 className="underline decoration-double text-justify font-serif text-5xl  text-white  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Meta<span className="text-6xl text-black ">verse</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice hover:animate-pulse ">
          In science fiction, the &apos;metaverse&apos; is a hypothetical
          iteration of the Internet as a single, universal, and immersive
          virtual world that is facilitated by the use of virtual reality (VR)
          and augmented reality (AR) headsets. In colloquial usage, a
          &apos;metaverse&apos; is a network of 3D virtual worlds focused on
          social connection. The term &apos;metaverse&apos; originated in the
          1992 science fiction novel Snow Crash as a portmanteau of
          &apos;meta&apos; and &apos;universe. Metaverse development is often
          linked to advancing virtual reality technology due to the increasing
          demands for immersion. Recent interest in metaverse development is
          influenced by Web3, a concept for a decentralized iteration of the
          internet. Web3 and metaverse have been used as buzzwords to exaggerate
          the development progress of various related technologies and projects
          for public relations purposes. Information privacy, user addiction,
          and user safety are concerns within the metaverse, stemming from
          challenges facing the social media and video game industries as a
          whole.
        </p>
        </div>
        <div className="basis-1/2 mt-16 ml-5">
          <Image src={png2} alt="Metaverse"></Image>
        </div>
      </div>

      <div className="justify-center px-8 sm:px-32 bg-cover bg-slate-600 flex flex-col sm:flex-row items-center ">
        <div className="basis-1/2">
        <h1 className="underline decoration-double text-justify font-serif text-5xl  text-white  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Block<span className="text-6xl font-serif hover:overline">Chain</span>
        </h1>
        
          <p className="text-xl font-mono text-justify p-9px decoration-slice hover:animate-pulse">
            {" "}
            Blockchains are typically managed by a peer-to-peer (P2P) computer
            network for use as a public distributed ledger, where nodes
            collectively adhere to a consensus algorithm protocol to add and
            validate new transaction blocks. Although blockchain records are not
            unalterable, since blockchain forks are possible, blockchains may be
            considered secure by design and exemplify a distributed computing
            system with high Byzantine fault tolerance. 
          </p>
          </div>
      
          <div className="basis-1/2 mt-16 ml-5">
            <Image src={png3} alt="Blockchain"></Image>
          </div>
          
     
      
      </div>
      <div className="justify-center px-8 sm:px-32 bg-green-500 flex flex-col sm:flex-row items-center ">
       <div className="basis-1/2">
        <h1 className="underline decoration-double text-justify font-serif text-6xl  text-black  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Type{" "}
          <span className="text-6xl font-mono hover:overline text">Script</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice text-black">
          {" "}
          TypeScript may be used to develop JavaScript applications for both
          client-side and server-side execution (as with Node.js or Deno).
          Multiple options are available for transpilation. The default
          TypeScript Compiler can be used, or the Babel compiler can be invoked
          to convert TypeScript to JavaScript. TypeScript supports definition
          files that can contain type information of existing JavaScript
          libraries, much like C++ header files can describe the structure of
          existing object files. 
        </p>
        </div>
        <div className="basis-1/2 mt-16 ml-5">
          <Image src={png4} alt="TypeScript"></Image>
        </div>
       
      </div>
      <div className=" bg-slate-700 justify-center px-8 sm:px-32  flex flex-col sm:flex-row items-center">
       <div className="basis-1/2">
        <h1 className="underline decoration-double text-justify font-serif text-5xl  text-black  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 hover:animate-bounce ">
          JavaScript
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice text-black">
          JavaScript is a high-level, often just-in-time compiled language that
          conforms to the ECMAScript standard. It has dynamic typing,
          prototype-based object-orientation, and first-class functions. It is
          multi-paradigm, supporting event-driven, functional, and imperative
          programming styles. It has application programming interfaces (APIs)
          for working with text, dates, regular expressions, standard data
          structures, and the Document Object Model (DOM). 
        </p>
        </div>
        <div className="basis-1/2 mt-16 ml-5">
          <Image src={png5} alt="Js"></Image>
        </div>
      
      </div>
      <div className="justify-center px-8 sm:px-32 bg-black mt-10 flex flex-col sm:flex-row items-center ">
         <div className="basis-1/2">
         <h1 className="  underline decoration-double text-justify font-serif text-5xl  text-white  border-l-yellow-300 border-l-[8px] mb-8 mt-12 p-3 ">
          Next.Js
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice text-white  ">
          {" "}
          Next.js is an open-source web development framework created by Vercel
          enabling React-based web applications with server-side rendering and
          generating static websites.
        </p>
        <p className="text-xl font-mono text-justify p-9px decoration-slice text-white">
          {" "}
          React documentation mentions Next.js among &apos;Recommended
          Toolchains&apos;advising it to developers as a solution when
          &apos;Building a server-rendered website with Node.js&apos;. Where
          traditional React apps can only render their content in the
          client-side browser, Next.js extends this functionality to include
          applications rendered on the server-side. The copyright and trademarks
          for Next.js are owned by Vercel, which also maintains and leads its
          open-source development.
        </p>
        </div>
        <div className="basis-1/2 ">
          <Image src={png6} alt="Next"></Image>
        </div>
      
      </div>
      <div className="justify-center px-8 sm:px-32 bg-white flex flex-col sm:flex-row items-center">
        <div className="basis-1/2 mt-16 ml-5">
         <h1 className="underline decoration-double text-justify font-serif text-5xl  text-black  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Artificial <span className="text-blue-600">Intelligence</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice text-black">
          {" "}
          Artificial intelligence (AI) is intelligence—perceiving, synthesizing,
          and inferring information—demonstrated by machines, as opposed to
          intelligence displayed by non-human animals and humans. Example tasks
          in which this is done include speech recognition, computer vision,
          translation between (natural) languages, as well as other mappings of
          inputs.
        </p>
        <p className="text-xl font-mono text-black text-justify p-9px decoration-slice">
          AI applications include advanced web search engines (e.g., Google
          Search), recommendation systems (used by YouTube, Amazon and Netflix),
          understanding human speech (such as Siri and Alexa), self-driving cars
          (e.g., Waymo), generative or creative tools (ChatGPT and AI art),
          automated decision-making and competing at the highest level in
          strategic game systems (such as chess and Go).
        </p>
        </div>
        <div className="basis-1/2 mt-16 ml-5">
          <Image src={png7} alt="AI"></Image>
        </div>
      
      </div>
      <div className="justify-center px-8 sm:px-32 bg-lime-200 ">
       
         <h1 className="underline decoration-double text-justify font-serif text-4xl  text-black  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Deep<span className="text-red-500"> Learning Specialiazation</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice">
          Deep learning is part of a broader family of machine learning methods
          based on artificial neural networks with representation learning.
          Learning can be supervised, semi-supervised or unsupervised.
        </p>
      
      </div>
      <div className="justify-center px-8 sm:px-32 bg-emerald-700  flex flex-col sm:flex-row items-center">
       <div className="basis-1/2 ">
        <h1 className="underline decoration-double text-justify font-serif text-5xl  text-white  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Cloud <span className="text-cyan-400">Native Computing</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice">
          {" "}
          Cloud native computing is an approach in software development that
          utilizes cloud computing to &apos;build and run scalable applications
          in modern, dynamic environments such as public, private, and hybrid
          clouds&apos;. These technologies such as containers, microservices,
          serverless functions, cloud native processors and immutable
          infrastructure, deployed via declarative code are common elements of
          this architectural style.Cloud native technologies focus on minimizing
          users&apos; operational burden.
        </p>
        </div>
        <div className="basis-1/2 mt-10 ml-5 mb-5">
          <Image src={png8} alt="Cloud Native"></Image>
        </div>
      
      </div>
      <div className="justify-center px-8 sm:px-32 bg-indigo-600 flex flex-col sm:flex-row items-center">
       <div className="basis-1/2 mt-10 ml-5">
        <h1 className="underline decoration-double text-justify font-serif text-5xl  text-white  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Ambient <span className="text-amber-800">Computing</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice">
          {" "}
          Ambient computing is basically an evolution of interconnected concepts
          such as artificial intelligence, cognitive processing, and internet of
          things (IoT). It is considered as one of the incredible developments
          that has occurred in the computing space, where machines and human can
          work together seamlessly to create a better working environment.
        </p>
        </div>
        <div className="basis-1/2 mt-10 ml-5 mb-5">
          <Image src={png9} alt="Ac"></Image>
        </div>
      
      </div>
      <div className="justify-center px-8 sm:px-32 bg-teal-600 flex flex-col sm:flex-row items-center">
       <div className="basis-1/2">
        <h1 className="underline decoration-double text-justify font-serif text-5xl  text-white  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Bio <span className="text-gray-700">Informatics</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice">
          {" "}
          Bioinformatics is an interdisciplinary field that develops methods and
          software tools for understanding biological data, in particular when
          the data sets are large and complex. As an interdisciplinary field of
          science, bioinformatics combines biology, chemistry, physics, computer
          science, information engineering, mathematics and statistics to
          analyze and interpret the biological data. Bioinformatics has been
          used for in silico analyses of biological queries using computational
          and statistical techniques.
        </p>
        </div>
        <div className="basis-1/2 mt-10 ml-5 mb-5">
          <Image src={png10} alt="Bio"></Image>
        </div>
      
      </div>
      <div className="justify-center px-8 sm:px-32 flex flex-col sm:flex-row items-center">
       <div className="basis-1/2">
        <h1 className="underline decoration-double text-justify font-serif text-5xl  text-black  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          <span className="text-black">Genomics</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice">
          {" "}
          Genomics is an interdisciplinary field of biology focusing on the
          structure, function, evolution, mapping, and editing of genomes. A
          genome is an organism&apos;s complete set of DNA, including all of its
          genes as well as its hierarchical, three-dimensional structural
          configuration. In contrast to genetics, which refers to the study of
          individual genes and their roles in inheritance, genomics aims at the
          collective characterization and quantification of all of an
          organism&apos;s genes, their interrelations and influence on the
          organism. 
        </p>
        </div>
        <div className="basis-1/2 mt-10 ml-5">
          <Image src={png11} alt="Genom"></Image>
        </div>
      
      </div>
      <div className="justify-center px-8 sm:px-32 bg-sky-800 flex flex-col sm:flex-row items-center">
       <div className="basis-1/2">
        <h1 className="underline decoration-double text-justify font-serif text-4xl  text-white  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Internet <span className="text-pink-200">of Things (IoT)</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice">
          The Internet of things (IoT) describes physical objects (or groups of
          such objects) with sensors, processing ability, software and other
          technologies that connect and exchange data with other devices and
          systems over the Internet or other communications networks. Internet
          of things has been considered a misnomer because devices do not need
          to be connected to the public internet, they only need to be connected
          to a network, and be individually addressable.
        </p>
        </div>
        <div className="basis-1/2 mt-10 ml-5 mb-5"> 
          <Image src={png12} alt="Iot"></Image>
        </div>
      
      </div>
      <div className="justify-center px-8 sm:px-32 flex flex-col sm:flex-row items-center">
       <div className="basis-1/2">
        <h1 className="underline decoration-double text-justify font-serif text-4xl  text-black  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Network <span className="text-green-800">Programmibility</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice">
          {" "}
          Network programmability is the use of software to deploy, manage, and
          troubleshoot network elements. A programmable network is driven by an
          intelligent software stack that can take action based on business
          requests or network events. Let&apos;s discuss how network
          programmability can help communication service providers adapt to new
          trends including internet of things (IoT), 5G and edge computing.
        </p>
        </div>
        <div className="basis-1/2 mt-10 ml-5 mb-5">
          <Image src={png13} alt="Np"></Image>
        </div>
      
      </div>
      <div className="justify-center px-8 sm:px-32 bg-neutral-900 flex flex-col sm:flex-row items-center">
       <div className="basis-1/2">
        <h1 className="underline decoration-double text-justify font-serif text-4xl  text-white  border-l-yellow-300 border-l-[8px] mb-8 mt-8 px-3 ">
          Automation <span className="text-orange-500">Specialization</span>
        </h1>
        <p className="text-xl font-mono text-justify p-9px decoration-slice text-white">
          {" "}
          Automation describes a wide range of technologies that reduce human
          intervention in processes, namely by predetermining decision criteria,
          subprocess relationships, and related actions, as well as embodying
          those predeterminations in machines. Automation has been achieved by
          various means including mechanical, hydraulic, pneumatic, electrical,
          electronic devices, and computers, usually in combination. Complicated
          systems, such as modern factories, airplanes, and ships typically use
          combinations of all of these techniques. The benefit of automation
          includes labor savings, reducing waste, savings in electricity costs,
          savings in material costs, and improvements to quality, accuracy, and
          precision.
        </p>
        </div>
        <div className="basis-1/2 mt-10 ml-5">
          <Image src={png14} alt="AS"></Image>
        </div>
      
      </div>
    </div>
  );
}
