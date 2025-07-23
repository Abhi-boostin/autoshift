import { useState } from 'react';
import DarkVeil from './blocks/Backgrounds/DarkVeil/DarkVeil'
import Stepper, { Step } from './blocks/Components/Stepper/Stepper';
import StepWelcome from './blocks/Components/Stepper/steps/StepWelcome';
import StepSearch from './blocks/Components/Stepper/steps/StepSearch';
import StepNumberOfCycles from './blocks/Components/Stepper/steps/StepNumberOfCycles';
import StepEmail from './blocks/Components/Stepper/steps/StepEmail';
import StepFinal from './blocks/Components/Stepper/steps/StepFinal';

function App() {
  const [search, setSearch] = useState("");
  const [numberOfCycles, setNumberOfCycles] = useState(1);
  const [email, setEmail] = useState("");

  // Get server URL from Vite env
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const handleFinalStep = async () => {
    // Only proceed if both fields have values and email is valid
    if (!search || !email) return;
    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return;
    await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chatInput: search,
        email,
        numberOfCycles,
      }),
    });
  };

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <DarkVeil
        speed={2}
        hueShift={300}
        noiseIntensity={0}
        scanlineFrequency={4.4}
        scanlineIntensity={0.88}
        warpAmount={2.7}
      />
      {/* Title at the top */}
      <div className="absolute top-0 left-0 w-full flex justify-center z-10 pt-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white font-lexend whitespace-nowrap">
          WELCOME TO AUTOSHIFT
        </h1>
      </div>
      {/* Stepper centered vertically */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={handleFinalStep}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <StepWelcome />
          </Step>
          <Step>
            <StepSearch search={search} setSearch={setSearch} />
          </Step>
          <Step>
            <StepNumberOfCycles numberOfCycles={numberOfCycles} setNumberOfCycles={setNumberOfCycles} />
          </Step>
          <Step>
            <StepEmail email={email} setEmail={setEmail} />
          </Step>
          <Step>
            <StepFinal />
          </Step>
        </Stepper>
      </div>
    </div>
  )
}

export default App
