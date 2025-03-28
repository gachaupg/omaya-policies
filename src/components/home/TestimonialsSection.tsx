
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "OMAYA Express Exchange provided me with a seamless trading experience. Their platform is intuitive and their customer service is exceptional.",
    author: "Ahmed Hussein",
    title: "Crypto Investor",
    image: "https://img.freepik.com/free-photo/worldface-side-view-african-man_53876-23488.jpg?semt=ais_hybrid",
  },
  {
    quote: "As someone new to cryptocurrency, I found OMAYA's educational resources immensely helpful. Their team guided me through my first trades with patience and expertise.",
    author: "Amina Farah",
    title: "New Trader",
    image: "https://www.shutterstock.com/image-photo/beautiful-arab-middleeastern-woman-traditional-260nw-2310426525.jpg",
  },
  {
    quote: "The security measures implemented by OMAYA gave me the confidence to trade larger volumes. Their transparent approach to business is commendable.",
    author: "Mohamed Abdi",
    title: "Business Owner",
    image: "https://img.freepik.com/free-photo/black-man-posing_23-2148171684.jpg",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/20 text-primary rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with OMAYA Express Exchange.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-lg animate-on-scroll">
            <div className="absolute top-0 left-0 w-20 h-20 bg-primary/20 rounded-br-2xl flex items-center justify-center">
              <Quote className="w-10 h-10 text-primary" />
            </div>
            
            <div className="pt-8 px-8 pb-10 md:pt-12 md:px-12 md:pb-14">
              <div className="ml-12 min-h-[240px] flex flex-col justify-center">
                <div 
                  key={activeIndex}
                  className="transition-opacity duration-500"
                >
                  <p className="text-lg md:text-xl font-medium text-muted-foreground mb-8 leading-relaxed">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].author} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAwYzYuNjIzIDAgMTIgNS4zNzcgMTIgMTJzLTUuMzc3IDEyLTEyIDEyLTEyLTUuMzc3LTEyLTEyIDUuMzc3LTEyIDEyLTEyem04LjEyNyAxOS40MWMuMjgyLS40MDEuNDktLjg1LjU3NC0xLjM0Ni42NDYtMy43OTItLjMyNC03LjgxNy0yLjU0LTEwLjc2OC0uODMxLTEuMTAyLTEuOS0yLjA4OC0zLjE1LTIuODM2bC0uNTM1LS4yNy41NDguMDFjMS4xNjguMDI1IDIuMzU3LjI1IDMuMzQ1LjY4OC40NzkuMjE5IDEuMDgyLjgwMSAxLjQzIDEuMzcxLjE2NS4yNzIuMjg1LjU2LjM0NS45NS40MTcuMDIzLjg0Mi4wODggMS4yOTguMjM3Ljg3NS4yODYgMS41MDcuOTEzIDEuODAzIDEuODc2LjA3Mi4yMzYuMDkxLjYyOS4wNDYuODgtLjEyMS42NzQtLjQ1OCAxLjE4MS0xLjA0MSAxLjU2Mi0uMTI4LjA4NC0uMTk1LjE3My0uMDk2LjI0OC4xMzIuMTUyLjI0NS4zMzYuMzIxLjUzNC4xNTUuNDA3LjE2OC45OTEuMDM0IDEuMzUyLS4xNzUuNDY2LS41NzcuNzcyLTEuMDEuOTcyLS4xMDMuMDQ3LS4xOTEuMTI0LS4xMDQuMjUzLjIyMi4zNjQuMjIzLjc5LjAwNyAxLjE3Mi0uMjU0LjQ0OC0uNy43MTQtMS4yNjQuOTQ1em0tMTUuNDEtNi41NTljLjgwNC0uMDguOTM3LS4yNTYuOTM3LTEuMTQ1IDAtLjM0MS0uMTY0LS42MjctLjQ5Mi0uODU3LS4xNTktLjExMi0uMzQ2LS4xNi0uNTQtLjE2cy0uMzgxLjA0OC0uNTQuMTU5Yy0uMzI4LjIzLS40OTMuNTE3LS40OTMuODU4IDAgLjg4OS4xMzMgMS4wNjUuOTM4IDEuMTQ1LjEzMy4wMTQuMTkyLjA3NS4xOTIuMTkxcy0uMDU5LjE3OC0uMTkyLjE5MmMtLjgwNS4wOC0uOTM4LjI1Ni0uOTM4IDEuMTQ1IDAgLjcuNjc3IDEuMDE3IDEuMDMyIDEuMDE3cy42NjctLjEzNC42MzYtLjQwM2MtLjAzNC0uMjk2LS41MDgtLjM0MS0uNTA4LS45ODUgMC0uMjU5LjE5Mi0uNDE3LjQ3My0uNDE3LjI4MiAwIC40NzQuMTU4LjQ3NC40MTcgMCAuNjQ0LS40NzQuNjg5LS41MDguOTg1LS4wMzEuMjY5LjI4Mi40MDMuNjM3LjQwMy4zNTQgMCAxLjAzMi0uMzE3IDEuMDMyLTEuMDE3IDAtLjg4OS0uMTMzLTEuMDY1LS45MzgtMS4xNDUtLjEzMy0uMDE0LS4xOTItLjA3NS0uMTkyLS4xOTFzLjA1OS0uMTc3LjE5Mi0uMTkxem00LjYwMi41NzhjLjMxMy0uMDQxLjMyMi0uMDkyLjMyMi0uMjk2IDAtLjIzMS0uMDI5LS4yNjQtLjMyMi0uMjk2LS42MTItLjA2NS0uNjItLjE3LS42MTItLjg1MiAwLS42ODEuMDA4LS43ODYuNjEyLS44NTEuMzEzLS4wMzMuMzIyLS4wNjUuMzIyLS4yOTZzLS4wMDktLjI2NS0uMzIyLS4yOTZjLS42MDQtLjA2NS0uNjEyLS4xNzEtLjYxMi0uODUycy4wMDgtLjc4Ni42MTItLjg1Yy4zMTMtLjAzMy4zMjItLjA2NS4zMjItLjI5NiAwLS4yMy0uMDA5LS4yNjQtLjMyMi0uMjk3LS43NTMtLjA4MS0xLjE1Mi0uMTktMS4xNTItMS4zMDggMC0xLjAwMi4yMzctMS4yMS45OTQtMS4yMS4zMTMgMCAuNDY1LS4wOS40MzctLjI4OC0uMDMxLS4yMTMtLjIxLS4zMTQtLjUxLS4zNTgtLjYyLS4wOTItLjk4NC4wMjQtMS4zMS4zMDZsLjAyOCAzLjM2NGMwIC43MjMuMDgyLjkzNCAxLjE2MSAxLjA0MS4yODEuMDI4LjI4OS4wNjEuMjg5LjI4MXMtLjAwOC4yNTQtLjI4OS4yODJjLTEuMDc5LjEwNi0xLjE2MS4zMTgtMS4xNjEgMS4wNDEgMCAuNzIyLS4wODIuOTMzLTEuMTYxIDEuMDQtLjI4MS4wMjgtLjI4OS4wNjItLjI4OS4yODEgMCAuMjIuMDA4LjI1NC4yODkuMjgxIDEuMDc5LjEwNyAxLjE2MS4zMTkgMS4xNjEgMS4wNDF2LjkwOWMwIDEuMDU4LS4yMjcgMS42NzUgMS4yOTYgMS42NjEuMjgyLS4wMDMuNDg1LS4wOS41MDktLjMwMi4wMjctLjI0My0uMTI1LS4zNzItLjQzNy0uMzcyLS43NTcgMC0uOTk0LS4yMDYtLjk5NC0xLjIwOSAwLTEuMTE5LjM5OS0xLjIyOCAxLjE1Mi0xLjMwOXptNC44NzItMTAuNTIzYy0zLjU0OC0xLjA5Ny03LjQ0LTEuMDk3LTEwLjk4OCAwQzMuNTM2IDMuNzU0IDAgNy42ODkgMCAxMmMwIDUuNTI0IDQuNTk2IDEwIDEwLjgzNCAxMCAyLjUxNCAwIDQuODc2LS42MjEgNi45NzktMS42OTMtLjM0Ny0uMzkzLS40MzctLjkyNy0uNjMtMS41MzQtLjI4Ni0uODk3LS43MTEtMS42NDktMS43MTUtMi4wMjEtLjQyNi0uMTU4LS44MDEtLjE1My0uNzg0LS40OC4wMTItLjIyLjE0LS4yNjYuMzc0LS4zMDEuODcxLS4xMjkgMS40Mi0uNTg4IDEuNTk1LTEuNDQ2LjExLS41MzguMDM1LS45OS0uMjk1LTEuMzk3LS4wNzEtLjA4OC0uMDMtLjEyNC4wOTctLjE3MS41MjQtLjE5NS44NS0uNTg4Ljk1LTEuMTI2LjEwNC0uNTYzLS4wODYtMS4wMTctLjQ1MS0xLjQyOC0uMzE1LS4zNTUtLjcwNC0uNTQtMS4xNTMtLjYyOS0uMDg1LS4wMTctLjEzOS0uMDQ1LS4xMjQtLjE0Ny4wMDQtLjAzMS4wMjEtLjA1Mi4wMjEtLjA4NS0uODE3LS40MDgtMS4zNzQtLjkzNS0xLjU4LTEuODIyLS4xNTQtLjY2LS4wODMtMS4zMjYuMTc4LTEuOTY3LjExLS4yNzMuMjU2LS40MTYuNDY3LS42LS41NzktLjEyNy0xLjE1OS0uMTc0LTEuNzQ0LS4xODZsLS4yNzQuMDA2Yy0uMDE0IDAtLjAyOC0uMDA2LS4wNDItLjAwNi0uMDEzIDAtLjAyOC4wMDYtLjA0MS4wMDZsLS4yNzUtLjAwNmMtLjU4NS4wMTItMS4xNjUuMDU5LTEuNzQ0LjE4Ni4yMTEuMTg0LjM1Ny4zMjcuNDY3LjYuMjYxLjY0MS4zMzEgMS4zMDcuMTc4IDEuOTY3LS4yMDcuODg3LS43NjMgMS40MTQtMS41OCAxLjgyMiAwIC4wMzMuMDE2LjA1NC4wMjEuMDg1LjAxNS4xMDEtLjA0LjEzLS4xMjQuMTQ3LS40NS4wODktLjgzOC4yNzQtMS4xNTMuNjI5LS4zNjUuNDExLS41NTYuODY1LS40NTEgMS40MjguMSA1MzguNDI2LjkzMS45NSAxLjEyNi4wOTcuMDQ3LjEzOS4wODMuMDY3LjE3MS0uMzI5LjQwNy0uNDA1Ljg1OS0uMjk1IDEuMzk3LjE3NC44NTguNzI0IDEuMzE3IDEuNTk1IDEuNDQ2LjIzNS4wMzUuMzYyLjA4MS4zNzQuMzAxLjAxNy4zMjctLjM1OC4zMjItLjc4My40OC0xLjAwNS4zNzItMS40My0xLjEyNC0xLjcxNiAyLjAyMS0uMTkzLjYwNy0uMjgzIDEuMTQxLS42MyAxLjUzNGE5Ljk5IDkuOTkgMCAwIDEtNS4wMDItOC42NDFjMC0zLjU4IDEuODU3LTYuNzE0IDQuNjU3LTguNTU2eiIvPjwvc3ZnPg==";
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">
                        {testimonials[activeIndex].author}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[activeIndex].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              disabled={animating}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (animating) return;
                  setAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setAnimating(false), 500);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-primary w-6" 
                    : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              disabled={animating}
              className="rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
