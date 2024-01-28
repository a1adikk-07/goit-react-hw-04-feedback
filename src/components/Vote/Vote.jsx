import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class Vote extends Component {
  // static voteOptions = ['good', 'neutral', 'bad'];
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedback(keyName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[keyName];
    return Number(((value / total) * 100).toFixed(2));
  }

  leaveFeedback = keyName => {
    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };
  render() {
    const total = this.countTotalFeedback();
    const goodPercentage = this.countPositiveFeedback('good');
    // const goodValue = this.state['good'];
    // const neutralValue = this.state['neutral'];
    // const badValue = this.state['bad'];

    return (
      <div>
        <Section title="Please leave feedback">
          <div>
            <FeedbackOptions
              options={Object.keys(this.state)}
              leaveFeedback={this.leaveFeedback}
            />
          </div>
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            'No feedback given'
          ) : (
            <Statistics
              goodValue={this.state.good}
              neutralValue={this.state.neutral}
              badValue={this.state.bad}
              goodPercentage={goodPercentage}
              total={total}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Vote;
