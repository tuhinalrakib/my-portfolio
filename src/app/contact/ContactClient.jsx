'use client';
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
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
                    console.log(result.text);
                    Swal.fire({
                        title: "Message sent successfully!",
                        icon: "success",
                        draggable: true
                    });
                    formRef.current.reset();
                },
                (error) => {
                    console.error(error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to send the message. Please try again.",
                    });
                }
            );
    };

    return (
        <motion.div
            id="contact"
            className="min-h-screen px-4 py-20 bg-gradient-to-br from-[#549443] to-base-200 text-base-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Contact Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Details */}
                    <motion.div
                        className="space-y-6"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-2xl text-primary" />
                            <p className="text-lg">eng.tuhin77@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-2xl text-primary" />
                            <p className="text-lg">+880 1609253955</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-2xl text-primary" />
                            <p className="text-lg">Dhaka, Bangladesh</p>
                        </div>
                        <p className="text-sm mt-6">
                            Feel free to reach out to discuss projects, collaboration or just say hi!
                        </p>
                    </motion.div>

                    {/* Contact Form */}
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" required />
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
                        <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered w-full h-32" required />
                        <button type="submit" className="btn btn-primary w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactClient;
