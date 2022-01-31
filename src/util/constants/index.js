import { nanoid } from "nanoid";

export const TABS = [
  { 
    content: {
      header: `Donec vitae`,
      message: `Ut tincidunt tincidunt erat. Fusce convallis metus id felis luctus adipiscing. Vivamus quis mi. Nullam vel sem. Morbi ac felis.`,
      subMessage: `Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.`,
      footer: ``,
    },
    controls: 'tincidunt',
    hidden: false,
    id: 'tincidunt',
    key: nanoid(),
    label: 'Tincidunt',
    selected: true,
  },
  { 
    content: {
      header: `Donec sodales sagittis`,
      message: `Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.`,
      subMessage: ``,
      footer: ``,
    },
    controls: 'sodales',
    hidden: true,
    id: 'sodales',
    key: nanoid(),
    label: 'Sodales',
    selected: false,
  },
]