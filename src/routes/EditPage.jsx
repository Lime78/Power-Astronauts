const EditPage = (props) => {
  return (
    <div>
      <h1>Edit Page</h1>
      <p>Editing the note with id of {props.match.params.id}</p>
    </div>
  );
}

export default EditPage;