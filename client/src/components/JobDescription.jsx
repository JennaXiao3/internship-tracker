import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Grid, Link, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const JobDescription = ({
  description,
  requirements = null,
  responsibilities = null,
  externalLink = null,
}) => {
  const [readMore, setReadMore] = useState(false);
  function toggle() {
    setReadMore((a) => !a);
  }
  const centered = {
    display: 'flex',
    justifyContent: 'center',
    height: '1vh',
  };
  const FullDescription = () => (
    <Grid
      container
      direction="column"
      spacing={5}
      sx={{ lineHeight: '1.25rem' }}
    >
      <Grid item>
        <Typography variant="body3">{description}</Typography>
      </Grid>
      {requirements && (
        <Grid item>
          <Typography variant="h6" marginBottom={3}>
            Requirements
          </Typography>
          <Typography variant="body3">{requirements}</Typography>
        </Grid>
      )}
      {responsibilities && (
        <Grid item>
          <Typography variant="h6" marginBottom={3}>
            Responsibilities
          </Typography>
          <Typography variant="body3">{responsibilities}</Typography>
        </Grid>
      )}
      <Grid item sx={centered} alignItems="center" my={2}>
        <IconButton onClick={toggle}>
          <KeyboardArrowUpOutlinedIcon />
        </IconButton>
      </Grid>
      {externalLink && (
        <Grid item sx={centered} pb={8}>
          <Link
            component={RouterLink}
            to={externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="body1">
              Continue to external listing to read full description
            </Typography>
          </Link>
        </Grid>
      )}
    </Grid>
  );
  return (
    <Grid container direction="row" spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h6" marginBottom={3}>
          Job description
        </Typography>
        {readMore ? (
          <FullDescription />
        ) : (
          <Typography
            variant="body3"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </Typography>
        )}
        {readMore ? null : (
          <Link component="button" onClick={toggle}>
            <Typography variant="body1" marginTop={3}>
              Read More
            </Typography>
          </Link>
        )}
      </Grid>
    </Grid>
  );
};

export default JobDescription;
