function details({ result }) {
  return <div>hotel name: {result.name}</div>;
}

export async function getServerSideProps(content) {
  const res = await fetch(`http://localhost:1337/hotels/${content.params.id}`);
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
}

export default details;
