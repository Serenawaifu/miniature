import { GET } from '../app/api/health/route';

describe('/api/health', () => {
  it('returns ok', async () => {
    const req = { method: 'GET', url: 'http://localhost/api/health' } as any;
    const res = await GET(req);
    const json = await res.json();
    expect(json.ok).toBe(true);
  });
});
