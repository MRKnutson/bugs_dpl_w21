// created_at: "2021-12-01T18:55:28.097Z"
// description: "2020"
// id: 1
// name: "Covid-19!"
// updated_at: "2021-12-02T18:38:43.644Z"

const Bug = (props) => {
  const { created_at, description, id, name, updated_at } = props;
  return (
    <div>
      <p>props: {JSON.stringify(props)}</p>
      <p>name: {name}</p>
      <p>name: {props.name}</p>
    </div>
  );
};
export default Bug;
