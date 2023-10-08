import { useEffect, useState } from "react";

function UseData() {
  const [whyUs, setWhyUs] = useState([]);
  const [testimonials, setTestimonial] = useState([]);
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const data = {
    whyUs,
    testimonials,
    products,
  };

  return data;
}

export default UseData;
