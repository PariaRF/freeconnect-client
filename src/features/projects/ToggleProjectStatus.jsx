import { useState } from "react";
import Toggle from "../../ui/Toggle";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";

function ToggleProjectStatus({ project }) {
  const { isUpdatingStatus, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({
      id: project._id,
      data: { status },
    });
  };

  return (
    <div>
      {isUpdatingStatus ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          label={
            project.status === "OPEN" ? (
              <span className="text-success">Open</span>
            ) : (
              <span className="text-error">Close</span>
            )
          }
          enabled={project.status === "OPEN" ? true : false}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
