import AuthOverlay from "./components/AuthModal"
import "./index.css"
import useGeneralStore from "./stores/generalStore"

function App() {
  const isLoginOpen = useGeneralStore((state) => state.isLoginOpen)
  return (
    <div className=" ">
      {isLoginOpen && (
        <>
          <AuthOverlay />
        </>
      )}{" "}
    </div>
  )
}

export default App