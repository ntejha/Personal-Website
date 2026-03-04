"use client";

import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export interface SplineSceneProps {
    readonly scene: string;
    readonly className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="flex h-full w-full items-center justify-center">
                    <span className="loader" />
                </div>
            }
        >
            <Spline scene={scene} className={className} />
        </Suspense>
    );
}
