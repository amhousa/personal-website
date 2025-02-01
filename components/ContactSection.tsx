import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" /> info@amirsalmani.com
              </p>
              <p className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" /> t.me/amhousa
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" /> Tehran, Iran
              </p>
            </div>
          </div>
          <form className="glass p-6 rounded-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input type="text" id="name" className="w-full p-2 bg-gray-700 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input type="email" id="email" className="w-full p-2 bg-gray-700 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea id="message" rows={4} className="w-full p-2 bg-gray-700 rounded" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

