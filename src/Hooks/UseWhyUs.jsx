import { useEffect, useState } from "react";

function useWhyUs() {
  const [whyUs, setWhyUs] = useState([])

  useEffect(() => {
    fetch("/whychoice.json")
      .then((res) => res.json())
      .then((data) => setWhyUs(data));
  }, []);


  const data = {
    whyUs
  }

  return data
}

export default useWhyUs;