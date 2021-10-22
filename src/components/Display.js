import React from 'react';
import Card from './Card';

const projects = [
  {
    name: 'S.H.I.E.L.D. Database',
    description: 'Displays information on searched comic book characters using data from Superhero API (Requires CORS Anywhere access to use.)',
    image: 'shield-logo.png',
    id: 1,
  },
  {
    name: "CalenDon't",
    description: '"The Antisocial Social Planner"',
    image: 'calendont.JPG',
    id: 2,
  },
  {
    name: 'Workday Scheduler',
    description: 'A listmaker that marks passed hours in real time.',
    image: 'workday.PNG',
    id: 3,
  },
  {
    name: 'Flag Quiz',
    description: 'A listmaker that marks passed hours in real time.',
    image: 'globe_flag.png',
    id: 4,
  },
  {
    name: 'Password Generator',
    description: 'A listmaker that marks passed hours in real time.',
    image: '03.png',
    id: 5,
  },
  {
    name: 'Weather Dashboard',
    description: 'A listmaker that marks passed hours in real time.',
    image: '',
    id: 6,
  },

];

export default function Display() {
  return (
    <div>
      {projects.map((item) => (
        <Card name={item.name} description={item.description} image={item.image} key={item.id} />
      ))}
    </div>
  );
}
