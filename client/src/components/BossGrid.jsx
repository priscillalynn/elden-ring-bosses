import BossCard from "./BossCard";

const BossGrid = () => {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <BossCard />
        <BossCard />
        <BossCard />
        <BossCard />
        <BossCard />
      </div>
    );
    };

export default BossGrid