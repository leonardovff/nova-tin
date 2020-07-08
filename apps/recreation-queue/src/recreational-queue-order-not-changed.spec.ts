import { RecreationalQueueOrderNotChanged } from './recreational-queue-order-not-changed';

describe('RecreationalQueueOrderNotChanged', () => {

  test.each([
    [3, [100, 80, 90], 1],
    [4, [100, 120, 30, 50], 0],
    [4, [100, 90, 30, 25], 4],
    [0, [], 0], // Empty queue
  ])(`should return the number os studens that didn't move - (%i, [%i, ...], %i)`, (count, queue, expected) => {
    const notChanged = RecreationalQueueOrderNotChanged(queue);

    expect(notChanged).toEqual(expected);

  });
});
