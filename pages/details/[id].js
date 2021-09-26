function details({ result }) {
  return <div>hotel name: {result.name}</div>;
}

export async function getServerSideProps(content) {
  console.log(content);
  const res = await fetch(`http://localhost:1337/Hotels/${content.params.id}`);
  const result = await res.json();
  console.log("RESULT: ", result);

  return {
    props: {
      result,
    },
  };
}

export default details;
