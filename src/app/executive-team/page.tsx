import type { Metadata } from 'next';
import { StubPage } from '@/components/StubPage';
import { stubPages } from '@/content';

export const metadata: Metadata = { title: `${stubPages.executiveTeam.heading} | TechX` };

export default function ExecutiveTeamPage() {
  return <StubPage {...stubPages.executiveTeam} />;
}
