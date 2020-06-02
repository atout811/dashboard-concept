import React from "react";
import EventCard from "./EventCard";

const data = [
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },

  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
  {
    name: "workshop",
    description: "bla blablablalbalblablablablalbalbalblalbalbalbal",
  },
];

export default function EventPage() {
  return (
    <div
      className="card-container"
      style={{
        display: "flex",
        margin: "20px",
        justifyContent: "center",
        maxHeight: "450px",
        flexWrap: "wrap",
      }}
    >
      {data.map(dat => (
        <EventCard data={dat} />
      ))}
    </div>
  );
}
