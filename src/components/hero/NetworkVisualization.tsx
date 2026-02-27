import { networkNodes, networkConnections, pulseNodeIndices } from './heroData';

export function NetworkVisualization() {
    return (
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            {/* Connection lines — drawn via CSS stroke-dashoffset trick */}
            {networkConnections.map(([from, to], i) => {
                const a = networkNodes[from];
                const b = networkNodes[to];
                const len = Math.hypot(b.x - a.x, b.y - a.y).toFixed(2);
                return (
                    <line
                        key={`l-${i}`}
                        x1={a.x}
                        y1={a.y}
                        x2={b.x}
                        y2={b.y}
                        stroke="#D97706"
                        strokeWidth="0.08"
                        strokeOpacity="0.35"
                        strokeDasharray={len}
                        strokeDashoffset={len}
                        style={{
                            animation: `network-draw 1.2s ${i * 0.02}s ease-out forwards`,
                        }}
                    />
                );
            })}

            {/* Network nodes */}
            {networkNodes.map((node, i) => (
                <circle
                    key={`n-${i}`}
                    cx={node.x}
                    cy={node.y}
                    r="0.7"
                    fill={i % 3 === 0 ? '#F59E0B' : '#D97706'}
                    fillOpacity={i % 3 === 0 ? 0.6 : 0.35}
                    className="animate-node-pop"
                    style={{ animationDelay: `${0.3 + i * 0.04}s` }}
                />
            ))}

            {/* Pulse rings on key nodes */}
            {pulseNodeIndices.map((nodeIdx, i) => {
                const node = networkNodes[nodeIdx];
                return (
                    <circle
                        key={`p-${i}`}
                        cx={node.x}
                        cy={node.y}
                        r="1.5"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="0.12"
                        className="animate-pulse-ring"
                        style={{ animationDelay: `${2 + i * 0.6}s` }}
                    />
                );
            })}
        </svg>
    );
}
