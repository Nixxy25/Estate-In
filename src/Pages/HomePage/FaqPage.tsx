import Abstract from "../../assets/Images/Abstract Design.png"
import Button from "../../UI/Button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../components/ui/carousel"
  import { FaqDetails } from "../../data";

const FaqPage = () => {
  return (
    <div  className="px-20 py-10 flex flex-col gap-10">
        <div className="space-y-6">
            <div><img src={Abstract}></img></div>
            <h1 className="text-3xl font-[500]">Frequently Asked Questions</h1>
            <div className="flex justify-between gap-32 items-center">
                <h2 className="text-sm text-[#999999]">Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</h2>
                <div className="w-40"><Button  text ="View all FAQ's"></Button></div>
            </div>
        </div>

        <Carousel >
            <CarouselContent>
                {FaqDetails.map((items) => (
                    <CarouselItem key={items.id} className="md:basis-1/2 lg:basis-1/3 border-b border-[#999999] pb-10">
                        <div className="bg-[#1a1a1a] rounded-lg flex flex-col gap-8  py-8 px-8 border border-[#262626]">
                            <div className="space-y-6">
                                <h2 className="font-[600] text-lg">{items.title}</h2>
                                <div className="space-y-4">
                                    <h3 className="text-[#999999] text-sm">{items.description}</h3>
                                    <Button text="Read More"></Button>
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

export default FaqPage