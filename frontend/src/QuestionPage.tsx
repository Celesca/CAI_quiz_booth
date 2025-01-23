import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

// Question Page
const QuestionPage: React.FC = () => {
    const { questionId } = useParams<{ questionId: string }>();
    const navigate = useNavigate();
  
    const markAsFinished = () => {
      // Get existing finished questions from local storage
      const storedFinished = localStorage.getItem('finishedQuestions');
      const finishedQuestions = storedFinished ? JSON.parse(storedFinished) : [];
  
      // Add the current question to the finished list and save to local storage
      if (questionId) {
        finishedQuestions.push(parseInt(questionId));
      }
      localStorage.setItem('finishedQuestions', JSON.stringify(finishedQuestions));
  
      // Navigate back to the home page
      navigate('/');
    };
  
    return (
      <div>
        <h1>Question {questionId}</h1>
        <p>This is the content of question {questionId}.</p>
        <button onClick={markAsFinished}>Mark as Finished</button>
      </div>
    );
  };

export default QuestionPage;