import { buildAllStructuredData } from "@/lib/seo";

export default function StructuredData() {
  const schemas = buildAllStructuredData();

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
