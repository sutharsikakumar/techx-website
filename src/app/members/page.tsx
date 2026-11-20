import type { Metadata } from 'next';
import { StubPage } from '@/components/StubPage';
import { stubPages } from '@/content';

export const metadata: Metadata = { title: `${stubPages.members.heading} | TechX` };

export default function MembersPage() {
  return <StubPage {...stubPages.members} />;
}
