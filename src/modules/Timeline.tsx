import React from "react";
import "../App.css";
import '../index.css';

const Timeline: React.FC = () => {
  const germanColonialAchievements = [
    {
      year: 1884,
      event: "Deutsche Kolonien in Afrika werden offiziell gegründet.",
      description: "Der Deutsche Kaiser Wilhelm II. verkündete die Schaffung von Kolonien in Afrika.",
    },
    {
      year: 1885,
      event: "Gründung von Deutsch-Ostafrika.",
      description: "Die Kolonie Deutsch-Ostafrika (heute Teile von Tansania, Ruanda, und Burundi) wird gegründet.",
    },
    {
      year: 1890,
      event: "Bismarck gibt die Kolonialpolitik auf.",
      description: "Otto von Bismarck, der zuvor gegen Kolonialpolitik war, gibt seine Haltung auf und Deutschland expandiert weiter in Afrika.",
    },
    {
      year: 1904,
      event: "Herero-Aufstand in Deutsch-Südwestafrika.",
      description: "Ein Aufstand der Herero wird brutal von der deutschen Kolonialmacht niedergeschlagen.",
    },
    {
      year: 1910,
      event: "Schutzgebietsvertrag von Togo und Kamerun.",
      description: "Die Verträge über die deutsche Herrschaft über Kamerun und Togo werden weiter gestärkt.",
    },
  ];

  return (
    <div className="timeline-container">
      <h1>Deutsche Errungenschaften in der Afrikanischen Kolonialpolitik bis Heute (1910)</h1>
      <div className="timeline">
        {germanColonialAchievements.map((achievement, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-year">{achievement.year}</div>
            <div className="timeline-event">
              <h2>{achievement.event}</h2>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
