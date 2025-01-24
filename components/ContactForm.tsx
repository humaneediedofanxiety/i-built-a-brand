"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Mail, User, Building2, Phone, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.enum(["collaboration", "paid-service", "other"]),
  budget: z.enum(["<5k", "5k-10k", "10k-20k", "20k+"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must trust me bro I am not gonna hack you.",
  }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [messageLength, setMessageLength] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error(error);
      setSubmitError("An error occurred while sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm mb-4">Contact Us</div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Let&#39;s Get In Touch.
        </h1>
        <p className="text-gray-400">
          Or just reach out manually to{" "}
          <Link href="mailto:saysayeem.pr@gmail.com" className="text-white hover:text-gray-300">
            saysayeem.pr@gmail.com
          </Link>
        </p>
      </div>

      {submitSuccess ? (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Thank you for reaching out!</h2>
          <p className="text-gray-400 mb-6">We&apos;ll be in touch with you shortly.</p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="inline-flex items-center justify-center px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {submitError && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6">{submitError}</div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Full Name
              </label>
              <div className="relative">
                <input
                  {...register("name")}
                  id="name"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                  placeholder="Enter your full name"
                />
                <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
              </div>
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email Address
              </label>
              <div className="relative">
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                  placeholder="Enter your email address"
                />
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
              </div>
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-400">
                Company (optional)
              </label>
              <div className="relative">
                <input
                  {...register("company")}
                  id="company"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                  placeholder="Enter your company name"
                />
                <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400">
                Phone Number
              </label>
              <div className="relative">
                <input
                  {...register("phone")}
                  id="phone"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
                <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
              </div>
              {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-400">
                Project Type
              </label>
              <select
                {...register("projectType")}
                id="projectType"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
              >
                <option value="collaboration">Collaboration</option>
                <option value="paid-service">Paid Service</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-400">
                Budget Range
              </label>
              <select
                {...register("budget")}
                id="budget"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
              >
                <option value="<0.5k">Less than $500</option>
                <option value=".5k-2.5k">$500 - $2500</option>
                <option value="2.5k-5k">$2500 - $5,000</option>
                <option value="5k+">$5,000+</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">
              Message
            </label>
            <div className="relative">
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                placeholder="Tell us about your project..."
                onChange={(e) => setMessageLength(e.target.value.length)}
              ></textarea>
              <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
              <div className="absolute right-3 bottom-3 text-sm text-gray-500">{messageLength}/500</div>
            </div>
            {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("privacy")}
              id="privacy"
              className="h-4 w-4 rounded border-gray-300 text-white focus:ring-white/20"
            />
            <label htmlFor="privacy" className="text-sm text-gray-400">
              Do you trust me?
            </label>
          </div>
          {errors.privacy && <p className="text-sm text-red-500">{errors.privacy.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-white to-gray-200 text-black font-medium py-4 px-8 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Form</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
          <h3 className="font-medium mb-2">Live Chat</h3>
          <p className="text-sm text-gray-400 mb-4">Speak to our team quickly.</p>
          <Link href="#" className="inline-flex items-center text-sm text-white hover:text-gray-300">
            Start Chat <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
          <h3 className="font-medium mb-2">Email Us</h3>
          <p className="text-sm text-gray-400 mb-4">Get in touch via email.</p>
          <Link
            href="mailto:saysayeem.pr@gmail.com"
            className="inline-flex items-center text-sm text-white hover:text-gray-300"
          >
            Send Email <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}


