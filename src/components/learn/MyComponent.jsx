import './style.css';
// () => { }
const MyComponent = () => {
    // const ben = "123";
    // const ben = 23;
    // const ben = true; // boolean thi se khong in ra gi & undefined && null
    // const ben = [1, 2, 3, 4];
    const ben = {
        name: "Phan Nhu Ngoc",
        id: 123
    }

  return (
      <>
          <div className="child"
              style={
              {
                borderRadius: "110px"
              }
          }
          >Anh Ben say hi</div>
          <div>{ben.name}</div>
          <div>{ JSON.stringify(ben)}</div>
      </>
  );
}
export default MyComponent;