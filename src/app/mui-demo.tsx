import {
  AccessAlarm as AccessAlarmIcon,
  ThreeDRotation as NiceIcon,
} from '@mui/icons-material';

export function MuiDemo({ title }: { title: string }) {
  return (
    <>
      {title}
      <AccessAlarmIcon />
      <NiceIcon />
    </>
  );
}

export default MuiDemo;
