import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2 } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: "Parent / Guardian",
    projectType: "Occupational Therapy",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormState({
        name: "",
        email: "",
        role: "Parent / Guardian",
        projectType: "Occupational Therapy",
        details: "",
      });
    }, 1500);
  };

  const handleBackToForm = () => {
    setIsSuccess(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative w-full max-w-xl bg-[#101010] rounded-2xl border border-white/10 overflow-hidden shadow-2xl z-10"
          >
            {/* Background noise overlay */}
            <div className="noise-overlay absolute inset-0 opacity-[0.05] pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/5 relative z-10">
              <h3 className="text-lg font-medium text-[#E1E0CC] tracking-wide uppercase font-sans">
                Start a correspondence
              </h3>
              <button
                onClick={onClose}
                className="text-[#DEDBC8]/60 hover:text-[#E1E0CC] hover:bg-white/5 p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content area */}
            <div className="p-6 relative z-10 max-h-[75vh] overflow-y-auto">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#DEDBC8]/60 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-[#E1E0CC] focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="Marcus Chen"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#DEDBC8]/60 uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-[#E1E0CC] focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="marcus@parent.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#DEDBC8]/60 uppercase tracking-wider mb-2">
                        Your Relation
                      </label>
                      <select
                        value={formState.role}
                        onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-[#E1E0CC] focus:outline-none focus:border-primary/50 transition-colors cursor-pointer"
                      >
                        <option value="Parent / Guardian">Parent / Guardian</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Educator">Educator</option>
                        <option value="Therapeutic Specialist">Therapeutic Specialist</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#DEDBC8]/60 uppercase tracking-wider mb-2">
                        Inquiry Focus
                      </label>
                      <select
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-[#E1E0CC] focus:outline-none focus:border-primary/50 transition-colors cursor-pointer"
                      >
                        <option value="Occupational Therapy">Occupational Therapy</option>
                        <option value="Speech-Language Therapy">Speech-Language Therapy</option>
                        <option value="Sensory Consultation">Sensory Consultation</option>
                        <option value="Comprehensive Evaluation">Comprehensive Evaluation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#DEDBC8]/60 uppercase tracking-wider mb-2">
                      Clinical Goals / Child's Strengths
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.details}
                      onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg p-4 text-sm text-[#E1E0CC] focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="Describe your child's strengths, developmental goals, and any support needed..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-[#eae8db] disabled:bg-primary/50 text-black font-medium py-3 rounded-lg text-sm sm:text-base transition-colors duration-200 cursor-pointer select-none"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Begin Consultation</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8 space-y-6"
                >
                  <div className="bg-primary/10 p-4 rounded-full border border-primary/20">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-medium text-[#E1E0CC] font-serif italic">
                      Your request has been received
                    </h4>
                    <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                      Our specialized clinical coordinators will review your child's profile and respond within three business days.
                    </p>
                  </div>
                  <div className="flex gap-3 w-full max-w-xs pt-4">
                    <button
                      onClick={handleBackToForm}
                      className="flex-1 border border-white/10 hover:border-white/20 text-gray-300 hover:text-[#E1E0CC] font-medium py-2 px-4 rounded-lg text-xs transition-colors cursor-pointer"
                    >
                      New Message
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 bg-primary hover:bg-[#eae8db] text-black font-medium py-2 px-4 rounded-lg text-xs transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
