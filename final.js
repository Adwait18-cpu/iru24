const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
    {
        name: "Mr. Sandip Jain",
        position: "Founder, GeeksForGeeks",
        photo: "assets/speakers/gfg.jpg",
        text:
          "Last year, I had the incredible opportunity to visit YCCE as a speaker for the keynote speech at the ‘Innovations R Us’. It was a truly enriching experience, engaging with the bright minds at YCCE and sharing insights on innovation and its importance in our rapidly evolving world. I was impressed by the enthusiasm and passion of the students and faculty, and I look forward to more such interactions in the future.",
      },
  
  {
    name: "Mr. Nikhil Chandwani",
    position: "CEO, Walnut Discoveries",
    photo: "assets/speakers/nikhil_c.jpeg",
    text:
      "It was truly an honor to be a speaker at YCCE’s keynote speech event “Innovations ‘R’ Us” last year. Sharing my insights and experiences with the brilliant minds at YCCE was an enriching experience, and I look forward to more opportunities to inspire and connect with the next generation of innovators.",
  },
  {
    name: "Mrs. Arushi Sana",
    position: "Founder, NYK Daily",
    photo: "assets/speakers/arushi_s.jpeg",
    text:
      "In the previous year, I was fortunate to be a guest speaker at YCCE, presenting the keynote address at the “Innovations ‘R’ Us” event. It was a remarkable experience, sharing my perspectives and concepts with the dynamic audience at YCCE. The innovation and enthusiasm displayed by both students and faculty left a lasting impression on me. I eagerly anticipate future opportunities to connect with the brilliant minds at YCCE.",
  },

];

let index = 1;

const updateTestimonial = () => {
  const { name, position, photo, text } = testimonials[index];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  index++;
  if (index > testimonials.length - 1) index = 0;
};

setInterval(updateTestimonial, 5000);
