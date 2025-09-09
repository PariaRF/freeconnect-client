import { HiCollection, HiOutlineViewGrid, HiUsers } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, projects, users }) {
  return (
    <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-1 gap-x-8">
      <Stat
        color="blue"
        title="Users"
        value={users}
        icon={<HiUsers className="w-20 h-20" />}
      />

      <Stat
        color="green"
        title="Projects"
        value={projects}
        icon={<HiCollection className="w-20 h-20" />}
      />

      <Stat
        color="primary"
        title="Proposals"
        value={proposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
