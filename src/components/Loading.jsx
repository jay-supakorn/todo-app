const Loading = (props) => (
  <div
    className={`fixed bg-white z-50 flex h-screen w-screen justify-center items-center ${
      props.opacity ? "bg-opacity-50" : null
    }`}
  >
    Loading...
  </div>
);

export default Loading;
