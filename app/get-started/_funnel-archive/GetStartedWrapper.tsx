'use client';

import { Suspense } from 'react';
import GetStartedClient from './GetStartedClient';

function LoadingFallback() {
  return (
    <div className="funnel-step">
      <div className="funnel-step__container">Loading...</div>
    </div>
  );
}

export default function GetStartedWrapper() {
  return (
    <div className="get-started-funnel-wrapper">
      <Suspense fallback={<LoadingFallback />}>
        <GetStartedClient />
      </Suspense>
    </div>
  );
}

