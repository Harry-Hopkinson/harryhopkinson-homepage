import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import particlesOptions from "./particles.json";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => particlesOptions as ISourceOptions, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      height="100%"
      width="100%"
      style={{ position: "fixed", zIndex: -1, top: 0, left: 0 }}
    />
  );
};

export default ParticlesComponent;
