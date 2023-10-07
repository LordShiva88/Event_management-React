import { useEffect, useState } from "react";

function UseData() {
  const [whyUs, setWhyUs] = useState([]);
  const [testimonials, setTestimonial] = useState([]);
  useEffect(() => {
    fetch("/whychoice.json")
      .then((res) => res.json())
      .then((data) => setWhyUs(data));
  }, []);
  useEffect(() => {
    fetch("/Testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  const data = {
    whyUs,
    testimonials,
  };

  return data;
}

export default UseData;
