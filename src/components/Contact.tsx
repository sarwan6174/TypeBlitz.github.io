import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, MessageSquare, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

// Reusable input component with icon and error message
const InputField = ({
  icon,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}: {
  icon: React.ReactNode;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}) => (
  <div className="space-y-1">
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-10 bg-dark border-white/10 focus-visible:ring-neon"
        required
      />
    </div>
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  // Fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Validate form fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Submit form and send email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      ...formData,
      _subject: "📩 New TypeBlitz - Submission",
      _template: "table",
      _autoresponse: `Hi ${formData.name},

Thanks for reaching out to us at TypeBlitz! 🎉

We’ve received your message and will get back to you as soon as possible.

- Subject: ${formData.subject}
- Message: ${formData.message}

Regards,  
The EllowDigital Team  
www.ellowdigitals.me`,
      _replyto: formData.email,
      _cc: "sarwanyadav6174@gmail.com",
      _captcha: "false",
    };

    try {
      await axios.post("https://formsubmit.co/ajax/ellowdigitals@gmail.com", payload);
      toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-gradient-to-t from-black to-dark relative opacity-0"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">We’d love to hear your thoughts!</p>
        </div>

        <div className="max-w-lg mx-auto glass rounded-2xl p-6 md:p-8 border border-neon/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              icon={<User className="w-5 h-5" />}
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            <InputField
              icon={<Mail className="w-5 h-5" />}
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <div className="space-y-1">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Target className="w-5 h-5" />
                </div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="pl-10 bg-dark border-white/10 focus-visible:ring-neon w-full py-2 rounded"
                  required
                >
                  <option value="">Please select a subject</option>
                  <option value="feedback">General Feedback</option>
                  <option value="suggestion">Feature Suggestion</option>
                  <option value="app_update_problem">Issue After App Update</option>
                  <option value="app_fails_on_start">Application Fails to Launch</option>
                  <option value="network_error">Network Connectivity Issue</option>
                  <option value="typing_stats_not_saved">Typing Stats Not Saving</option>
                  <option value="dashboard_not_working">Dashboard Not Functioning</option>
                </select>
              </div>
              {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
            </div>

            <div className="space-y-1">
              <div className="relative">
                <div className="absolute left-3 top-3 text-muted-foreground">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="pl-10 bg-dark border-white/10 min-h-[120px] focus-visible:ring-neon"
                  required
                />
              </div>
              {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-neon text-dark hover:bg-neon/90 btn-glow"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-dark"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
