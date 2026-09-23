import {
  CodeXml,
  Smartphone,
  ShoppingCart,
  BrainCircuit,
  Zap,
  ChartNoAxesCombined,
  Layers,
  Building2,
  Network,
  PenTool,
  Search,
  Cloud,
} from 'lucide-react';
const icons = {
  code: CodeXml,
  phone: Smartphone,
  cart: ShoppingCart,
  brain: BrainCircuit,
  bolt: Zap,
  chart: ChartNoAxesCombined,
  layers: Layers,
  building: Building2,
  network: Network,
  pen: PenTool,
  search: Search,
  cloud: Cloud,
};
export function ServiceIcon({ name, size = 27 }: { name: string; size?: number }) {
  const Icon = icons[name as keyof typeof icons] || CodeXml;
  return <Icon size={size} strokeWidth={1.3} />;
}
