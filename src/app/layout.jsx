import 'normalize.css'
import StyledJsxRegistry from './registry'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  )
}
