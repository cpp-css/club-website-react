import { useState } from "react";

const CONTACT_HERO_STYLES = `
  @keyframes hero-up { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
  .cha1{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .1s both}
  .cha2{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .22s both}
  .cha3{animation:hero-up .8s cubic-bezier(.16,1,.3,1) .34s both}
`;
import {
  Mail,
  Send,
  Instagram,
  Github,
  Linkedin,
  MessageCircleMore,
} from "lucide-react";
import cssLogo from "../assets/logo_for_web_2_2025.png";
import contactBackground from "../assets/redesignPhotos/Contact Background.jpg";
import { HeroBadge } from "../components/ui/HeroBadge";
import { SectionBadge } from "../components/ui/SectionBadge";
import { SocialLinkRow } from "../components/ui/SocialLinkRow";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      setStatus("Please enter your name.");
      return;
    }

    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (!message.trim()) {
      setStatus("Please enter a message.");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        const err = await response.text();
        console.error("Function error:", err);
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <style>{CONTACT_HERO_STYLES}</style>
      {/* Page Background */}
      <img
        src={contactBackground}
        alt="Contact background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#34F5A3]/10 rounded-full blur-[100px]" />

      {/* Contact Content */}
      <section className="relative z-10 pt-12 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto mb-10 text-center">
          <HeroBadge label="contact.css_society" className="cha1 mb-6" />

          <div className="cha2 inline-flex items-center gap-3">
            <img
              src={cssLogo}
              alt="CSS Logo"
              className="w-15 h-15 object-contain translate-x-[15px] translate-y-[17px]"
            />
          </div>
          <h1 className="cha2 text-4xl md:text-6xl mb-4 tracking-tight text-white">
            Contact <span className="text-[#34F5A3]">Us</span>
          </h1>

          <p className="cha3 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question, idea, or want to get involved? 📬 Reach out and
            we'll get back to you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Info Panel */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212]/80 backdrop-blur-md min-h-[620px]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50" />

            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <SectionBadge label="let's_connect()" className="mb-6" />

                <h2 className="text-3xl md:text-4xl mb-4 text-white">
                  Join CPP&apos;s Developer Community
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  Whether you&apos;re interested in workshops, projects,
                  hackathons, or meeting other students in tech, CSS is a place
                  to learn and build together.
                </p>

                <div className="space-y-5">
                  <SocialLinkRow
                    icon={<Mail className="w-5 h-5 text-[#34F5A3]" />}
                    label="Email"
                    href="mailto:css.cpp.edu@gmail.com"
                    linkText="css.cpp.edu@gmail.com"
                  />
                  <SocialLinkRow
                    icon={
                      <MessageCircleMore className="w-5 h-5 text-[#34F5A3]" />
                    }
                    label="Discord"
                    href="https://discord.gg/gUW74PQhxF"
                    linkText="Join our Discord"
                    isExternal
                  />
                  <SocialLinkRow
                    icon={<Instagram className="w-5 h-5 text-[#34F5A3]" />}
                    label="Instagram"
                    href="https://www.instagram.com/cppcss/"
                    linkText="@cppcss"
                    isExternal
                  />
                  <SocialLinkRow
                    icon={<Github className="w-5 h-5 text-[#34F5A3]" />}
                    label="GitHub"
                    href="https://github.com/cpp-css"
                    linkText="cpp-css"
                    isExternal
                  />
                  <SocialLinkRow
                    icon={<Linkedin className="w-5 h-5 text-[#34F5A3]" />}
                    label="LinkedIn"
                    href="https://www.linkedin.com/company/cppcss/"
                    linkText="CSS at CPP"
                    isExternal
                  />
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
                <p className="text-sm text-gray-400">
                  // Ask about joining the club, collaborating on projects,
                  upcoming events, or anything CSS-related.
                </p>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="rounded-3xl border border-white/10 bg-[#121212]/85 backdrop-blur-md p-8 md:p-10">
            <div className="mb-8">
              <SectionBadge label="send_message()" className="mb-4" />

              <h2 className="text-3xl mb-3 text-white">Send us a message</h2>
              <p className="text-gray-400">
                Fill out the form below and we&apos;ll get back to you as soon
                as we can.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[#34F5A3] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[#34F5A3] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  placeholder="Optional"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[#34F5A3] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us what you're reaching out about..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={7}
                  className="w-full rounded-xl border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-[#34F5A3] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-[#34F5A3] text-black rounded-xl hover:bg-[#2de091] hover:shadow-lg hover:shadow-[#34F5A3]/20 transition-all font-semibold"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
              </button>

              {status !== "" && (
                <p className="text-sm text-gray-300 pt-2">{status}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
