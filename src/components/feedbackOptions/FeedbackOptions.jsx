import PropTypes from 'prop-types';

import { upFirstLetter } from 'utils/upFirstLetter';
import { ButtonContainer, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {upFirstLetter(option)}
        </Button>
      ))}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
