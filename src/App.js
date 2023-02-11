import tw, { styled, css } from "twin.macro"

function App() {
  const schoolLevel = "H"

  let startFlat
  let startSpread

  return (
    <>
      {(startFlat = Date.now())}
      <Wrapper schoolLevel={schoolLevel}>Hello World</Wrapper>
      {console.log("Flat: ", Date.now() - startFlat)}
      {(startSpread = Date.now())}
      <Wrapper2 schoolLevel={schoolLevel}>Hello World</Wrapper2>
      {console.log("Spread: ", Date.now() - startSpread)}
    </>
  )
}

export default App

const Wrapper = styled.div(({ schoolLevel }) =>
  [
    tw`w-screen h-screen`,
    {
      E: [
        tw`bg-red-500`,
        css`
          color: white;
        `,
      ],
      M: tw`bg-blue-600`,
      H: tw`bg-green-700`,
    }[schoolLevel],
  ].flat()
)

const Wrapper2 = styled.div(({ schoolLevel }) => [
  tw`w-screen h-screen`,
  ...{
    E: [
      tw`bg-red-500`,
      css`
        color: white;
      `,
    ],
    M: [tw`bg-blue-600`],
    H: [tw`bg-green-700`],
  }[schoolLevel],
])
