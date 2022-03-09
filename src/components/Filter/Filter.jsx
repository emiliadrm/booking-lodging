import FilterLocation from "./FilterLocation";
import FilterDate from "./FilterDate";
import FilterRoom from "./FilterRoom";
import FilterPrice from "./FilterPrice";
import FilterClean from "./FilterClean";

export default function Filter() {
  return (
    <div className="FilterBox">
       <form className="barFiltroComponentStyle">
        <FilterLocation />
        <FilterDate />
        <FilterRoom />
        <FilterPrice />
        <FilterClean />
      </form>
    </div>
  );
}
  