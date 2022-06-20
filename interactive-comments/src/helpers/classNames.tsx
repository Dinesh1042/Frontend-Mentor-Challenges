// TODO: Fix the any type
const classNames = (...names: any[]) => {
  return names.reduce((acc, val) => {
    if (typeof val === "string" && val) return (acc = acc.concat(` ${val}`));

    if (typeof val === "object")
      acc += classNames(
        ...Object.entries(val)
          .filter(([_, value]) => value)
          .map(([className]) => className)
      );
    return acc;
  }, ``);
};

export default classNames;
