declare module JSX {
  interface IntrinsicElements {
    'inpost-geowidget': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        token: string
        language: string
        config: string
      },
      HTMLElement
    >
  }
}
