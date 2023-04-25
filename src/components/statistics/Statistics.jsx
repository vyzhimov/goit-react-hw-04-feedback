import PropTypes from 'prop-types';
import { StatisticsWrapper, Marker } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsWrapper>
      <Marker>
        Good: <span>{good}</span>
      </Marker>
      <Marker>
        Neutral: <span>{neutral}</span>
      </Marker>
      <Marker>
        Bad: <span>{bad}</span>
      </Marker>
      <Marker>
        Total: <span>{total}</span>
      </Marker>
      <Marker>
        Positive percentage:
        <span
          style={
            positivePercentage > 50 ? { color: 'green' } : { color: 'red' }
          }
        >
          {` ${positivePercentage}%`}
        </span>
      </Marker>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
