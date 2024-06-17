Updates named imports from MUI icons to direct imports.

## Example

### Before

```ts
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
```

### After

```ts
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
```

