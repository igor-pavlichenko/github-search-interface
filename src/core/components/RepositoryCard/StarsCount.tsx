import { Grid } from '@mui/joy';
import { RxStar } from 'react-icons/rx';

function formatStarsCount(count: number) {
  if (count < 1000) return count;

  const roundedNum = (count / 1000).toFixed(1);
  return roundedNum + 'k';
}

type Props = {
  count: number;
};

const StarsCount = ({ count }: Props) => {
  return (
    <Grid container alignItems="center" gap="0.3rem">
      <RxStar fontSize="0.9rem" />
      <span>{formatStarsCount(count)}</span>
    </Grid>
  );
};

export default StarsCount;
