import React from "react";

import Lectures from "../data/lectures.json";

type Props = {
  date: string;
}

interface Lecture {
  id: number;
  date: string
  challenge: {
    name: string;
    time: string;
  }
}

const getLecturesByDate = (date: string) => {
  return Object.values(Lectures).filter((Lecture: Lecture) => {
    return Lecture.date === date;
  });
};

const LecturesDay: React.FC<Props> = (date) => {
  const [challengeName, setChallengeName] = React.useState(getLecturesByDate(date.date));

  React.useEffect(() => {
    setChallengeName(getLecturesByDate(date.date));
  }, [date]);

  return (
    <div className="lecturesDay">
      <p className="lecturesDay__title">Lecture day web :
        <span className='text-normal'> {challengeName[0].challenge.name}</span>
      </p>
    </div>
  );
}

export default LecturesDay;
