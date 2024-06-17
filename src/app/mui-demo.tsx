import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import NiceIcon from '@mui/icons-material/ThreeDRotation';

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
