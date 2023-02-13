import { ThemeProvider } from "@mui/material"
import { addDecorator } from "@storybook/react"
import {theme} from '../src/Themes/theme'
import { addons } from "@storybook/addons"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    theme,
  }
}

addDecorator(story => (<ThemeProvider theme={theme}>
  {story()}
  </ThemeProvider>
))

addons.setConfig({
  theme,
})

