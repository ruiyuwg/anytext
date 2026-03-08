import { Zap, FileText, Clock, Eye, Wifi, HardDrive } from 'lucide-react'

const rows = [
    [
        {
            icon: Zap,
            title: 'Zero dependencies',
            description: 'Uses only Node.js built-ins. No native modules, no runtime bloat.',
        },
        {
            icon: FileText,
            title: 'Plain markdown',
            description: 'Output goes straight to stdout. No JSON wrapping, no protocol overhead.',
        },
        {
            icon: Clock,
            title: 'Sub-50ms cached reads',
            description: 'Local cache at ~/.anytext means repeat calls return instantly.',
        },
    ],
    [
        {
            icon: Eye,
            title: 'Transparent registry',
            description: 'Every doc is in the repo. Audit, fork, or contribute directly.',
        },
        {
            icon: Wifi,
            title: 'Offline capable',
            description: 'Works without internet after the first cache population.',
        },
        {
            icon: HardDrive,
            title: 'Single install',
            description: 'One CLI, one skill — instant access to all libraries.',
        },
    ],
]

export default function Features() {
    return (
        <section className="border-b">
            <div className="px-6 py-16 md:py-24">
                <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">Why anytext?</h2>
                    <p className="text-muted-foreground">Coding agents hallucinate outdated APIs when they can&apos;t access docs. Existing solutions all have tradeoffs.</p>
                </div>
            </div>

            <div className="divide-y border-t">
                {rows.map((row, i) => (
                    <div key={i} className="grid divide-x sm:grid-cols-3">
                        {row.map((feature) => (
                            <div key={feature.title} className="space-y-2 p-8">
                                <div className="flex items-center gap-2">
                                    <feature.icon className="size-4" />
                                    <h3 className="text-sm font-medium">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}
