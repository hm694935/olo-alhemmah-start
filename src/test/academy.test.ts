import { describe, expect, it } from 'vitest';
import { contactEmail, groupProgram, individualPackages, subscriptionLink } from '../lib/academy';

describe('Academy public offering', () => {
  it('offers exactly three public individual packages', () => { expect(individualPackages).toHaveLength(3); });
  it('keeps بداية at $40 for eight 30-minute sessions', () => { expect(individualPackages[0]).toMatchObject({ name: 'بداية', price: 40, sessions: 8, duration: 30 }); });
  it('keeps تقدم at $72 for twelve 45-minute sessions', () => { expect(individualPackages[1]).toMatchObject({ name: 'تقدم', price: 72, sessions: 12, duration: 45 }); });
  it('keeps إتقان at $90 for sixteen 45-minute sessions', () => { expect(individualPackages[2]).toMatchObject({ name: 'إتقان', price: 90, sessions: 16, duration: 45 }); });
  it('keeps group schedules at eight meetings and sixteen hours', () => { expect(groupProgram).toMatchObject({ meetings: 8, hours: 16 }); });
  it('limits the advertised group size to eight students', () => { expect(groupProgram.students).toBe(8); });
  it('keeps the Egyptian monthly price range', () => { expect(groupProgram.egypt).toEqual([500, 650]); });
  it('keeps the Jordanian monthly price range', () => { expect(groupProgram.jordan).toEqual([8, 12]); });
  it('addresses subscription requests to the supplied email', () => { expect(contactEmail).toBe('hemmat@oloalhemmah.com'); expect(subscriptionLink('بداية')).toContain('mailto:hemmat@oloalhemmah.com?'); expect(decodeURIComponent(subscriptionLink('بداية'))).toContain('طلب اشتراك — بداية'); });
});