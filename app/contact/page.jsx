import React from "react";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";

const Contact = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto py-12 xl:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="h2 mt-4">Let&apos;s build something reliable</h1>
          <p className="text-white/70 mt-4">
            I&apos;m open to full-stack roles, government digital transformation
            projects, and product collaborations. If you have a platform that
            needs dependable engineering, let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          <div className="card p-6">
            <h3 className="h3">Contact details</h3>
            <div className="mt-4 flex flex-col gap-3 text-white/70">
              <span>Phone: +971 50 680 4814</span>
              <span>Email: sajed619007@gmail.com</span>
              <span>Location: Ajman, UAE</span>
            </div>
            <div className="mt-6">
              <Socials
                containerStyles="flex gap-4"
                iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>

          <div className="card p-6">
            <h3 className="h3">Quick message</h3>
            <p className="text-white/70 mt-3">
              Prefer a quick email? Click below and I&apos;ll reply within 24 hours.
            </p>
            <a href="mailto:sajed619007@gmail.com?subject=Portfolio%20Inquiry">
              <Button size="lg" className="uppercase mt-6 w-full">Email Sajed</Button>
            </a>
            <p className="text-xs text-white/50 mt-3">
              Direct link opens your email client with a pre-filled subject.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
