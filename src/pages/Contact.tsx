import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your brand with dynamic digital advertising? 
              Let's discuss your campaign objectives and create something amazing together.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our team is ready to help you create impactful digital advertising campaigns. 
                    Reach out through any of the channels below or fill out the contact form.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <Card className="p-6 border-l-4 border-l-primary hover:shadow-card transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Head Office</h3>
                        <p className="text-muted-foreground">
                          123 Business District, Electronic City<br />
                          Bangalore, Karnataka 560100<br />
                          India
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-secondary hover:shadow-card transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Phone Support</h3>
                        <p className="text-muted-foreground">
                          +91 98765 43210<br />
                          24/7 Support Available<br />
                          Emergency: +91 98765 43211
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-accent hover:shadow-card transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                        <p className="text-muted-foreground">
                          info@jayalakshmids.com<br />
                          sales@jayalakshmids.com<br />
                          support@jayalakshmids.com
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-primary hover:shadow-card transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 9:00 AM - 8:00 PM<br />
                          Sunday: 10:00 AM - 6:00 PM<br />
                          Emergency Support: 24/7
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="shadow-hero">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MessageSquare className="w-6 h-6 text-primary mr-3" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours with a customized proposal.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <select 
                      id="service" 
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select a service</option>
                      <option value="city-wide">City-Wide Campaigns</option>
                      <option value="led-truck">LED Truck Advertising</option>
                      <option value="custom">Custom Packages</option>
                      <option value="consultation">Strategy Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your advertising goals and requirements..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button variant="cta" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We'll never share your information with third parties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;