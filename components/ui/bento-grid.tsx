import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

type BentoCardProps = {
  name: string;
  className: string;
  background: ReactNode;
  Icon: LucideIcon;
  description: string;
  content?: ReactNode;
  layout?: 'default' | 'reverse';
};

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  content,
  layout = 'default',
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col overflow-hidden rounded-xl h-[22rem]",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div>{background}</div>
    {layout === 'default' ? (
      <div className="z-10 flex flex-col p-6 h-full">
        <div className="flex-1">{content}</div>
        <div className="flex items-center gap-4 mt-auto">
          <Icon className="h-8 w-8 text-neutral-700 dark:text-neutral-300 transition-transform duration-300 group-hover:scale-125" />
          <div>
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
              {name}
            </h3>
            <p className="text-sm text-neutral-400">{description}</p>
          </div>

        </div>
      </div>
    ) : (
      <div className="z-10 flex flex-col p-6 h-full">
        <div className="flex items-center gap-4 mb-4">
          <Icon className="h-8 w-8 text-neutral-700 dark:text-neutral-300 transition-transform duration-300 group-hover:scale-125" />
          <div>
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
              {name}
            </h3>
            <p className="text-sm text-neutral-400">{description}</p>
          </div>
        </div>
        <div className="flex-1">{content}</div>
      </div>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
