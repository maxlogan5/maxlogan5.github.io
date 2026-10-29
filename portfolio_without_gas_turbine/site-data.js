/*
  PORTFOLIO CONTENT FILE
  -----------------------------------------------------------
  You can customize your website by changing the TEXT below.
  Keep the quote marks and commas around the text.

  TO ADD A PHOTO:
  1. Place your image in assets/images/ (for example axotomy.jpg).
  2. Change a project's image: "" to image: "assets/images/axotomy.jpg".

  The sample project descriptions below are starter text. Review and
  update them to accurately reflect your own contribution and results.
*/

window.PORTFOLIO = {
  name: "Maxwell Serna",
  initials: "MS",
  eyebrow: "UNC Charlotte · Mechanical engineering · Biomedical focus",
  headline: "Curiosity put to work.",
  intro: "I’m Maxwell Serna, a mechanical engineering student at UNC Charlotte concentrating in biomedical engineering. I enjoy turning ideas into practical solutions through research, mechanical design, prototyping, and hands-on projects.",
  about: "I’ve always enjoyed understanding how things work and finding ways to make them better. My mechanical engineering coursework and projects have introduced me to biomedical research, CAD-based design, mechatronics, and hands-on machining. From investigating laser axotomy to developing a robotic gripping mechanism, I enjoy the process of solving problems, testing ideas, and improving a design. Outside school, I spend time 3D printing, building and troubleshooting PCs, and learning about circuits and microcontrollers such as ESP32 and Arduino so I can incorporate electronics into future projects. I created this site to share what I build, how I approach challenges, and what I learn along the way.",
  location: "North Carolina",
  email: "", // Example: "yourname@example.com". Empty hides the email button.
  linkedin: "https://www.linkedin.com/in/mserna4/", // LinkedIn profile listed on résumé.
  github: "https://github.com/maxlogan5", // Public GitHub profile
  resume: "", // After adding assets/resume.pdf, use "assets/resume.pdf"
  focusAreas: ["Biomedical Research", "3D Printing & Prototyping", "PC Building & Troubleshooting", "Electronics & Microcontrollers"],

  projects: [
    {
      id: "laser-axotomy",
      title: "Laser Axotomy & Fluorescence Imaging",
      category: "Research",
      type: "Featured case study",
      featured: true,
      year: "2026",
      number: "01",
      summary: "Investigating laser-based axon injury in microfluidic neuron chambers and evaluating fluorescence-based responses.",
      tags: ["Biomedical research", "Confocal imaging", "Microfluidics"],
      image: "", // Example: "assets/images/axotomy.jpg"
      visual: "research",
      status: "Research in progress",
      overview: "This senior design research explores reproducible laser axotomy in PDMS microfluidic neuron chambers and the subsequent imaging of cellular responses.",
      role: "Experimental work, microscopy, troubleshooting, and analysis as part of a research team.",
      sections: [
        { heading: "Engineering objective", text: "Develop and assess a laser-based procedure for axon injury while maintaining a reliable experimental and imaging workflow." },
        { heading: "Approach", text: "Use a Leica STELLARIS 8 FALCON confocal microscope, a 405 nm laser, and fluorescence imaging techniques. Examine the role of experimental parameters and interpretation of CellROX Deep Red signal after treatment." },
        { heading: "Challenges and iterations", text: "Early trials prompted further investigation into how laser settings, sample conditions, and fluorescence behavior affect interpretation. Documenting unexpected results is part of the research process." },
        { heading: "Current status", text: "Work is ongoing. Add validated results, images, and your exact responsibilities here as the study progresses." }
      ]
    },
    {
      id: "gridfinity",
      title: "Modular Drawer Organization",
      category: "Fabrication",
      type: "Project showcase",
      featured: true,
      year: "2026",
      number: "02",
      summary: "Planning, fitting, and 3D printing a modular Gridfinity drawer organization system around real-world dimensions.",
      tags: ["3D printing", "FDM", "Design for fit"],
      image: "",
      visual: "fabrication",
      status: "Personal project",
      overview: "A practical organization project based on a modular Gridfinity layout, designed around drawer dimensions and printer build-volume constraints.",
      role: "Layout planning, print preparation, material selection, and troubleshooting.",
      sections: [
        { heading: "Problem", text: "Make better use of a drawer with modular trays and baseplates rather than an inflexible, one-size-fits-all organizer." },
        { heading: "Process", text: "Measure the available space, plan modular pieces, and adapt parts for a Bambu Lab P1S build plate. Evaluate print orientation, fit, material use, and assembly." },
        { heading: "What I learned", text: "Small dimensional decisions matter in real-world fit. Add photos, lessons from test prints, and the final layout here." }
      ]
    },
    {
      id: "functional-prints",
      title: "Functional 3D Printing Experiments",
      category: "Fabrication",
      type: "Project showcase",
      featured: false,
      year: "2026",
      number: "03",
      summary: "Iterating print settings, materials, supports, and geometry to turn digital models into usable physical parts.",
      tags: ["Bambu Lab P1S", "Materials", "Rapid prototyping"],
      image: "",
      visual: "fabrication",
      status: "Ongoing personal projects",
      overview: "A growing collection of small-scale prints and prototyping experiments, including organizers, masks, and functional components.",
      role: "Print preparation, material testing, orientation, and troubleshooting.",
      sections: [
        { heading: "Focus", text: "Explore the tradeoffs between surface quality, strength, print time, support removal, and dimensional accuracy." },
        { heading: "Documentation", text: "Add before-and-after photos and a few examples of settings that made a meaningful difference." }
      ]
    },
    {
      id: "pc-builds",
      title: "Custom PC Builds & Troubleshooting",
      category: "Personal",
      type: "Project showcase",
      featured: false,
      year: "2026",
      number: "04",
      summary: "Component selection, assembly, cooling decisions, performance tuning, and resolving hardware and software setup issues.",
      tags: ["Hardware", "Systems integration", "Troubleshooting"],
      image: "",
      visual: "personal",
      status: "Personal projects",
      overview: "Building and maintaining desktop computers provides hands-on experience with component integration, thermal considerations, and diagnosis of unexpected behavior.",
      role: "Hardware selection, assembly, configuration, and testing.",
      sections: [
        { heading: "Hands-on work", text: "Research parts, verify compatibility, assemble components, and configure systems for intended workloads." },
        { heading: "Troubleshooting", text: "Investigate performance bottlenecks, connectivity issues, drivers, thermals, and system stability." },
        { heading: "Add evidence", text: "Show build photos, component lists, and problems you diagnosed with a concise explanation of the outcome." }
      ]
    },
    {
      id: "future-project",
      title: "Your Next Project",
      category: "Personal",
      type: "Placeholder",
      featured: false,
      year: "Coming soon",
      number: "05",
      summary: "Reserve a space for the next design, fabrication, analysis, or side project you want to highlight.",
      tags: ["More to come"],
      image: "",
      visual: "future",
      status: "Coming soon",
      overview: "You can replace this placeholder with a project as soon as you're ready to share it.",
      role: "Add your contribution here.",
      sections: [
        { heading: "Project description", text: "What problem are you solving, and what makes it interesting?" }
      ]
    }
  ]
};
