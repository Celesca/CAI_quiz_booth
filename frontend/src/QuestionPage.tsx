import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import questions from "./questions.json";

// Question Page
const QuestionPage: React.FC = () => {
    const { questionId } = useParams<{ questionId: string }>();
    const navigate = useNavigate();

    const question = questionId ? questions.find(q => q.id === parseInt(questionId)) : undefined;
  
    const markAsFinished = () => {
      // Get existing finished questions from local storage
      const storedFinished = localStorage.getItem('finishedQuestions');
      const finishedQuestions = storedFinished ? JSON.parse(storedFinished) : [];
  
      // Add the current question to the finished list and save to local storage
      if (questionId) {
        if (questionId) {
            finishedQuestions.push(parseInt(questionId));
        }
      }
      localStorage.setItem('finishedQuestions', JSON.stringify(finishedQuestions));
  
      // Navigate back to the home page
      navigate('/');
    };
  
    return (
      <div>
        <h1>Question {questionId}</h1>
        <p>{question ? question.content : 'Question not found.'}</p>
        <button onClick={markAsFinished}>Mark as Finished</button>
      </div>
    );
  };

export default QuestionPage;