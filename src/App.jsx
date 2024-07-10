import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing={true}
        userName="carrlox_ann">
        CarrloX
      </TwitterFollowCard>

      <TwitterFollowCard
        userName="paimonaUwU"
        children={"paimon"}
        isFollowing={false}>
        <strong>Paimon</strong>
      </TwitterFollowCard>
    </section>
  );
} 
