import { medicines } from "../medicines";
import { notFound } from "next/navigation";
import MedicineClient from "./MedicineClient";

type Props = {
  params: Promise<{ medicine: string }>;
};

export async function generateStaticParams() {
  return medicines.map((m) => ({ medicine: m.id }));
}

export async function generateMetadata({ params }: Props) {
  const { medicine } = await params;
  const med = medicines.find((m) => m.id === medicine);
  if (!med) return { title: "Not Found" };

  return {
    title: med.metaTitle,
    description: med.metaDescription,
    alternates: {
      canonical: `https://dosagefordogs.com/${med.id}`,
    },
    openGraph: {
      title: med.metaTitle,
      description: med.metaDescription,
      url: `https://dosagefordogs.com/${med.id}`,
      siteName: "DosageForDogs",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: med.metaTitle,
      description: med.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function MedicinePage({ params }: Props) {
  const { medicine } = await params;
  const med = medicines.find((m) => m.id === medicine);

  if (!med) notFound();

  return <MedicineClient med={med} allMedicines={medicines} />;
}