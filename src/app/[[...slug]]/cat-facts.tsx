export default async function CatFacts() {
  const catFacts = await fetch('https://cat-fact.herokuapp.com/facts').then(x => x.json());
  return (
    <div>
      Here are some cat facts from an RSC:
      <ul>
        {catFacts.slice(3).map((fact: any) => (
          <li key={fact._id}>{fact.text}</li>
        ))}
      </ul>
    </div>
  );
}
