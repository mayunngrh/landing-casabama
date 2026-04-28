"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Animate from "@/components/Animate";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const footerT = useTranslations("home.footer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white text-stone-700">
      {/* Intro */}
      <section className="py-16 px-8 md:px-24">
        <Animate>
          <h1 className="text-[28px] md:text-[36px] font-light tracking-widest text-stone-800 uppercase mb-8">
            {t("heading")}
          </h1>
        </Animate>
        <Animate delay={100}>
          <p className="text-[13px] leading-8 text-stone-500 max-w-3xl">
            {t("description")}
          </p>
        </Animate>
      </section>

      {/* Content */}
      <section className="px-8 md:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Animate from="left" delay={150}>
            <div>
              <h2 className="text-[18px] font-light tracking-widest text-stone-800 uppercase mb-8">
                {t("form.nameLabel")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-[11px] tracking-widest text-stone-600 uppercase mb-2">
                    {t("form.nameLabel")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("form.namePlaceholder")}
                    required
                    className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-700 placeholder-stone-400 focus:outline-none focus:border-stone-700 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] tracking-widest text-stone-600 uppercase mb-2">
                    {t("form.emailLabel")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("form.emailPlaceholder")}
                    required
                    className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-700 placeholder-stone-400 focus:outline-none focus:border-stone-700 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] tracking-widest text-stone-600 uppercase mb-2">
                    {t("form.messageLabel")}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("form.messagePlaceholder")}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 bg-white text-stone-700 placeholder-stone-400 focus:outline-none focus:border-stone-700 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full border border-stone-400 text-stone-600 text-[11px] tracking-[0.25em] px-8 py-4 hover:border-stone-700 hover:text-stone-800 transition-colors uppercase"
                >
                  {t("form.submit")}
                </button>

                {/* Success Message */}
                {submitted && (
                  <p className="text-center text-[12px] text-stone-600 mt-4">
                    Thank you for your message. We will get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </Animate>

          {/* Contact Info */}
          <Animate from="right" delay={200}>
            <div>
              <h2 className="text-[18px] font-light tracking-widest text-stone-800 uppercase mb-8">
                {t("info.heading")}
              </h2>

              {/* Contact Cards */}
              <div className="space-y-8">
                {/* General Enquiries */}
                <div className="border-l-2 border-stone-300 pl-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Mail className="w-5 h-5 text-stone-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[11px] tracking-widest text-stone-600 uppercase mb-2">
                        {t("info.generalEnquiries")}
                      </p>
                      <a
                        href="mailto:info@casabama.com"
                        className="text-[13px] text-stone-700 hover:text-stone-900 transition-colors"
                      >
                        {footerT("generalEnquiries").replace("Pertanyaan Umum:", "").trim()}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Booking Enquiries */}
                <div className="border-l-2 border-stone-300 pl-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Mail className="w-5 h-5 text-stone-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[11px] tracking-widest text-stone-600 uppercase mb-2">
                        {t("info.bookingEnquiries")}
                      </p>
                      <a
                        href="mailto:booking@casabama.com"
                        className="text-[13px] text-stone-700 hover:text-stone-900 transition-colors"
                      >
                        {footerT("bookingEnquiries").replace("Pertanyaan Pemesanan:", "").trim()}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="border-l-2 border-stone-300 pl-6">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-stone-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[11px] tracking-widest text-stone-600 uppercase mb-2">
                        PHONE
                      </p>
                      <a
                        href="tel:+622187911111"
                        className="text-[13px] text-stone-700 hover:text-stone-900 transition-colors"
                      >
                        +62 (0) 21 8791 1111
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="border-l-2 border-stone-300 pl-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-stone-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[11px] tracking-widest text-stone-600 uppercase mb-3">
                        {t("info.address")}
                      </p>
                      <div className="text-[13px] leading-6 text-stone-700">
                        <p>{t("info.addressLine1")}</p>
                        <p>{t("info.addressLine2")}</p>
                        <p>{t("info.addressLine3")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}
