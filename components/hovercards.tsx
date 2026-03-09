import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaVoicemail } from "react-icons/fa";

const HOVER_CARDS = [
  { label: "Python", content: "Beginner → Advanced projects", icon: <FaVoicemail style={{ width: "25px", height: "25px" }}/> },
  { label: "Java", content: "OOP & backend experience" },
  { label: "C#", content: "Windows apps & Unity" },
];


export function HoverCardSides() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {HOVER_CARDS.map((card, i) => (
        <HoverCard key={i} openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="outline">{card.label}</Button>
          </HoverCardTrigger>
          <HoverCardContent side="bottom">
            <div className="flex flex-col gap-1 p-2">
              <p>{card.content}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
