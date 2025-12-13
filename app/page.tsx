import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal, Cpu, Server, PlayCircle } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-teal-300 selection:text-teal-900 font-sans">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-teal-400">Lathashri K H</h1>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition">About</a>
            <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">
        
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-teal-400 font-mono text-sm tracking-wide">Hi, my name is</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight">
              Lathashri K H.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 tracking-tight">
              I build things for the web.
            </h2>
          </div>
          <p className="max-w-xl text-slate-400 text-lg leading-relaxed">
            I am a Software Developer and Aspiring Full Stack Developer passionate about building meaningful web applications and exploring Machine Learning to solve real-world problems.
          </p>
          <div className="flex gap-4 pt-4">
             <a href="mailto:Example@gmil.com" className="px-6 py-3 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition">
               Contact Me
             </a>
             <a href="https://github.com/latha7" target="_blank" rel="noreferrer" className="px-6 py-3 bg-teal-400 text-slate-900 rounded font-bold hover:bg-teal-300 transition">
               Check GitHub
             </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-teal-400">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am a Computer Science Engineering student with a strong interest in <span className="text-teal-400">Full Stack Web Development</span> and <span className="text-teal-400">Machine Learning</span>. I enjoy building practical, real-world applications that help me strengthen my problem-solving and technical skills.
              </p>
              <p>
                Currently, I am focused on improving my backend development skills using JavaScript while continuously learning and experimenting with new technologies.
              </p>
            </div>
            {/* Simple Tech Stack Highlight */}
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
               <h3 className="text-slate-100 font-semibold mb-4">Quick Highlights</h3>
               <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400 font-mono">
                 <li className="flex items-center gap-2"><Code2 size={14} className="text-teal-400"/> React.js</li>
                 <li className="flex items-center gap-2"><Terminal size={14} className="text-teal-400"/> Node.js</li>
                 <li className="flex items-center gap-2"><Database size={14} className="text-teal-400"/> MongoDB</li>
                 <li className="flex items-center gap-2"><Cpu size={14} className="text-teal-400"/> Machine Learning</li>
                 <li className="flex items-center gap-2"><Server size={14} className="text-teal-400"/> AWS & Azure</li>
                 <li className="flex items-center gap-2"><Code2 size={14} className="text-teal-400"/> Java & Python</li>
               </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-teal-400">02.</span> Experience
          </h2>
          <div className="border-l-2 border-slate-800 ml-3 pl-8 space-y-12">
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-teal-400"></span>
              <h3 className="text-xl font-bold text-slate-100">Software Developer Intern</h3>
              <p className="text-teal-400 font-mono text-sm mb-4">Unitegrid Infocomm | 1 Month</p>
              <ul className="space-y-2 text-slate-400 list-disc pl-4 text-sm">
                <li>Worked on software development tasks involving coding, debugging, and testing applications.</li>
                <li>Assisted in developing and maintaining application features while collaborating with the development team.</li>
                <li>Gained hands-on experience in real-world software development practices and project workflows.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-teal-400">03.</span> Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Programming" skills={["Java", "Python", "C", "JavaScript"]} />
            <SkillCard title="Frontend" skills={["React.js", "HTML", "CSS", "Vite", "Figma"]} />
            <SkillCard title="Backend" skills={["Node.js", "Express.js", "Spring Boot"]} />
            <SkillCard title="Database" skills={["MySQL", "MongoDB", "SQL"]} />
            <SkillCard title="DevOps & Cloud" skills={["AWS", "Azure", "Linux", "Netlify", "Git/GitHub"]} />
            <SkillCard title="Other" skills={["DSA", "Machine Learning", "API Integration", "Problem Solving"]} />
          </div>
        </section>

        {/* Projects Section */}
<section id="projects" className="space-y-8 scroll-mt-24">
  <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
    <span className="text-teal-400">04.</span> Projects
  </h2>

  <div className="grid gap-8">
    <ProjectCard 
      title="Mental Health Web Application"
      description="A full-fledged mental health support web application designed to help users manage stress and emotional well-being. Includes AI chatbot, music therapy, and doctor consultation modules."
      tags={["Node.js", "Express", "MySQL", "Azure", "AI"]}
      link="YOUR_GITHUB_LINK_HERE"
      videoLink="https://drive.google.com/file/d/1jriNssdilFk_Wle1_zZvSdmDuc_4xuU6/view?usp=drive_link" 
    />
    <ProjectCard 
      title="AI Talking Doll (Virtual Doctor)"
      description="An AI-powered virtual doctor feature designed for users who prefer not to talk to real people. It provides mental health guidance through conversational interaction using AI-based responses."
      tags={["JavaScript", "AI APIs", "Azure Services"]}
      link="YOUR_GITHUB_LINK_HERE"
      videoLink="YOUR_YOUTUBE_OR_DRIVE_LINK_HERE"
    />
     <ProjectCard 
      title="To-Do List Web Application"
      description="A simple and interactive to-do list application that allows users to add, edit, and delete tasks, helping them manage daily activities efficiently."
      tags={["HTML", "CSS", "JavaScript"]}
      link="YOUR_GITHUB_LINK_HERE"
      // If a project doesn't have a video, just leave the videoLink line out!
    />
  </div>
</section>

        {/* Contact Section */}
        <section id="contact" className="max-w-2xl mx-auto text-center space-y-6 pt-20">
          <h2 className="text-teal-400 font-mono">05. What&apos;s Next?</h2>
          <h1 className="text-4xl font-bold text-slate-100">Get In Touch</h1>
          <p className="text-slate-400 text-lg">
            I am currently looking for new opportunities as a Full Stack Developer. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <a href="mailto:Example@gmil.com" className="inline-block px-8 py-4 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition mt-4">
            Say Hello
          </a>
          
          <div className="flex justify-center gap-6 pt-12">
            <a href="https://github.com/latha7" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition"><Github /></a>
            <a href="https://linkedin.com/in/lathashri1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition"><Linkedin /></a>
            <a href="mailto:Example@gmil.com" className="text-slate-400 hover:text-teal-400 transition"><Mail /></a>
          </div>
          <p className="text-slate-600 text-sm pt-8 pb-4">Designed & Built by Lathashri K H</p>
        </section>

      </main>
    </div>
  );
}

// Helper Components to keep the code clean
function SkillCard({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className="bg-slate-900 p-6 rounded hover:-translate-y-1 transition duration-300 border border-slate-800 hover:border-teal-400/30">
      <h3 className="text-slate-100 font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-slate-800 text-teal-400 text-xs font-mono rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tags, link, videoLink }: { title: string, description: string, tags: string[], link: string, videoLink?: string }) {
  return (
    <div className="group relative bg-slate-900 p-8 rounded-lg border border-slate-800 transition hover:border-teal-400/30">
      
      {/* Top Right Icons */}
      <div className="absolute top-8 right-8 flex gap-4">
        {/* Code/Live Link Icon */}
        <a href={link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition" title="View Code/Project">
          <ExternalLink size={22}/>
        </a>
      </div>

      <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition">
        <a href={link} target="_blank" rel="noreferrer">{title}</a>
      </h3>
      
      <p className="text-slate-400 mb-6 max-w-2xl">{description}</p>
      
      <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-500 mb-6">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {/* New Watch Demo Button */}
      {videoLink && (
        <a 
          href={videoLink} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:underline hover:text-teal-300 transition"
        >
          <PlayCircle size={18} />
          Watch Demo Video
        </a>
      )}
    </div>
  );
}