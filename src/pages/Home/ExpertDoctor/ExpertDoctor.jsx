import { useEffect, useState } from "react"
import ExpertDocCard from "./ExpertDocCard"

const ExpertDoctor = () => {
  const [doctor, setDoctor] = useState([])

  useEffect(() => {
    fetch("doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctor(data))
  }, [])

  return (
    <div className="text-center my-5">
      <h2 className="text-[40px] font-bold">Our Expert Doctors</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br />{" "}
        quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        {doctor.map((doc) => (
          <ExpertDocCard key={doc._id} doc={doc}></ExpertDocCard>
        ))}
      </div>
    </div>
  )
}

export default ExpertDoctor
