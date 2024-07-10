import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="carrlox_ann" name="CarrloX" isFollowing={true}/>
      <TwitterFollowCard userName="paimonaUwU" name="Paimon" isFollowing={false}/>
    </section>
  );
}
