import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

const voteOptions = ['good', 'neutral', 'bad'];

const Vote = () => {
  const [votes, setVotes] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = votes;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedback = keyName => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = votes[keyName];
    return Number(((value / total) * 100).toFixed(2));
  };

  const leaveFeedback = keyName => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [keyName]: prevVotes[keyName] + 1,
    }));
  };

  const total = countTotalFeedback();

  const goodPercantage = countPositiveFeedback('good');
  const goodValue = votes['good'];
  const neutralValue = votes['neutral'];
  const badValue = votes['bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <div>
          <FeedbackOptions
            options={voteOptions}
            leaveFeedback={leaveFeedback}
          />
        </div>
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          'No feedback given'
        ) : (
          <Statistics
            goodValue={goodValue}
            neutralValue={neutralValue}
            badValue={badValue}
            goodPercantage={goodPercantage}
            total={total}
          />
        )}
      </Section>
    </div>
  );
};

export default Vote;
