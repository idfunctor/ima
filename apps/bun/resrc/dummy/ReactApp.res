@genType
module App = {
  // This sample forces an import of Belt.*, so that CI builds can ensure that
  // Melange has been installed correctly for JS bundlers to be able to find it.
  @react.component
  let make = () => {
    <div>
      {React.string("Hello World!")}
    </div>
  }
};

switch ReactDOM.querySelector("#root") {
  | Some(root) => {
    let root = ReactDOM.Client.createRoot(root)
    ReactDOM.Client.Root.render(root, <App />)
  } 
  | None =>
    Js.Console.error(
      "Failed to start React: couldn't find the #root element",
    )
}