import styles from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  const buttonElements = options.map(name => (
    <button
      className={styles.feedbackBtn}
      onClick={() => leaveFeedback(name)}
      key={name}
    >
      {name}
    </button>
  ));

  return buttonElements;
};

export default FeedbackOptions;
