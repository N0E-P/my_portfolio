import { useState, useEffect } from "react";

export default function ExampleCounter() {
  const [changingText, changeText] = useState(
    "Mon parcours trépidant dans la blockchain."
  );
  var words = [
    "La raison pour laquelle je me suis retrouvé développeur alors que je suis en fac de sport.",
    "Les projets que j'ai réalisé, avec toutes les galères par lequelles je suis passé.",
    "Mes compétences de développeur dont je suis plutot fier !",
    "Mon parcours trépidant dans la blockchain.",
  ];
  var number = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      changeText(words[number]);
      if (number < 3) {
        number = number + 1;
      } else {
        number = 0;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="py-2 text-gray-700">
        J’ai fais ce portfolio pour présenter : {changingText}
      </p>
    </div>
  );
}
