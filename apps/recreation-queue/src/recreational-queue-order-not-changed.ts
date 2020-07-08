export const RecreationalQueueOrderNotChanged = (queue: Array<number>) => {
  const orderedQueue = [... queue].sort((a, b) => b -a);

  const notChanged = orderedQueue.reduce((notChanged, number, index) => {
    return queue[index] === number ? ++notChanged : notChanged
  }, 0);

  return notChanged;
}
