import './style.css';
// () => { }
const MyComponent = () => {
  return (
      <>
          <div className="child"
              style={
              {
                borderRadius: "10px"
              }
          }
          >Anh Ben say hi</div>
          <div>Hello !</div>
      </>
  );
}
export default MyComponent;