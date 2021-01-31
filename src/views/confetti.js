import React, { useEffect } from 'react'
import { start } from "../services/confetti-services";

function Confetti() {
    useEffect(() => {
      start();
    });
    return <canvas id="canvas" />;
  }

export default Confetti
