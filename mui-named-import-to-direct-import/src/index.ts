import type { Api } from '@codemod.com/workflow';

export async function workflow({ files }: Api) {
  await files('**/*.{js,jsx,ts,tsx}')
    .js()
    .astGrep({
      rule: {
        any: [
          { pattern: "import { $$$_ } from '@mui/icons-material'" },
          { pattern: 'import { $$$_ } from "@mui/icons-material"' },
        ],
      },
    }).ai`
      Migrate named imports from material ui icons to direct imports.
      Make sure preserve import names.

      Example before:
      import { AccessAlarm as AccessAlarmIcon, ThreeDRotation } from '@mui/icons-material'

      Example after:
      import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
      import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
    `;
}
