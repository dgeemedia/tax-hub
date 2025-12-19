import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Chinedu Okafor",
    role: "Software Engineer",
    content: "TaxHub NG made filing my taxes so easy! I calculated and filed everything in under 30 minutes. The calculator is incredibly accurate.",
    rating: 5
  },
  {
    name: "Amina Mohammed",
    role: "Business Owner",
    content: "As a small business owner, I was always confused about corporate taxes. The AI analysis feature is a game-changer. Highly recommended!",
    rating: 5
  },
  {
    name: "Oluwaseun Adebayo",
    role: "Freelancer",
    content: "Finally, a tax platform that understands Nigerian tax laws! The interface is clean and the support team is responsive. Worth every naira!",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-muted-foreground">
            See what our users are saying about TaxHub NG
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}