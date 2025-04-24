
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in a real app, this would send data to an API
    toast({
      title: "Inquiry Submitted",
      description: "We've received your inquiry and will contact you shortly.",
    });
  };
  
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="gold-underline">Contact</span> Us
        </h2>
        <p className="section-subtitle text-center">
          Have questions or ready to book? Reach out to our team for assistance.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div>
            <div className="bg-hotel-navy text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-playfair mb-4">Get in Touch</h3>
              <p className="mb-6">Our dedicated team is ready to assist you with any inquiries or special requests you may have.</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3 text-hotel-gold" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 text-hotel-gold" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">reservations@vistaoasis.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-hotel-light-gray p-8 rounded-lg">
              <h3 className="text-xl font-playfair mb-4">Follow Us</h3>
              <p className="text-gray-600 mb-6">Stay updated with our latest offers and news.</p>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-3 rounded-full hover:bg-hotel-navy hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-white p-3 rounded-full hover:bg-hotel-navy hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-white p-3 rounded-full hover:bg-hotel-navy hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-playfair mb-6">Send an Inquiry</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <Input type="text" id="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <Input type="email" id="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
                  <Input type="tel" id="phone" placeholder="Your phone" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Inquiry Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reservation">Reservation</SelectItem>
                      <SelectItem value="information">Information</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Preferred Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-left font-normal"
                    >
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="resize-none" rows={4} required />
              </div>
              
              <Button type="submit" className="btn-primary w-full">Send Message</Button>
            </form>
          </div>
        </div>
        
        {/* Special Offers Section */}
        <div className="mt-16 bg-gradient-to-r from-hotel-navy to-blue-900 rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-playfair mb-2">Special Offer: 15% Off Your First Stay</h3>
              <p className="text-gray-300">Use code <span className="font-bold">WELCOME15</span> when booking directly through our website.</p>
            </div>
            <Button className="btn-secondary">Book Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
