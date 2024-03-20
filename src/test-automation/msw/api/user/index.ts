import { rest } from 'msw';
import me from './me.json';
import { mswApiUrl, sleep } from '../../utils';

export const handlers = [
    rest.get(mswApiUrl('/api/users/me'), async (req, res, ctx) => {
        await sleep(200);
        return res(ctx.status(200), ctx.json(me));
    }),
];
