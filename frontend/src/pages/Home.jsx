import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Award, Briefcase, GraduationCap, Code, Palette, Users, TrendingUp, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Experience data
  const experience = [
    {
      company: 'JK Knit Composite Ltd',
      role: 'Industrial Intern',
      location: 'Savar, Dhaka',
      period: 'February 2025 – March 2025',
      responsibilities: [
        'Knitting Production of Variable Fabric Structure, R&D Department',
        'Execution of Knit Fabric Dyeing process with Finishing and Inspection',
        'Execution of Physical Testing Lab, Chemical Testing Lab',
        'Supported merchandising for 3 international buyers (Mango, NEXT) ensuring on-time delivery',
        'Assisted IE team in workflow analysis, contributing to 10% improvement in process efficiency'
      ]
    }
  ];

  // Education data
  const education = [
    {
      institution: 'Bangladesh University of Textiles',
      degree: 'BSc in Textile Engineering',
      specialization: 'Textile Engineering Management (TEM)',
      period: '2020 - 2025',
      grade: 'CGPA: 3.37/4.00'
    },
    {
      institution: 'Gaibandha Govt College',
      degree: 'Higher Secondary Certificate',
      period: '2018 - 2019',
      grade: 'GPA: 5.00/5.00'
    },
    {
      institution: 'Gaibandha Govt College',
      degree: 'Secondary School Certificate',
      period: '2016 - 2017',
      grade: 'GPA: 5.00/5.00'
    }
  ];

  // Skills data
  const technicalSkills = [
    { name: 'Adobe Photoshop', icon: Palette },
    { name: 'Adobe Illustrator', icon: Palette },
    { name: 'Canva', icon: Palette },
    { name: 'Microsoft Office', icon: Code },
    { name: 'Da Vinci Resolve', icon: Code },
    { name: 'Data Analytics', icon: TrendingUp }
  ];

  const softSkills = [
    'Leadership', 'Team Collaboration', 'Strategic Time Management',
    'Adaptability', 'Professional Discipline', 'Effective Communication'
  ];

  // Certifications
  const certifications = [
    { title: 'Advanced Lean Manufacturing in T&C sector', provider: 'ITC SME Trade Academy', year: '2025' },
    { title: 'Global Human Resources Professional', provider: 'Udemy', year: '2025' },
    { title: 'Data Science and Analytics', provider: 'HP Life', year: '2025' },
    { title: 'Basic Graphics Design', provider: 'Muktopaath', year: '2021' }
  ];

  // Achievements
  const achievements = [
    'Best Artist at KPR Art Exhibition',
    'Runners up in Digital Art Segment at Intra-Departmental Fest',
    'Merit Scholarship in BUTEX',
    'SSC and JSC Board Scholarship',
    'Best Musical Instrument Player in College Annual Fest',
    'Completed certified 2-month industrial internship at JK Knit Composite Ltd (2025)'
  ];

  // Gallery images
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1675176785803-bffbbb0cd2f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjE3MzM4MDh8MA&ixlib=rb-4.1.0&q=85',
      category: 'Projects',
      title: 'Textile Manufacturing'
    },
    {
      url: 'https://images.unsplash.com/photo-1760328715296-9714daa8a737?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHx0ZXh0aWxlJTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NjE3MzM4MDh8MA&ixlib=rb-4.1.0&q=85',
      category: 'Projects',
      title: 'Textile Loom'
    },
    {
      url: 'https://images.unsplash.com/photo-1600903781679-7ea3cbc564c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxhcnQlMjBleGhpYml0aW9ufGVufDB8fHx8MTc2MTczMzgxMnww&ixlib=rb-4.1.0&q=85',
      category: 'Art',
      title: 'Art Exhibition'
    },
    {
      url: 'https://images.unsplash.com/photo-1656129974517-7da8bb940a1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxhcnQlMjBleGhpYml0aW9ufGVufDB8fHx8MTc2MTczMzgxMnww&ixlib=rb-4.1.0&q=85',
      category: 'Art',
      title: 'Gallery Space'
    },
    {
      url: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc2MTczMzgyMnww&ixlib=rb-4.1.0&q=85',
      category: 'Events',
      title: 'University Campus'
    },
    {
      url: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      category: 'Events',
      title: 'Academic Environment'
    },
    {
      url: 'https://images.pexels.com/photos/6660927/pexels-photo-6660927.jpeg',
      category: 'Projects',
      title: 'Textile Production'
    },
    {
      url: 'https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg',
      category: 'Art',
      title: 'Creative Gallery'
    },
    {
      url: 'https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdWNjZXNzfGVufDB8fHx8MTc2MTczMzgyN3ww&ixlib=rb-4.1.0&q=85',
      category: 'Achievements',
      title: 'Professional Success'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1628] via-[#1A2332] to-[#0A1628] text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/90 backdrop-blur-md border-b border-[#D4AF37]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4C542] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              ARPON SAHA
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Gallery', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-[#D4AF37]/20 text-[#F4C542] border-[#D4AF37] px-4 py-1 font-medium">
                Textile Engineer
              </Badge>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#F4C542] to-[#D4AF37] bg-clip-text text-transparent">
              ARPON SAHA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              A technically skilled and management-focused Textile Engineering graduate with hands-on industrial experience in knit production, dyeing, testing, and merchandising coordination.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-[#0A1628] hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300 px-8 py-6 text-lg font-semibold"
              >
                <Mail className="mr-2 h-5 w-5" /> Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('experience')}
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628] transition-all duration-300 px-8 py-6 text-lg"
              >
                View Experience
              </Button>
            </div>
            <div className="flex gap-6 mt-8">
              <motion.a 
                href="https://www.linkedin.com/in/arponsaha/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="mailto:arponbutextem65@gmail.com"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="tel:+8801789849716"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-4 border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/20">
              <img 
                src="https://images.pexels.com/photos/8488030/pexels-photo-8488030.jpeg" 
                alt="Arpon Saha" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent"></div>
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-[#0A1628] p-6 rounded-xl shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="text-3xl font-bold">5+ Years</div>
              <div className="text-sm">Education & Experience</div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-[#D4AF37]" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C542] bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <Card className="bg-[#1A2332]/50 border-[#D4AF37]/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#F4C542]">Career Objective</h3>
                    <p className="text-gray-200 leading-relaxed">
                      To build a dynamic career in the global textile and apparel industry, where I can apply my technical expertise in production, merchandising, and supply chain optimization while continuously developing innovative and sustainable solutions that create measurable business value.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#F4C542]">Passion Areas</h3>
                    <ul className="space-y-3">
                      {[
                        'Sustainable Supply Chain Management & Lean Management',
                        'Data Analytics & Data-driven problem-solving',
                        'Production Planning & Quality Control',
                        'Merchandising Coordination'
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 text-gray-200"
                        >
                          <div className="h-2 w-2 bg-[#D4AF37] rounded-full mt-2"></div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Separator className="my-8 bg-[#D4AF37]/20" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-[#D4AF37]" />
                    <div className="text-sm text-gray-300">Location</div>
                    <div className="font-semibold text-white">Dhaka, Bangladesh</div>
                  </div>
                  <div>
                    <Phone className="h-8 w-8 mx-auto mb-2 text-[#D4AF37]" />
                    <div className="text-sm text-gray-300">Phone</div>
                    <div className="font-semibold text-white">+880 1789849716</div>
                  </div>
                  <div>
                    <Mail className="h-8 w-8 mx-auto mb-2 text-[#D4AF37]" />
                    <div className="text-sm text-gray-300">Email</div>
                    <div className="font-semibold text-white text-sm">arponbutextem65@gmail.com</div>
                  </div>
                  <div>
                    <GraduationCap className="h-8 w-8 mx-auto mb-2 text-[#D4AF37]" />
                    <div className="text-sm text-gray-300">Education</div>
                    <div className="font-semibold text-white">BSc Textile Eng.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-4 bg-[#0A1628]/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C542] bg-clip-text text-transparent">
              Experience & Education
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-8 w-8 text-[#D4AF37]" />
                <h3 className="text-3xl font-bold text-[#F4C542]">Work Experience</h3>
              </div>
              {experience.map((exp, index) => (
                <Card key={index} className="bg-[#1A2332]/50 border-[#D4AF37]/20 backdrop-blur-sm mb-6 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#F4C542]">{exp.role}</CardTitle>
                    <CardDescription className="text-[#D4AF37] font-semibold">{exp.company}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span>{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-200">
                          <div className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                          <span className="text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-8 w-8 text-[#D4AF37]" />
                <h3 className="text-3xl font-bold text-[#F4C542]">Education</h3>
              </div>
              {education.map((edu, index) => (
                <Card key={index} className="bg-[#1A2332]/50 border-[#D4AF37]/20 backdrop-blur-sm mb-6 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#F4C542]">{edu.degree}</CardTitle>
                    <CardDescription className="text-[#D4AF37] font-semibold">{edu.institution}</CardDescription>
                    {edu.specialization && (
                      <p className="text-sm text-gray-400 mt-1">Specialization: {edu.specialization}</p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">{edu.period}</span>
                      <Badge className="bg-[#D4AF37]/20 text-[#F4C542] border-[#D4AF37]">{edu.grade}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C542] bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1A2332]/50 border-[#D4AF37]/20 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#F4C542] flex items-center gap-2">
                    <Code className="h-6 w-6" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {technicalSkills.map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-3 p-3 bg-[#0A1628]/50 rounded-lg border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all"
                        >
                          <Icon className="h-5 w-5 text-[#D4AF37]" />
                          <span className="text-sm text-white">{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-[#1A2332]/50 border-[#D4AF37]/20 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#F4C542] flex items-center gap-2">
                    <Users className="h-6 w-6" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Badge className="bg-gradient-to-r from-[#D4AF37]/20 to-[#F4C542]/20 text-white border-[#D4AF37]/30 px-4 py-2 text-sm hover:border-[#D4AF37] transition-all font-medium">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20 px-4 bg-[#0A1628]/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C542] bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#F4C542] mb-6 flex items-center gap-2">
                <Award className="h-6 w-6" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-[#1A2332]/50 border-[#D4AF37]/20 backdrop-blur-sm hover:border-[#D4AF37]/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-white mb-2">{cert.title}</h4>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-200">{cert.provider}</span>
                          <Badge className="bg-[#D4AF37]/20 text-[#F4C542] border-[#D4AF37]">{cert.year}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#F4C542] mb-6 flex items-center gap-2">
                <Award className="h-6 w-6" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-[#1A2332]/50 border border-[#D4AF37]/20 rounded-lg hover:border-[#D4AF37]/50 transition-all duration-300"
                  >
                    <div className="h-2 w-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C542] bg-clip-text text-transparent">
              Photo Gallery
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative overflow-hidden rounded-xl border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="bg-[#D4AF37] text-[#0A1628] mb-2">{image.category}</Badge>
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Leadership */}
      <section className="py-20 px-4 bg-[#0A1628]/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C542] bg-clip-text text-transparent">
              Leadership & Activities
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1A2332]/50 border-[#D4AF37]/20 backdrop-blur-sm hover:border-[#D4AF37]/50 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-[#F4C542]">General Secretary</CardTitle>
                  <CardDescription className="text-[#D4AF37] font-semibold">BUTEX Literature Club</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4">Successfully organized major events including:</p>
                  <ul className="space-y-2">
                    {['Rabindra Sondhya', 'Lit Fest', 'Folk Fest', 'Various cultural programs'].map((event, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-200">
                        <div className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-[#1A2332]/50 border-[#D4AF37]/20 backdrop-blur-sm hover:border-[#D4AF37]/50 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-[#F4C542]">Former Co-Leader</CardTitle>
                  <CardDescription className="text-[#D4AF37] font-semibold">ARTEX (Art & Photography Club of BUTEX)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4">Successfully organized creative events including:</p>
                  <ul className="space-y-2">
                    {['Ovyarthonay Aloron', 'Nirobotay kolorob', 'Graffiti Competition', 'Art exhibitions'].map((event, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-200">
                        <div className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C542] bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-center text-gray-200 mb-12 text-lg">
              Let's discuss how I can contribute to your organization. Feel free to reach out!
            </p>

            <Card className="bg-[#1A2332]/50 border-[#D4AF37]/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Your Name</label>
                      <Input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-[#0A1628]/50 border-[#D4AF37]/30 text-white placeholder:text-gray-400 focus:border-[#D4AF37] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-[#0A1628]/50 border-[#D4AF37]/30 text-white focus:border-[#D4AF37] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <Input 
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-[#0A1628]/50 border-[#D4AF37]/30 text-white focus:border-[#D4AF37] transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-[#0A1628]/50 border-[#D4AF37]/30 text-white focus:border-[#D4AF37] transition-colors resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-[#0A1628] hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300 py-6 text-lg font-semibold"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>

                <Separator className="my-8 bg-[#D4AF37]/20" />

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Mail className="h-8 w-8 mx-auto mb-2 text-[#D4AF37]" />
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <a href="mailto:arponbutextem65@gmail.com" className="text-sm text-[#F4C542] hover:underline">
                      arponbutextem65@gmail.com
                    </a>
                  </div>
                  <div>
                    <Phone className="h-8 w-8 mx-auto mb-2 text-[#D4AF37]" />
                    <div className="text-sm text-gray-400 mb-1">Phone</div>
                    <a href="tel:+8801789849716" className="text-sm text-[#F4C542] hover:underline">
                      +880 1789849716
                    </a>
                  </div>
                  <div>
                    <Linkedin className="h-8 w-8 mx-auto mb-2 text-[#D4AF37]" />
                    <div className="text-sm text-gray-400 mb-1">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/arponsaha/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F4C542] hover:underline">
                      Connect with me
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1628] border-t border-[#D4AF37]/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4C542] bg-clip-text text-transparent mb-4">
                ARPON SAHA
              </h3>
              <p className="text-gray-400">Textile Engineer | Creative Leader | Problem Solver</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#F4C542] mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Experience', 'Gallery', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-400 hover:text-[#D4AF37] transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#F4C542] mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/arponsaha/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:arponbutextem65@gmail.com" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="tel:+8801789849716" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <Separator className="bg-[#D4AF37]/20 mb-8" />
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Arpon Saha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;