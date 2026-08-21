import {
  ArrowRight,
  AtSign,
  Blocks,
  CheckCircle2,
  ChevronDown,
  Code,
  Compass,
  FilePenLine,
  Fingerprint,
  GitBranch,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Paintbrush,
  Palette,
  Radar,
  Rocket,
  Send,
  Share2,
  Smartphone,
  Terminal,
  X,
  type LucideIcon,
} from "lucide-react";

const icons = {
  arrow_forward: ArrowRight,
  terminal: Terminal,
  design_services: Palette,
  check_circle: CheckCircle2,
  progress_activity: Loader2,
  send: Send,
  expand_more: ChevronDown,
  location_on: MapPin,
  mail: Mail,
  code: Code,
  web: Globe,
  integration_instructions: Blocks,
  smartphone: Smartphone,
  brush: Paintbrush,
  fingerprint: Fingerprint,
  campaign: Megaphone,
  edit_document: FilePenLine,
  radar: Radar,
  architecture: Compass,
  rocket_launch: Rocket,
  close: X,
  menu: Menu,
  share: Share2,
  alternate_email: AtSign,
  hub: GitBranch,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
};

function sizeFromClass(className: string) {
  const explicit = className.match(/text-\[(\d+)px\]/);
  if (explicit) return Number(explicit[1]);
  if (className.includes("text-3xl")) return 30;
  if (className.includes("text-xl")) return 20;
  return 24;
}

export function Icon({ name, className = "" }: IconProps) {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      aria-hidden
      className={`shrink-0 ${className}`}
      size={sizeFromClass(className)}
      strokeWidth={1.75}
    />
  );
}
