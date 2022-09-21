import Wordpress from "./guides/Wordpress";
import Support from "./guides/Support";
import Scale from "./guides/Scale";
import ControlPannel from "./guides/ControlPannel";
import SetupPerfromance from "./guides/SetupPerfromance";

function UserGuides() {
  return (
    <>
      <SetupPerfromance />
      <Wordpress />
      <Support />
      <Scale />
      <ControlPannel />
    </>
  );
}

export default UserGuides;
