import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Wok</span> & <span className="text-accent">Roll</span>
            </h3>
            <p className="text-muted-foreground">
              Authentic Chinese fast food made fresh daily. Experience the perfect blend of tradition and convenience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Location & Hours</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span>Road No. 10, Banjara Hills<br />Hyderabad, Telangana 500034</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <span>Mon-Sun: 11:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 40 2355 9876</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@wokandroll.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wok & Roll. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
