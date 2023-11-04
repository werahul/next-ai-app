"use client"

import React from 'react';

const TimelineBar = ({ numberOfLines }: any) => {
  const lines = [];

  for (let i = 0; i < numberOfLines; i++) {
    const isFifthLine = (i + 1) % 5 === 0;
    const lineClass = isFifthLine ? 'timeline-line bigger' : 'timeline-line';

    lines.push(
      <div key={i} className={lineClass}></div>
    );
  }

  return (
    <div className="timeline-bar">
      {lines}
    </div>
  );
};

export default TimelineBar;
