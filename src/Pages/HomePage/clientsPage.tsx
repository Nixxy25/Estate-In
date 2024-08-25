import Abstract from "../../assets/Images/Abstract Design.png"
import Button from "../../UI/Button";
import { Clients } from "../../data";
import Stars from '../../assets/Images/stars.svg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../components/ui/carousel"
  

const ClientsPage = () => {
  return (
    <div className="px-20 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
            <div><img src={Abstract}></img></div>
            <div className="flex  items-center justify-between">
                <div className="space-y-4">
                    <h2 className="text-3xl font-[700]">What Our Clients Say</h2>
                    <p className="text-[#999999] text-sm">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                </div>
                <Button text="View All Testimonials"></Button>
            </div>
            
        </div>

        <Carousel >
            <CarouselContent>
                {Clients.map((items) => (
                    <CarouselItem key={items.id} className="md:basis-1/2 lg:basis-1/3 border-b border-[#999999] pb-10">
                        <div className="bg-[#1a1a1a] rounded-lg flex flex-col gap-8  py-12 px-8 border border-[#262626]">
                            <div><img src={Stars}></img></div>
                            <div className="space-y-4">
                                <h2 className="text-lg">{items.title}</h2>
                                <h3 className="text-sm">{items.description}</h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <div><img src={items.imageUrl}></img></div>
                                <div>
                                    <h2>{items.name}</h2>
                                    <h2>{items.location}</h2>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent >



        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
   
  </div>
  )
}

export default ClientsPage;