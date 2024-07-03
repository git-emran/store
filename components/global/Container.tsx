import { cn } from "@/lib/utils";

function Container({
  children,
  ClassName,
}: {
  children: React.ReactNode;
  ClassName?: String;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8", ClassName)}>
      {children}
    </div>
  );
}

export default Container;
