import { Link } from "react-router-dom";
import { Terminal, Braces, Users, Zap, Lightbulb, Github } from "lucide-react";

const HOME_HERO_STYLES = `
  @keyframes hero-up { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
  .hha1{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .1s both}
  .hha2{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .22s both}
  .hha3{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .34s both}
  .hha4{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .46s both}
`;

import aerialSsb from "../assets/aerial-ssb 1.png";
import cssLogo from "../assets/logo_for_web_2_2025.png";
import HomeImage from "../assets/redesignPhotos/HomeImage.png";
import HomeImage2 from "../assets/redesignPhotos/HomeImage2.png";

export const Home = () => {
  return (
    <div>
      <style>{HOME_HERO_STYLES}</style>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Campus Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aerialSsb}
            alt="Cal Poly Pomona campus"
            className="w-full h-full object-cover opacity-65"
          />
        </div>
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#34F5A3 1px, transparent 1px), linear-gradient(90deg, #34F5A3 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              opacity: 0.03,
            }}
          ></div>
        </div>

        {/* Green Gradient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#34F5A3]/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#34F5A3]/5 rounded-full blur-[100px]"></div>

        {/* Code Decorations */}
        <div className="absolute top-40 left-10 hidden lg:block opacity-30">
          <div className="font-mono text-xs text-[#34F5A3]">
            <div>const student = {"{"}</div>
            <div className="ml-4">passion: "coding",</div>
            <div className="ml-4">community: "CSS"</div>
            <div>{"}"};</div>
          </div>
        </div>

        <div className="absolute bottom-20 right-10 hidden lg:block opacity-30">
          <div className="font-mono text-xs text-[#34F5A3]">
            <div>// Build amazing things</div>
            <div>while(learning) {"{"}</div>
            <div className="ml-4">grow();</div>
            <div>{"}"}</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hha1 inline-flex items-center gap-2 px-4 py-2 bg-[#34F5A3]/10 border border-[#34F5A3]/20 rounded-full mb-8">
              <Terminal className="w-6 h-6 text-[#34F5A3]" />
              <span className="text-sm text-[#34F5A3] font-mono">
                ~/cpp/css
              </span>
            </div>

            <div className="hha2 inline-flex items-center gap-3">
              <img
                src={cssLogo}
                alt="CSS Logo"
                className="w-18 h-18 object-contain translate-x-[15px] translate-y-[17px]"
              />
            </div>

            <h1 className="hha2 text-5xl md:text-7xl mb-6 tracking-tight font-semibold">
              Computer Science
              <br />
              <span className="text-[#34F5A3]">Society</span>
            </h1>

            <p className="hha3 text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              CPP's student developer community. Learn, code, and create amazing
              projects together. No experience? No problem! 🚀
            </p>

            <div className="hha4 flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <Link
                to="/events"
                className="group px-10 py-6 bg-[#34F5A3] text-black rounded-lg hover:bg-[#2de091] hover:shadow-lg hover:shadow-[#34F5A3]/20 transition-all font-semibold"
              >
                <span className="flex items-center gap-2 justify-center">
                  View Events
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>

              <Link
                to="/contact"
                className="group px-10 py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-[#34F5A3]/30 transition-all font-semibold"
              >
                <span className="flex items-center gap-2 justify-center">
                  <Braces className="w-5 h-5 text-[#34F5A3]" />
                  Join the Club
                </span>
              </Link>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-[#121212] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#34F5A3]/10 border border-[#34F5A3]/20 rounded-lg mb-4">
              <span className="text-sm text-[#34F5A3] font-mono">
                &#123; who_we_are &#125;
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              CPP's Developer Community
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              CSS is the oldest computer science organization at Cal Poly
              Pomona. We are one of the largest clubs that host events regularly
              and advise our members on the next path to success. 👨‍💻 Our motto
              is "Connect passion to empathy". 💚
            </p>
          </div>
          <div className="flex gap-8 justify-center flex-wrap">
            <img
              src={HomeImage}
              alt="Home page event"
              className="w-full max-w-[560px] h-[360px] bject-cover rounded-xl
              order border-white/10
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              brightness-95 contrast-110
              transition-transform duration-500 hover:scale-[1.02]"
            />
            <img
              src={HomeImage2}
              alt="Home page event2"
              className="w-full max-w-[560px] h-[360px] bject-cover rounded-xl
              order border-white/10
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              brightness-95 contrast-110
              transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#34F5A3]/10 border border-[#34F5A3]/20 rounded-lg mb-4">
              <span className="text-sm text-[#34F5A3] font-mono">
                {"<our_values />"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              What We&apos;re All About
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="group relative rounded-2xl p-8 border border-[#34F5A3]/15 hover:border-[#34F5A3]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#34F5A3]/10 transition-all duration-300 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(52,245,163,0.10) 0%, rgba(52,245,163,0.03) 50%, rgba(10,10,10,1) 100%)",
              }}
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#34F5A3]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-14 h-14 bg-[#34F5A3]/55 border border-[#34F5A3]/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#34F5A3]/50 group-hover:scale-110 transition-all duration-300">
                <Users className="w-7 h-7 text-[#34F5A3]" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                Connectivity
                <span className="text-lg">🤝</span>
              </h3>
              <div className="w-8 h-0.5 bg-[#34F5A3]/40 rounded-full mb-4 group-hover:w-16 transition-all duration-300" />
              <p className="text-gray-400 leading-relaxed">
                Connectivity, both socially and technically, is something our
                club focuses on as we prioritize opportunities for members to
                connect and build networks with professionals and peers.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="group relative rounded-2xl p-8 border border-[#34F5A3]/15 hover:border-[#34F5A3]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#34F5A3]/10 transition-all duration-300 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(52,245,163,0.10) 0%, rgba(52,245,163,0.03) 50%, rgba(10,10,10,1) 100%)",
              }}
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#34F5A3]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-14 h-14 bg-[#34F5A3]/55 border border-[#34F5A3]/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#34F5A3]/50 group-hover:scale-110 transition-all duration-300">
                <Zap className="w-7 h-7 text-[#34F5A3]" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                Development
                <span className="text-lg">⚡</span>
              </h3>
              <div className="w-12 h-0.5 bg-[#34F5A3]/40 rounded-full mb-4 group-hover:w-16 transition-all duration-300" />
              <p className="text-gray-400 leading-relaxed">
                We aim to spread knowledge through workshops, activities, and
                experiences that help members improve both technical and
                non-technical skills.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="group relative rounded-2xl p-8 border border-[#34F5A3]/15 hover:border-[#34F5A3]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#34F5A3]/10 transition-all duration-300 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(52,245,163,0.10) 0%, rgba(52,245,163,0.03) 50%, rgba(10,10,10,1) 100%)",
              }}
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#34F5A3]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-14 h-14 bg-[#34F5A3]/55 border border-[#34F5A3]/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#34F5A3]/50 group-hover:scale-110 transition-all duration-300">
                <Lightbulb className="w-7 h-7 text-[#34F5A3]" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                Innovation
                <span className="text-lg">💡</span>
              </h3>
              <div className="w-8 h-0.5 bg-[#34F5A3]/40 rounded-full mb-4 group-hover:w-16 transition-all duration-300" />
              <p className="text-gray-400 leading-relaxed">
                We encourage members to solve real problems, think creatively,
                and develop long-term skills that prepare them for a changing
                tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Events */}
      <section className="py-12 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#34F5A3]/10 border border-[#34F5A3]/20 rounded-lg mb-4">
                <span className="text-sm text-[#34F5A3] font-mono">
                  upcoming_events[]
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl">What&apos;s Happening 📅</h2>
            </div>

            <Link
              to="/events"
              className="group hidden md:flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:border-[#34F5A3] hover:bg-[#34F5A3]/5 transition-all"
            >
              View All Events
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Workshop",
                date: "March..",
                desc: "Hands-on technical sessions to help members build practical skills.",
              },
              {
                title: "Social Event",
                date: "March..",
                desc: "Meet other students, make friends, and grow your network in tech.",
              },
              {
                title: "Industry Talk",
                date: "March..",
                desc: "Hear from professionals about internships, careers, and new technology.",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="group bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-[#34F5A3]/50 hover:shadow-lg hover:shadow-[#34F5A3]/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-2 text-sm mb-3">
                  <span className="px-2 py-1 bg-[#34F5A3]/20 text-[#34F5A3] rounded font-mono text-xs">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Projects */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#34F5A3]/10 border border-[#34F5A3]/20 rounded-lg mb-4">
                <span className="text-sm text-[#34F5A3] font-mono">
                  student.projects
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl">Built by Students 🎒</h2>
            </div>

            <Link
              to="/projects"
              className="group hidden md:flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:border-[#34F5A3] hover:bg-[#34F5A3]/5 transition-all"
            >
              View All Projects
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#34F5A3]/50 hover:shadow-lg hover:shadow-[#34F5A3]/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-[#34F5A3]/20 to-[#34F5A3]/5" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#34F5A3]/10 text-[#34F5A3] text-xs rounded-full font-mono ">
                    Web
                  </span>
                  <span className="px-3 py-1 bg-[#34F5A3]/10 text-[#34F5A3] text-xs rounded-full font-mono ">
                    Club
                  </span>
                </div>
                <h3 className="text-2xl mb-3">Bronco Board</h3>
                <p className="text-gray-400 mb-4">
                  Explore club and student-built work ranging from websites to
                  creative technical projects.
                </p>
                <Link
                  to="/projects"
                  className="text-[#34F5A3] hover:underline text-sm flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Projects
                </Link>
              </div>
            </div>

            <div className="group bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#34F5A3]/50 hover:shadow-lg hover:shadow-[#34F5A3]/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-[#34F5A3]/10 to-transparent" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#34F5A3]/10 text-[#34F5A3] text-xs rounded-full font-mono">
                    Community
                  </span>
                  <span className="px-3 py-1 bg-[#34F5A3]/10 text-[#34F5A3] text-xs rounded-full font-mono">
                    Growth
                  </span>
                </div>
                <h3 className="text-2xl mb-3">Bronco Hacks Site</h3>
                <p className="text-gray-400 mb-4">
                  Join other students to learn, collaborate, and turn ideas into
                  real projects through the club.
                </p>
                <Link
                  to="/contact"
                  className="text-[#34F5A3] hover:underline text-sm flex items-center gap-2"
                >
                  <Braces className="w-4 h-4" />
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
