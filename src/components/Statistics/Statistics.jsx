import styles from '../Statistics/Statistics.module.css';

const Statistics = ({
  goodValue,
  neutralValue,
  badValue,
  total,
  goodPercentage,
}) => {
  return (
    <>
      <p className={styles.statisticText}>Good: {goodValue}</p>
      <p className={styles.statisticText}>Neutral: {neutralValue}</p>
      <p className={styles.statisticText}>Bad: {badValue}</p>
      <p className={styles.statisticText}>Total: {total}</p>
      <p className={styles.statisticTotal}>
        Positive feedback: {goodPercentage}%
      </p>
    </>
  );
};

export default Statistics;
