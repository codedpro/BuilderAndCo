import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

interface RoomCardProps {
  title: string
  price: string
  rating: number
  imageSrc: string
}

function RoomCard({ title, price, rating, imageSrc }: RoomCardProps) {
  return (
    <div className="bg-beige-50 rounded-sm overflow-hidden">
      <div className="h-48 relative">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h4 className="font-serif text-brown-800 text-lg mb-1">{title}</h4>
        <p className="text-sm text-beige-700 mb-2">{price}</p>
        <div className="star-rating">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < rating ? "currentColor" : "none"}
                className={i < rating ? "text-brown-500" : "text-beige-300"}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export function RoomGallery() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-brown-800 mb-2">Explore Your Stay</h2>
            <p className="text-brown-600 max-w-xl">
              From intimate rooms to spacious suites, find your perfect retreat. Each space has been carefully crafted
              to provide the ultimate comfort and luxury experience.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-brown-600 hover:bg-brown-700 text-white rounded px-6 py-2">VIEW ALL</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <RoomCard
            title="Superior"
            price="From $200 / night"
            rating={4}
            imageSrc="/placeholder.svg?height=300&width=400"
          />
          <RoomCard
            title="Deluxe"
            price="From $300 / night"
            rating={5}
            imageSrc="/placeholder.svg?height=300&width=400"
          />
          <RoomCard
            title="Comfort"
            price="From $180 / night"
            rating={4}
            imageSrc="/placeholder.svg?height=300&width=400"
          />
          <RoomCard
            title="Premium"
            price="From $350 / night"
            rating={5}
            imageSrc="/placeholder.svg?height=300&width=400"
          />
        </div>
      </div>
    </section>
  )
}
