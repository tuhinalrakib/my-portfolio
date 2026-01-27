'use client';
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Swal from "sweetalert2";

const ContactClient = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
                formRef.current,
                `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
            )
            .then(
                (result) => {
                    Swal.fire({
                        title: "Message sent successfully!",
                        icon: "success",
                        background: '#111827',
                        color: '#fff',
                        confirmButtonColor: '#8b5cf6'
                    });
                    formRef.current.reset();
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to send the message.",
                        background: '#111827',
                        color: '#fff'
                    });
                }
            );
    };

    return (
        <section id="contact" className="relative py-24 px-6 bg-[#030712] overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h4 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-purple-500 font-semibold tracking-widest uppercase text-sm mb-3"
                    >
                        Get In Touch
                    </motion.h4>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white"
                    >
                        Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Together</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Contact Information Cards */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {[
                            { icon: <FaEnvelope />, label: "Email Me", value: "eng.tuhin77@gmail.com", color: "text-blue-400" },
                            { icon: <FaPhoneAlt />, label: "Call Me", value: "+880 1609253955", color: "text-green-400" },
                            { icon: <FaMapMarkerAlt />, label: "Location", value: "Dhaka, Bangladesh", color: "text-red-400" },
                        ].map((info, index) => (
                            <div key={index} className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
                                <div className={`text-2xl ${info.color} p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform`}>
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                                    <p className="text-lg font-medium text-white">{info.value}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Modern Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
                    >
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                                    <input 
                                        type="text" name="name" placeholder="John Doe" 
                                        className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                        required 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                                    <input 
                                        type="email" name="email" placeholder="example@mail.com" 
                                        className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                                <textarea 
                                    name="message" placeholder="How can I help you?" 
                                    className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-5 py-4 text-white h-40 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                                    required 
                                />
                            </div>
                            
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" 
                                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center gap-3 group transition-all"
                            >
                                <span>Send Message</span>
                                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-sm" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactClient;