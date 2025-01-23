import { useEffect, useState } from "react";
import { Link } from "react-router";

// Home Page
const HomePage: React.FC = () => {
    const [finishedQuestions, setFinishedQuestions] = useState<number[]>([]);
  
    useEffect(() => {
      // Load finished questions from local storage
      const storedFinished = localStorage.getItem('finishedQuestions');
      setFinishedQuestions(storedFinished ? JSON.parse(storedFinished) : []);
    }, []);
  
    const questions = [1, 2, 3, 4, 5, 6, 7];
  
    return (
      <div className="flex">
        <h1>Q&A Website</h1>
        <ul>
          {questions.map((question) => (
            <li key={question}>
              <Link to={`/question/${question}`}>Question {question}</Link>{' '}
              {finishedQuestions.includes(question) && '✓'}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default HomePage;