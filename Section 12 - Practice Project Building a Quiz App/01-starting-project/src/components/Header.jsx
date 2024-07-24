import quizLogo from "../assets/quiz-logo.png";
function Header() {
  return (
    <header>
      <img src={quizLogo} alt="Logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}

export default Header;
