import HomeIndex from "@/components/home/HomeIndex";
import { locales } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({
    lang: lang,
  }));
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return <HomeIndex lang={lang} />;
}
