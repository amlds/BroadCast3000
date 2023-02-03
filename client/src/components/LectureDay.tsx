import React from "react";

import Lectures from "../data/lectures.json";


interface Props {
  id: number;
  date: string;
  event: {
    name: string;
    start: string;
  }
}

const getLecturesByDate = (date: string) => {
  return Object.values(Lectures).filter((lecture) => {
    return lecture.date === date;
  });
}

const LecturesDay: React.FC = () => {
  const [date, setDate] = React.useState(Date);
  const [allLectures, setAllLectures] = React.useState(getLecturesByDate(date));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toISOString().slice(0, 10));
    }, 10000);
    return () => clearInterval(interval);
  }, [date]);

  React.useEffect(() => {
    setAllLectures(getLecturesByDate(date));
  }, [date]);

  return (
    <div className="lecturesDay">
      <p className="lecturesDay__title">Les prochaines conférences :</p>
      <div className="lecturesDay__content">
        {Object.values(allLectures).map((lecture) => (
          <p>{lecture.challenge.name}</p>
        ))}
      </div>
    </div>
  );
}

export default LecturesDay;
