import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import PropTypes from 'prop-types';

const labels = {
  // 0.5: 'Useless',
  1: '1.0',
  // 1.5: 'Poor',
  2: '2.0',
  // 2.5: 'Ok',
  3: '3.0',
  // 3.5: 'Good',
  4: '4.0',
  // 4.5: 'Excellent',
  5: '5.0',
};





function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating({children}) {
  const [value, setValue] = React.useState(children);
  const [hover, setHover] = React.useState(-1);


  return (
    <Box className="flex justify-around mx-auto"
      sx={{
        width: 'full',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

HoverRating.propTypes = {
  children:PropTypes.node
}