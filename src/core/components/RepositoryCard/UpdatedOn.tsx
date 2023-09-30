import { Box, Grid, Tooltip } from '@mui/joy';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

type Props = { date: string };

const UpdatedOn = ({ date }: Props) => {
  return (
    <Grid>
      <Tooltip size="sm" title={new Date(date).toDateString()}>
        <Box>Updated {formatDistanceToNowStrict(new Date(date))} ago</Box>
      </Tooltip>
    </Grid>
  );
};

export default UpdatedOn;
