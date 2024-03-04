import './App.css';
import Card from './Card'
import cis1200Image from './images/cis1200.jpg';
import cis1600Image from './images/cis1600.jpg';
import phys0150Image from './images/physics0150.jpg';
import calcblueImage from './images/calcblue.jpg';

const cardData = [
  {
    id: 1,
    title: "1600 Survival",
    body: "Latex & Proofs",
    imageUrl: cis1600Image,
    linkToProject: "https://chat.openai.com/g/g-E19wQGXTB-1600-survival",
  },
  {
    id: 2,
    title: "Physics Pal",
    body: "Mechanical Physics",
    imageUrl: phys0150Image,
    linkToProject: "https://chat.openai.com/g/g-627ChRtQt-phys-0150-ai",
  },
  {
    id: 3,
    title: "Oh! Camel",
    body: "Ocaml Co-Pilot",
    imageUrl: cis1200Image,
    linkToProject: "https://chat.openai.com/g/g-TDDkupRFD-oh-camel",
  },
  {
    id: 4,
    title: "CalcBlue Bot",
    body: "Math Wizard",
    imageUrl: calcblueImage,
    linkToProject: "https://chat.openai.com/g/g-hC9COEzas-calc-blue-bot",
  },
  // ... add more cards as needed
];

const App = () => {

  return (
    <div className="App">
      <h1>Codepath: Project 1</h1>
      <h1>The Penn GPT Store 🚀🌏</h1>
      <h3>The Official Upenn GPT STORE </h3>
      <div className="card-container">
        <section style={{ fontFamily: 'montserrat', textDecoration: 'none'}}>
        <h4>
          Welcome to the Penn GPT Store! We are a group of students at the University of Pennsylvania who are passionate about using AI to help students learn. We have built a number of AI models that can help you learn a variety of subjects. Please feel free to explore our store and check out our AI models. We hope you find them helpful!
        </h4>          
        </section>
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            body={card.body}
            imageUrl={card.imageUrl}
            linkToProject={card.linkToProject}
          />
        ))}
      </div>
      <footer>
      All rights Reserved  &#169; 2024 Penn GPT Store by Sean Donovan
      </footer>
    </div>
  )
}

export default App