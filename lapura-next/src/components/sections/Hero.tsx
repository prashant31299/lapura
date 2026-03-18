"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-off-white min-h-[90vh] flex items-center">
      <div className="max-w-content mx-auto content-padding w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column — Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="label-mono block mb-6">
              PROFESSIONAL HAIR CARE
            </span>

            <h1 className="font-outfit font-semibold text-4xl md:text-hero text-near-black tracking-tight mb-6 leading-[1.05]">
              Where Salon Luxury Meets Scientific Innovation
            </h1>

            <p className="text-base text-mid-grey font-dm-sans max-w-md mb-10 leading-relaxed">
              Cosmetologist-formulated. Science-backed. Nature-powered.
              BioFusion™ technology that repairs from the inside out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="/products">
                Shop BioFusion™ Collection
              </Button>
              <Button variant="secondary" href="/science">
                Explore the Science
              </Button>
            </div>
          </motion.div>

          {/* Right Column — Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image
                src="/conditioner.png"
                alt="La'Pura Professional BioFusion™ Restore Conditioner — 300ML Professional Formula"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex gap-6 mt-6">
              <span className="font-dm-mono text-xs text-mid-grey tracking-label">
                300ML · PROFESSIONAL FORMULA
              </span>
              <span className="font-dm-mono text-xs text-mid-grey tracking-label">
                VEGAN · CRUELTY-FREE · GMP
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
