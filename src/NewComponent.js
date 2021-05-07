const NewComponent = (props) => {
  console.log(props);

  return (
    <div>
      <p style={{ color: props.color }}>
        <strong>{props.message}</strong>
      </p>
    </div>
  );
};

export default NewComponent;
