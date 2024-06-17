import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

export const CodeBlock = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => {
  return (
    <div className="mb-4 mt-6 relative rounded-lg font-mono text-sm">
      <div className="flex justify-end py-1 pr-3 bg-zinc-600 text-gray-300 rounded-t-lg">
        <CopyButton>{children}</CopyButton>
      </div>
      <pre
        className={cn("overflow-x-auto bg-black py-4 rounded-b-lg", className)}
        {...props}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
};
