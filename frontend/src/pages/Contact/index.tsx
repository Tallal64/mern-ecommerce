
import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  LuClock,
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
  LuSend,
} from "react-icons/lu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the form submission here
    setIsSubmitted(true);

    // Reset form after 3 seconds for demo purposes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <motion.div
      className="container mx-auto px-4 pt-16 pb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We'd love to hear from you. Please fill out the form below or use our
          contact information to get in touch.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <Card className="border dark:border-gray-800">
            <CardContent className="pt-6">
              {isSubmitted ? (
                <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900 text-green-800 dark:text-green-300 mb-4">
                  <AlertDescription className="flex items-center gap-2">
                    <LuSend className="h-4 w-4" />
                    Thank you for your message! We'll get back to you soon.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">
                          Customer Support
                        </SelectItem>
                        <SelectItem value="feedback">
                          Product Feedback
                        </SelectItem>
                        <SelectItem value="billing">
                          Billing Question
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <LuSend className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <LuMapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Our Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Commerce Street
                    <br />
                    Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <LuPhone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a
                      href="tel:+1-202-555-0188"
                      className="hover:text-primary"
                    >
                      +1 (202) 555-0188
                    </a>
                    <br />
                    <a
                      href="tel:+1-202-555-0189"
                      className="hover:text-primary"
                    >
                      +1 (202) 555-0189
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <LuMail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a
                      href="mailto:info@example.com"
                      className="hover:text-primary"
                    >
                      info@example.com
                    </a>
                    <br />
                    <a
                      href="mailto:support@example.com"
                      className="hover:text-primary"
                    >
                      support@example.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <LuClock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Business Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <LuFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <LuInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <LuLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div variants={itemVariants} className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Our Location</h2>
        <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden relative">
          {/* This would be replaced with an actual map component in a real application */}
          <div className="absolute inset-0 flex items-center justify-center">
            <LuMapPin className="h-12 w-12 text-gray-400 dark:text-gray-600" />
            <span className="sr-only">Map location</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-700 p-4 text-center">
            <p className="font-medium">
              123 Commerce Street, New York, NY 10001
            </p>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div variants={itemVariants} className="mt-16 mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How quickly do you respond to inquiries?
            </AccordionTrigger>
            <AccordionContent>
              We aim to respond to all inquiries within 24 business hours. For
              urgent matters, please call our customer support line for
              immediate assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do you offer international shipping?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we ship to most countries worldwide. Shipping rates and
              delivery times vary depending on the destination. You can
              calculate shipping costs at checkout.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy for most items. Products must be
              returned in their original condition and packaging. Please visit
              our Returns page for more details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How can I track my order?</AccordionTrigger>
            <AccordionContent>
              Once your order ships, you'll receive a confirmation email with
              tracking information. You can also track your order by logging
              into your account on our website.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.div>
  );
}
