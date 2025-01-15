// src/components/UserPanel.tsx
import { useState } from 'react';

type UserPanelProps = {
  teams: string[];
  matches: { team1: string; team2: string; userPick: string | null }[];
};

const HomePage = () => {

  return (
    <div>
      <h1>A home page</h1>
    </div>
  );
};

export default HomePage;
