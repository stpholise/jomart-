import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const PortableTextRender = ({ value }: { value: PortableTextBlock[] }) => {
  return (
    <div>
      <PortableText
        value={value}
        components={{
          block: {
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold mt-6">{children} </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-bold mt-4  ">{children} </h3>
            ),
            normal: ({ children }) => (
              <p className="text-sm  pt-2"> {children}</p>
            ),
            li: ({ children }) => (
              <li className="text-amber-300">{children}</li>
            ),
          },
          list: {
            bullet: ({ children }) => (
              <ul className="mt-3.5 text-sm px-8">{children} </ul>
            ),
          },
          listItem: {
            bullet: ({ children }) => <li className="list-disc mt-1">{children}</li>,
          },
        }}
      />
    </div>
  );
};

export default PortableTextRender;
