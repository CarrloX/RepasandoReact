import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        userName="carrlox_ann">
        CarrloX
      </TwitterFollowCard>

      <TwitterFollowCard
        userName="paimonaUwU"
        children={"paimon"}>
        <strong>Paimon</strong>
      </TwitterFollowCard>

      <TwitterFollowCard
        userName="paimonaUwU"
        children={"paimon"}>
        <strong>Paimon</strong>
      </TwitterFollowCard>

    </section>
  );
} 
